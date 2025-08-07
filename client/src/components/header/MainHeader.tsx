import NavMenu from "./NavMenu";
import CartButton from "./CartButton";
import Logo from "./Logo";

import {Search} from "lucide-react";

import LoginButton from "./LoginButton";

interface MainHeaderProps {
  onSearchClick: () => void;
}

export default function MainHeader({ onSearchClick }: MainHeaderProps) {
  return (
    <header className="flex items-center justify-between px-3 py-2 bg-zinc-900 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-1">
        <NavMenu />
        <Logo />
      </div>
      <div className="flex gap-3 items-center">
        <button className="p-2" onClick={onSearchClick}>
          <Search className="size-5.5"/>
        </button>
        <CartButton/>
        <LoginButton/>
      </div>
    </header>
  );
}
