import {NextRequest, NextResponse} from 'next/server'

// Bodhi API calls
const BODHI_LLM_GATEWAY_URL = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_BASE_URL;
const BODHI_LLM_GATEWAY_AUTH_TOKEN = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_AUTH_TOKEN;


export async function POST(request: NextRequest) {
    const messages = await request.json();
    // console.log('messages in server', messages);

    const chat_api_url = `${BODHI_LLM_GATEWAY_URL}/api/openai/chat/completions`;

    interface Message {
        role: string;
        content: string;
    }
    let initialMessagesArray: Message[] = [
        {
          "role": "system",
          "content": "You are a personal finance assistance of the user, help him out with all the queries related to finance, budgeting, investment, saving money, wealth goals, investment ideas etc. related to personal finance"
        }
      ]
  
    messages.forEach((element: Message) => {
        initialMessagesArray.push(element);
    });

    const jsonData =  {
        "model": "gpt-4o",
        "messages": initialMessagesArray,
        "max_tokens": 256,
        "seed": 42,
        "stream": false,
        "temperature": 0,
        "top_p": 1
      };

    try {
        // console.log('chat_api_url', chat_api_url);
        const response = await fetch(chat_api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${BODHI_LLM_GATEWAY_AUTH_TOKEN}`,
            },
            body: JSON.stringify(jsonData)
        })
        // console.log('chat response >>>', response);

        const reader = response.body?.getReader();
        if(!reader) {
            throw new Error('No reader found');
        }
        const decoder = new TextDecoder('utf-8');
        let result = '';
        let done = false;
    
        while (!done) {
          const { value, done: streamDone } = await reader.read();
          done = streamDone;
          if (value) {
            result += decoder.decode(value, { stream: true });
          }
        }
    
        // Decode any remaining bytes
        result += decoder.decode();

        // Parse the accumulated result as JSON
        const resultData = JSON.parse(result);
        // console.log('Parsed JSON:', resultData);

        let chatResponse = ''
        if (resultData && resultData.choices) {
            chatResponse = resultData.choices[0].message.content
        }  
        // console.log('chatResponse', chatResponse);

        return NextResponse.json({
            "success": "true",
            "response": chatResponse
        }, {status: 200});

    } catch (error) {
        return NextResponse.json({ 
            error,
            message: 'Failed to get response of the chat'
        }, {
            status: 500
        });
    }
}