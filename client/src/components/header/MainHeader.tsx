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
    <header className="flex items-center justify-between px-3 py-2 bg-accent">
      <div className="flex items-center gap-1">
        <NavMenu />
        <Logo />
      </div>
      <div className="flex gap-3 items-center">
        <button className="p-2" onClick={onSearchClick}>
          <Search />
        </button>
        <CartButton/>
        <LoginButton/>
      </div>
    </header>
  );
}
