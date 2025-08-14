import { Ellipsis, Gamepad, Gift, Star } from "lucide-react";

import MyDropDownItem from "../ui/my-dropdown-item";
import MyItem from "../ui/my-item-link";
import { Separator } from "../ui/separator";


export default function NavItems() {
  return (
    <nav className=" flex flex-col xl:flex-row gap-2">
      <MyItem>
        <Star className="size-5.5" />
        Destaques
      </MyItem>
      <Separator className="xl:hidden"/>
      <MyItem>
        <Gamepad className="size-5.5" />
        Jogos
      </MyItem>
      <MyItem>
        <Gift />
        Gift Cards
      </MyItem>
      <MyDropDownItem />
      <MyItem>
        <Ellipsis className="size-5.5" />
        Sobre
      </MyItem>
    </nav>
  );
}
