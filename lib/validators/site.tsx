import { z } from "zod";

export const categorySchema = z.object({
    title: z.string().min(3).max(10),
    image: z.string().min(3).max(255)
})