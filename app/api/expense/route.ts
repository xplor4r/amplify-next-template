import {NextRequest, NextResponse} from 'next/server'
import { createClient } from "@/utils/supabase/server";

import prisma from '@/lib/prisma'

type Where = {
    user_id: string | undefined;
    date?: {
        lte: string;
        gte: string;
    };
    categories?: {
        contains: string;
    }
}


export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    // console.log('search params', searchParams);

    const supabase = await createClient();
    const user = await supabase.auth.getUser();
    // console.log('user from session >>>>>', user);
    const userId = user.data.user?.id;

    try {
        if (!userId) {
            throw new Error('user id is required');
        }
        const where: Where = {
            user_id: userId
        }
        const data = await prisma.expense.findMany({
            where,
            orderBy: { updated_at: 'desc'},
            select: {
                notes: true,
                name: true,
                price: true,
                category: true,
                id: true,
                date: true,
                created_at: true,
                updated_at: true
            }
        });

        return NextResponse.json(data);

    } catch (error) {
      console.log('error calling expense api', error);
        return NextResponse.json({ 
            error,
            message: 'Failed to get Income transactions of the user'
        }, {
            status: 500
        });
    }
}