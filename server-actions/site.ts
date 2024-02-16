"use server";

import { prisma } from "@/prisma/db";

export const addCategory = async ({ title, image }: { title:string, image: string }) => {
    await prisma.productCategory.create({
        data: {
            title: title,
            image: image
        }
    })
};