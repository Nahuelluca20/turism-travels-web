"use server";
import {revalidatePath} from "next/cache";
import {z} from "zod";
import {NextResponse} from "next/server";

import prisma from "@/lib/prisma";

export async function createTravel(prevState: any, formData: FormData) {
  const schema = z.object({
    title: z.string().nonempty(),
    content: z.string().nonempty(),
  });

  const data = schema.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  try {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: "cln0z86bz0000uy2gvgtzwxv0",
        published: false,
      },
    });

    revalidatePath("/");

    return {message: `Added travel ${data.title}`};
  } catch (error) {
    return NextResponse.json({error}, {status: 500});
  }
}
