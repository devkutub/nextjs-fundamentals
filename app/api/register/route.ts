import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const validationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = validationSchema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: {
            email: validation.data.email
        }
    });

    if (user) return NextResponse.json('User already exist', { status: 400 });

    const hashedPassword = await bcrypt.hash(validation.data.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: validation.data.email,
            hashedPassword
        }
    });

    return NextResponse.json(newUser, { status: 201 });
}