import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // fetch the data from db
    // if not found return 404
    // else return data
    if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });

    return NextResponse.json({ id: 1, name: " Kutub" });
}