import Image from "../assets/full-shot-gamer-sitting-chair.jpg"
import Logo from "@/assets/Group 4 v4.png"
import { AlertProvider } from "@/components/ui/AlertContext";

interface FormLayoutProps {
  children: React.ReactNode
}

export default function authLayout({ children }: FormLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <img src={Logo} className="size-8" />
            Simiplay
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AlertProvider>
              {children}
            </AlertProvider>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={Image}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
