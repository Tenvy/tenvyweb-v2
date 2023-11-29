import { NextResponse } from "next/server"
import prisma from "@/utils/db"
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth"

export async function GET(request: Request, context: { params: { user: string } }) {
    const username = context.params.user
    try {
        const user = await prisma.users.findUnique({
            where: {
                username
            },
            select: {
                uuid: true,
                username: true,
                email: true,
                profileImage: true
            }
        });

        if (!user) {
            return NextResponse.json("User not found", { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json("Error retrieving user", { status: 500 });
    }
}


export async function PATCH(request: Request, context: { params: { user: string } }) {
    const { email, password } = await request.json()
    const uuid = context.params.user

    try {
        const user = await prisma.users.findUnique({
            where: {
                uuid
            }
        })

        if (!user) {
            return NextResponse.json("User tidak ditemukan", { status: 404 })
        }

        const updatedUserData: { email?: string; password?: string } = {}

        if (email) {
            updatedUserData.email = email
        }

        if (password) {
            const encryptedPass = await bcrypt.hash(password, 10)
            updatedUserData.password = encryptedPass
        }

        await prisma.users.update({
            where: {
                uuid
            },
            data: updatedUserData
        })

        return NextResponse.json({message: "User berhasil diupdate", email})
    } catch (error) {
        return NextResponse.json({message: "Terjadi kesalahan saat memperbarui user:", error}, { status: 500 })
    }
}