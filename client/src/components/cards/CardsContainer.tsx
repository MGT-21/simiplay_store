import { Plus } from 'lucide-react';
import { Button } from "../ui/button";

import CardItem from './CardItem';


export default function CardContainer() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl">Jogos em Destaque</h2>
          <p className="hidden md:block">todos os jogos em destaque essa semana</p>
        </div>
        <Button className="">
          <Plus />
        </Button>
      </div>
      <div className="pt-4 grid grid-cols-2 grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-3 [&>*:last-child]:md:hidden [&>*:last-child]:lg:flex lg:grid-cols-4">
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      </div>
    </section>
  );
}
