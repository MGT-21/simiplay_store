import { Button } from "../ui/button";

import ImgGame from "@/assets/er.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import playstationIcon from "@/assets/playstation.png";
import xboxIcon from "@/assets/xbox.png";
import steamIcon from "@/assets/steam.png";

export default function CardItem() {
  return (
    <Card className="">
      <CardHeader>
        <img src={ImgGame} alt="" className="rounded-t-xl w-full" />
      </CardHeader>
      <CardContent>
        <h3 className="font-bold text-xl mb-2">Elden ring</h3>
        <div className="flex gap-2 items-center">
          {/*plataforms*/}
          <img src={steamIcon} alt="" className="md:size-4 size-3" />
          <img src={xboxIcon} alt="" className="md:size-4 size-3" />
          <img src={playstationIcon} alt="" className="md:size-5 size-4" />
          <i className="text-primary">|</i> 
          <h2 className="text-sm overflow-hidden ">Fronsoftware</h2>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <div className="mb-2 flex gap-2 items-center">
          <h2 className="text-primary font-bold md:text-lg text-sm">R$ 200,00</h2>
          <h3 className="text-muted-foreground line-through text-xs">R$ 150,00</h3>
        </div>
        <Button className="w-full bg-emerald-200 hover: text-black font-bold md:text-xl">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
