import {NextRequest, NextResponse} from 'next/server'
// import { createClient } from "@/utils/supabase/server";

// import prisma from '@/lib/prisma'

// type Where = {
//     user_id: string | undefined;
//     date?: {
//         lte: string;
//         gte: string;
//     };
//     categories?: {
//         contains: string;
//     }
// }


export async function GET(request: NextRequest) {

    // Bodhi API calls
    const BODHI_LLM_GATEWAY_URL = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_BASE_URL;
    const BODHI_LLM_GATEWAY_AUTH_TOKEN = process.env.NEXT_PUBLIC_BODHI_LLM_GATEWAY_AUTH_TOKEN;

    const chat_api_url = `${BODHI_LLM_GATEWAY_URL}/api/openai/chat/completions`
    // console.log('chat_api_url', chat_api_url);

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
        
        const response = await fetch(chat_api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${BODHI_LLM_GATEWAY_AUTH_TOKEN}`,
            },
            body: JSON.stringify(jsonData)
        })
        // console.log('chat response >>>', response);

        return NextResponse.json(response);

    } catch (error) {
        return NextResponse.json({ 
            error,
            message: 'Failed to get Expense transactions of the user'
        }, {
            status: 500
        });
    }
}