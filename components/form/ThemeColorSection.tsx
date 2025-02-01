import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ThemeColorProps = {
  theme: string;
  onChange: (value: string) => void;
};

export function ThemeColorSection({ theme, onChange }: ThemeColorProps) {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Theme</Label>
        <Select value={theme} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='manual'>Monotone</SelectItem>
              <SelectItem value='theme'>Vibrant</SelectItem>
              <SelectItem value='color'>Subtle</SelectItem>
              <SelectItem value='monotone'>Rich</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Color</Label>
        {/* Insert ColorPicker component if available */}
      </div>
    </div>
  );
}
