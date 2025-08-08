import {
  AlignJustify,
  Gamepad,
  Gift,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import MyDropDownMenu from "../ui/my-dropdown-menu";

export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-1">
          <AlignJustify className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[300px]">
        <nav className=" flex flex-col gap-3 ">
          <a
            href="#"
            className="flex gap-4 font-bold py-3 px-3 rounded"
          >
            <Gamepad />
            Jogos
          </a>

          <a
            href="#"
            className="flex gap-4 font-bold py-3 px-3 rounded"
          >
            <Gift />
            Gift Cards
          </a>
          <MyDropDownMenu/>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
