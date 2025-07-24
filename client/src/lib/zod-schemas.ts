import {z} from "zod";


export const loginSchema = z.object({
  email: z.email("Digite um email válido"),
  password: z.string().min(1, "A senha é obrigatória")
})

export type LoginSchemaType = z.infer<typeof loginSchema>


export const registerSchema = z.object({
  name: z.string().min(3, "Digite um nome válido"),
  email: z.email("Digite um email válido"),
  password: z.string().min(1, "A senha é obrigatória").min(8, "A senha precisa ter no mínimo 8 caracteres"),
  confirmPassword: z.string().min(1, "Confirme a senha")
})
.refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

export type RegisterSchemaType = z.infer<typeof registerSchema>


