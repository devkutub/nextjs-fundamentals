import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// if we didn't add request object as a argument then next will send the data from cache
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany({});

    return NextResponse.json(users);
    // return NextResponse.json([
    //     { id: 1, name: "Kutub" },
    //     { id: 2, name: "Reshma" },
    // ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    // validate
    // if not valid return 400
    // else return data
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    // if (!body.name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
    return NextResponse.json({ id: 1, ...body }, { status: 201 });
}