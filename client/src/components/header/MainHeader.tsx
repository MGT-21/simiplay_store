import NavMenu from "./NavMenu";
import CartButton from "./CartButton";
import Logo from "./Logo";

import UserProfileBt from "./UserProfileBt";

import { getUser } from "@/hooks/userAuth";

import { Search } from "lucide-react";

import LoginButton from "./LoginButton";
import NavItems from "./NavBar";

interface MainHeaderProps {
  onSearchClick: () => void;
}

export default function MainHeader({ onSearchClick }: MainHeaderProps) {
  const user = getUser();

  return (
    <header className="flex items-center justify-between px-3 py-2 bg-zinc-900 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-3">
        <NavMenu />
        <Logo />
      </div>
      <div className="hiden gap-3 items-center hidden xl:flex">
        <NavItems />
      </div>
      <div className="flex gap-3 items-center">
        <button className="p-2" onClick={onSearchClick}>
          <Search className="size-5.5" />
        </button>
        <CartButton />
        {user ? (
          <UserProfileBt name={user.name ? user.name : ""}>
            {user.name ? user.name.charAt(0) : ""}
          </UserProfileBt>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}
