import { Input } from "../ui/input";

import { ArrowLeft, Search } from "lucide-react";

interface SearchHeaderProps {
  onClose: () => void;
}

export default function SearchHeader({ onClose }: SearchHeaderProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center gap-3 xl:gap-8 xl:px-6 bg-zinc-900 px-3 py-2 xl:py-3.25">
      <button onClick={onClose} className="p-2 rounded">
        <ArrowLeft className="size-5.5"/>
      </button>
      <Input />
      <button className="p-2">
        <Search className="size-5.5"/>
      </button>
    </div>
  );
}
