
import NavMenu from "./NavMenu";

import { ShoppingCart, Search, LogIn } from "lucide-react";

import LogoImg from '@/assets/Logo-simi 2-bg-white.png'

interface MainHeaderProps {
  onSearchClick: () => void;
}

export default function MainHeader({ onSearchClick }: MainHeaderProps) {

  return (
    <header className="flex items-center justify-between px-3 py-2 bg-accent">
      <div className="flex items-center gap-1">
        <NavMenu/>
        <a className="flex items-center gap-1" href="/">
          <img src={LogoImg} alt="" className="w-10" />
          SIMIPLAY
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className="p-2"
          onClick={onSearchClick}
        >
          <Search />
        </button>

        <button className="bg-gray-700 p-1.5 rounded-md flex gap-1">
          <ShoppingCart/>
          {0}
        </button>
        <a href="/login" className="p-1.5">
          <LogIn/> 

        </a>
      </div>
    </header>
  )
}