// Bodhi API calls
const BODHI_LLM_GATEWAY_URL = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_BASE_URL;
const BODHI_LLM_GATEWAY_AUTH_TOKEN = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_AUTH_TOKEN;


// chat completion API (Ask bodhi)
export const getChatData = async () => {
    const res = await fetch('/api/chat');

    if (!res.ok){
        const error = await res.json();
        throw error;
    }
    return await res.json();
}

const dummyMessages=  [
    {
      "role": "system",
      "content": "You are a helpful assistant"
    },
    {
      "role": "user",
      "content": "Explaing AI in 3 sentences"
    }
  ];

interface Message{
    role: string;
    content: string;
}


export const askChatData = async (messages: Message[]) => {
    const res = await fetch('/api/chat/ask', { method: 'POST', body: JSON.stringify(messages) });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}