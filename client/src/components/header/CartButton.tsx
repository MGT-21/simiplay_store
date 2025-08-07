import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  count?: number;
}

export default function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <button className="bg-muted p-1.5 rounded-md flex gap-1 items-center">
      <ShoppingCart />
      {count}
    </button>
  );
}