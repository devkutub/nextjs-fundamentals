import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // fetch the data from db
    // if not found return 404
    // else return data
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });

    if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 });

    return NextResponse.json(user);

    // if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });

    // return NextResponse.json({ id: 1, name: " Kutub" });
}


export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // validate the request
    // if not valid return 400
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    // if (!body.name) return NextResponse.json({ error: "Name os required" }, { status: 400 });
    // fetch the user from db
    // if doesn't exist return 404
    const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });
    if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 });
    // if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });
    // update the user object
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(params.id) },
        data: {
            name: body.name,
            email: body.email
        }
    })
    // return the updated user data

    return NextResponse.json(updatedUser);
    // return NextResponse.json({ id: 1, ...body });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // fetch the user from db
    // if doesn't exist return 404
    if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });
    // delete the user object
    // return the deleted user data
    return NextResponse.json({ id: 1 });
}