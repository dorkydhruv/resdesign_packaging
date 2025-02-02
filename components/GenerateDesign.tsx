"use client";
import { Sparkle } from "lucide-react";

type GenerateDesignProps = {
  images: { imageURL: string }[];
  isGenerating: boolean;
};

export default function GenerateDesign({
  images,
  isGenerating,
}: GenerateDesignProps) {
  return (
    <div className='flex-1 w-full h-[92vh] flex justify-center items-center'>
      {isGenerating ? (
        <div className='w-96 h-96 bg-buttoncolor/30 rounded-xl flex items-center justify-center text-black gap-4 transition-transform duration-300 animate-flicker'>
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              Generating... <Sparkle />
            </div>
          </div>
        </div>
      ) : images.length === 1 ? (
        <div className="flex justify-center items-center">
          <img
            src={images[0].imageURL}
            alt="Design 1"
            className='w-72 h-72 object-cover rounded-md'
          />
        </div>
      ) : images.length === 4 ? (
        <div className='grid grid-cols-2 gap-4'>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.imageURL}
              alt={`Design ${index + 1}`}
              className='w-72 h-72 object-cover rounded-md'
            />
          ))}
        </div>
      ) : (
        <div className='w-96 h-96 bg-buttoncolor/30 rounded-xl flex items-center justify-center text-black gap-4'>
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              Design Packages in seconds <Sparkle />
            </div>
            <br />
            <div className='text-xs flex justify-center items-center gap-2 text-gray-600'>
              Lets Start!
              <br />
              Share Products Details & Select Packaging Options
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-flicker {
          animation: flicker 1s infinite;
        }
      `}</style>
    </div>
  );
}
