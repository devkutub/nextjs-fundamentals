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


export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // validate the request
    // if not valid return 400
    const body = await request.json();
    if (!body.name) return NextResponse.json({ error: "Name os required" }, { status: 400 });
    // fetch the user from db
    // if doesn't exist return 404
    if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });
    // update the user object
    // return the updated user data

    return NextResponse.json({ id: 1, ...body });
}