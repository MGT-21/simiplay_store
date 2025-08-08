import { AlignJustify, Ellipsis, Gamepad, Gift, Star } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import MyDropDownItem from "../ui/my-dropdown-item";
import MyItem from "../ui/my-item-link";
import { Separator } from "../ui/separator";

export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-1">
          <AlignJustify className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[300px]">
        <nav className=" flex flex-col gap-2 ">
          <MyItem>
            <Star className="size-5.5"/>
            Destaques
          </MyItem>
          <Separator/>
          <MyItem>
            <Gamepad className="size-5.5"/>
            Jogos
          </MyItem>
          <MyItem>
            <Gift />
            Gift Cards
          </MyItem>
          <MyDropDownItem />
          <MyItem>
            <Ellipsis className="size-5.5"/>
            Sobre
          </MyItem>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
