import { NextRequest, NextResponse } from "next/server";

// if we didn't add request object as a argument then next will send the data from cache
export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Kutub" },
        { id: 2, name: "Reshma" },
    ])
}