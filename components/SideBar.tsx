"use client";

import { History } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SideBar() {
  const [activeSection, setActiveSection] = React.useState("brand");
  return (
    <div className='w-20 min-h-full border-r border-gray-200 p-4 flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center text-gray-500 text-sm gap-2'>
        <Image
          alt={"magic-wand"}
          src={"/magic-wand.png"}
          width={20}
          height={20}
        />
        Generate
      </div>
      <div className='flex flex-col items-center text-gray-500 text-sm gap-2'>
        <History size={20} />
        History
      </div>
    </div>
  );
}
