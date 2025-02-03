import { NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const { notes, name, amount, category, date, user_id} = await request.json();

    try{
        await prisma.income.create({
        data: {
            notes,
            name,
            amount,
            category,
            user_id,
            date,
            }
        });
        return NextResponse.json({ "success": true, "message": "Income added successfully"}, { status: 201});
    } catch (error) {
        return NextResponse.json({ error, message: 'Failed to add income' }, { status: 500})
    }

}