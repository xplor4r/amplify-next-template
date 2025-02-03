import {NextRequest, NextResponse} from 'next/server'

// Bodhi API calls
const BODHI_LLM_GATEWAY_URL = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_BASE_URL;
const BODHI_LLM_GATEWAY_AUTH_TOKEN = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_AUTH_TOKEN;


export async function GET(request: NextRequest) {
    const chat_api_url = `${BODHI_LLM_GATEWAY_URL}/api/openai/chat/completions`

    const jsonData =  {
        "model": "gpt-4o",
        "messages": [
          {
            "role": "system",
            "content": "You are a helpful assistant"
          },
          {
            "role": "user",
            "content": "Explaing AI in 3 sentences"
          }
        ],
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
        return NextResponse.json(resultData, {status: 200});

    } catch (error) {
        return NextResponse.json({ 
            error,
            message: 'Failed to get response of the chat'
        }, {
            status: 500
        });
    }
}