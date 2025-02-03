import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const {name, notes, price, units, category, date, user_id} = await request.json();

    try {
        await prisma.investments.create({
            data: {
                notes,
                name,
                price,
                category,
                user_id,
                date, 
                units
            }
        });
        return NextResponse.json({
            "success": true,
            "message": "Investment added successfully"
        }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to add investment"
        });
    }
}