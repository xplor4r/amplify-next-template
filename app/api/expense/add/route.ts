import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"

export async function POST(request: NextRequest) {
    const { notes, name, price, category, date, paid_via, user_id} = await request.json();

    try {
        await prisma.expense.create({
            data: {
                notes,
                name,
                price,
                user_id,
                category,
                date,
                paid_via,
            }
        });
        return NextResponse.json({
            "success": true,
            "message": "Expense added successfuly"
        }, {
            status: 201
        });
    } catch(error) {
        console.log('error >>>', error)
        return NextResponse.json({ error, message: 'Failed to add expense'},  { status: 500})
    }

}