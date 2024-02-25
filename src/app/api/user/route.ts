import prisma from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { authOptions } from "@/lib/AuthOptions"
import { getServerSession } from "next-auth"
import { supabase } from "@/lib/supabaseClient"
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  const { username, nickname, email, password } = await request.json()

  try {
    const userCheck = await prisma.users.findUnique({
      where: {
        username
      }
    })

    if (!userCheck) {
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
    return NextResponse.json({ msg: "Something wrong", error })
  }
}

export async function PATCH(request: Request) {
  const session: any = await getServerSession(authOptions)
  const uuid = uuidv4()
  const formData = await request.formData()
  const nickname = formData.get('nickname') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const image = formData.get('image') as unknown as File
  let data: { publicUrl?: string } = {}

  console.log({nickname, email, password, session})
  try {
    if (!session) return NextResponse.json({ msg: 'Please Login first' })
        
    const user = await prisma.users.findUnique({
      where: {
        uuid: session.user.uuid
      }
    })
    
    if (!user) {
      return NextResponse.json("User tidak ditemukan", { status: 404 })
    }

    if (image) {
      const { data: uploadedFile } = await supabase.storage.from('profile_images').upload(`${session?.user?.username}`, image, {
        upsert: true,
      })
    if(uploadedFile) {
      const response = supabase.storage.from('profile_images').getPublicUrl(uploadedFile.path)
      data = response.data;
    }
    }

    
    
    const updateData: {nickname?: string, email?: string; password?: string; profileImage?: string} = {}
    if (nickname) updateData.nickname = nickname
    if (email) updateData.email = email
    if (password) updateData.password = await bcrypt.hash(password, 10)
    if (data.publicUrl) updateData.profileImage = data.publicUrl

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ message: "No data to update" })
    }

    const response = await prisma.users.update({
      where: {
        uuid: session.user.uuid
      },
      data: updateData
    })
    console.log({response})
    return NextResponse.json({ message: "User berhasil diupdate", response})
  } catch (error) {
    return NextResponse.json({ message: "Terjadi kesalahan saat memperbarui user:", error }, { status: 500 })
  }
}

