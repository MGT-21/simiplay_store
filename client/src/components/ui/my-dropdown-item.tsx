import {
  LayoutGrid,
  ChevronDown,
  Joystick,
  Gamepad2,
  Square,
  Monitor,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";

 export default function MyDropDownItem() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  function toggleDisplay() {
    setDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    if (dropdownOpen) {
      const scrollHeight = contentRef.current?.scrollHeight ?? 0;
      setMaxHeight(`${scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [dropdownOpen]);

  return (
    <div>
      <button
        className={`flex gap-4 xl:gap-2 font-bold py-3 px-3 cursor-pointer w-full rounded-md transition-all items-center 
         ${
          dropdownOpen ? "bg-primary xl:bg-transparent" : ""
        }`}
        onClick={toggleDisplay}
        
      >
        <LayoutGrid className="size-5.5"/>
        Plataformas
        <ChevronDown
          className={`w-5 transition-transform duration-300 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
        <div
          ref={contentRef}
          style={{
            maxHeight,
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
          className="grid text-sm grid-cols-1 gap-3 px-1t-4 xl:absolute xl:bg-accent xl:mt-1 rounded-md xl:w-50 xl:pl-2"
        >
          <a href="" className="flex gap-2 px-3 items-center pt-4">
            <Monitor className="size-4" />
            PC
          </a>
          <a href="" className="flex gap-2 px-3 items-center">
            <Joystick className="size-4" />
            Nintendo
          </a>
          <a href="" className="flex gap-2 px-3  items-center">
            <Gamepad2 className="size-4" />
            Xbox
          </a>
          <a href="" className="flex gap-2 px-3 items-center pb-4">
            <Square className="size-4" />
            Playstation
          </a>
          
        </div>
      
    </div>
  );
}


