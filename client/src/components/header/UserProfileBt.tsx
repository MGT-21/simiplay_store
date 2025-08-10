import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Server,Gamepad2,LogOut,SquareUser    } from "lucide-react";


interface UserProfileProps {
  children: React.ReactNode
  name: string
}

export default function UserProfileBt({children,name}:UserProfileProps) {

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarFallback>
            {children}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1 mr-1 w-50">
        <DropdownMenuLabel>Olá, {name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Gamepad2/> Meus Jogos</DropdownMenuItem>
        <DropdownMenuItem><Server/> Meus pedidos</DropdownMenuItem>
        <DropdownMenuItem><SquareUser/> Minha conta</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}><LogOut className="text-red-400"/> Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}