import { Menu, Gamepad, Gift, LayoutGrid, Joystick, Gamepad2, Square, Monitor, ChevronDown, ShoppingCart } from "lucide-react";

import LogoImg from '@/assets/Logo-simi 2-bg-white.png'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 py-2 bg-accent">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-1">
              <Menu className="h-8 w-8" />
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <nav className=" flex flex-col gap-4 px-4">
              <a href="#" className="flex gap-2 font-bold hover:bg-accent p-2 rounded">
                <Gamepad />
                Jogos
              </a>

              <a href="#" className="flex gap-2 font-bold hover:bg-accent p-2 rounded">
                <Gift />
                Gift Cards
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-2 font-bold hover:bg-accent p-2 rounded items-center">
                  <LayoutGrid />
                  Plataformas
                  <ChevronDown className="w-4.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-3xs">
                  <DropdownMenuItem>
                    <Joystick />
                    Nintendo
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Gamepad2 />
                    Xbox
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Square />
                    Playstation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Monitor />
                    PC
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </SheetContent>
        </Sheet>
        <a className="flex items-center gap-1" href="">
          <img src={LogoImg} alt="" className="w-11" />
          SIMIPLAY
        </a>
      </div>
      <div className="flex gap-2 items-center">
      </div>
    </header>
  )
}