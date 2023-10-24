import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Milk", price: 10 },
        { id: 2, name: "Break", price: 7 },
    ])
}