import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const {name, notes, url, price, paid, notify, date, user_id, active, cancelled_at} = await request.json();

    try {
        await prisma.subscriptions.create({
            data: {
                notes,
                name,
                url,
                price,
                paid,
                notify,
                date,
                user_id,
                active,
                cancelled_at
            }
        });
        return NextResponse.json({
            "success": true,
            "message": "Subscriptions added successfully"
        }, {
            status: 201
        })
    } catch(error) {
        return NextResponse.json({
            error,
            message: "Failed to add subscription"
        })
    }
}