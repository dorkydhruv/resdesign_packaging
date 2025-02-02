import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

type ThemeColorProps = {
  theme: string;
  color: string;
  onChange: (field: "theme" | "color", value: string) => void;
};

export function ThemeColorSection({ theme, color, onChange }: ThemeColorProps) {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Theme</Label>
        <Select
          value={theme}
          onValueChange={(value) => onChange("theme", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='monotone'>Monotone</SelectItem>
              <SelectItem value='vibrant'>Vibrant</SelectItem>
              <SelectItem value='subtle'>Subtle</SelectItem>
              <SelectItem value='rich'>Rich</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Color</Label>
        <input
          className='w-full h-full rounded-md'
          type='color'
          enterKeyHint='done'
          value={color}
          onChange={(e) => onChange("color", e.target.value)}
        />
      </div>
    </div>
  );
}
