"use client";
import { useState } from "react";
import AppBar from "@/components/AppBar";
import DashBoardForm from "@/components/DashBoardForm";
import GenerateDesign from "@/components/GenerateDesign";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  const [generatedImages, setGeneratedImages] = useState<
    { imageURL: string }[]
  >([]);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className='flex flex-col min-h-screen h-full font-normal'>
      <AppBar />
      <div className='flex flex-row justify-start'>
        <SideBar />
        <DashBoardForm
          onStartGenerating={(state) => setIsGenerating(state)}
          onImagesGenerated={(imgs) => setGeneratedImages(imgs)}
        />
        <GenerateDesign images={generatedImages} isGenerating={isGenerating} />
      </div>
    </div>
  );
}
