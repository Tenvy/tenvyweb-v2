import prisma from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    const { username, nickname, email, password } = await request.json()

    try {
        const userCheck = await prisma.users.findUnique({
            where: {
                username
            }
        })

        if(!userCheck) {
            return NextResponse.json("User sudah ada")
        }

        const encryptedPass = await bcrypt.hash(password, 10)

        await prisma.users.create({
            data: {
                username,
                nickname: nickname ? nickname : username,
                email,
                password: encryptedPass,
                role: "CONTRIBUTOR",
                profileImage: "https://i.pinimg.com/736x/d0/9b/bd/d09bbd8e98ebaa93996fb4c059d294af.jpg",
            }
        })
    } catch (error) {
        return NextResponse.json({msg: "Something wrong", error})
    }
}
