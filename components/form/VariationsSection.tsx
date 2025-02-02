import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Square } from "lucide-react";

type VariationsProps = {
  variations: string;
  onSelect: (value: string) => void;
};

export function VariationsSection({ variations, onSelect }: VariationsProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Label className='text-sm'>Number of Variations</Label>
      <div className='flex flex-row gap-2 bg-[#c7b4b2] p-1 rounded-lg'>
        <Button
          variant='outline'
          className={`flex-1 gap-2 ${
            variations === "1N" ? "border-buttoncolor border-2" : ""
          }`}
          onClick={() => onSelect("1N")}
        >
          <Square className='w-4 h-4' />
          1N
        </Button>
        <Button
          variant='outline'
          className={`flex-1 gap-2 ${
            variations === "4N" ? "border-buttoncolor border-2" : ""
          }`}
          onClick={() => onSelect("4N")}
        >
          <Square className='w-4 h-4' />
          4N (Pro)
        </Button>
      </div>
    </div>
  );
}
