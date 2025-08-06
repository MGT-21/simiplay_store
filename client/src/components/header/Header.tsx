import { useState } from "react";
import MainHeader from "./MainHeader";
import SearchHeader from "./SearchHeader";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {searchOpen ? (
        <SearchHeader onClose={() => setSearchOpen(false)} />
      ) : (
        <MainHeader onSearchClick={() => setSearchOpen(true)} />
      )}
    </>
  );
}