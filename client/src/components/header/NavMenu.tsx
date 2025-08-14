import { AlignJustify } from "lucide-react";
import NavItems from "./NavBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-1 xl:hidden">
          <AlignJustify className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[300px]">
        <NavItems />
      </SheetContent>
    </Sheet>
  );
}
