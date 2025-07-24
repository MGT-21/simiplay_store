import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { registerSchema } from "@/lib/zod-schemas"
import type { RegisterSchemaType } from "@/lib/zod-schemas"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"


export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const { confirmPassword, ...cleanData } = values;


      const response = await axios.post(`${API_URL}/auth/register`, cleanData);
      console.log('Usuário registrado com sucesso:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro de API:', error.response?.data || error.message);
      } else {
        console.error('Erro desconhecido:', error);
      }
    }
  }
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Cadastro</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Preencha os campos abaixo para criar sua conta
            </p>
          </div>
          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Marcello" autoComplete="name"{...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com"
                      autoComplete="username"{...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1">Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} autoComplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1">Confirme a senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field}
                      autoComplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-start gap-3">
              <Checkbox id="terms-2" defaultChecked />
              <div className="grid gap-2">
                <Label htmlFor="terms-2">Aceito os termos e condições</Label>
                <p className="text-muted-foreground text-sm">
                  Ao clicar nesta caixa de seleção, você concorda com os termos e condições.
                </p>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Cadastrar-se
            </Button>
          </div>
          <div className="text-center text-sm">
            Já tem conta?{" "}
            <a href="/login" className="underline underline-offset-4">
              Entrar
            </a>
          </div>
        </form>
      </Form >
    )
  }
