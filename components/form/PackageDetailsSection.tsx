import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type PackageDetailsProps = {
  packageType: string;
  productStyle: string;
  onChange: (field: "packageType" | "productStyle", value: string) => void;
};

export function PackageDetailsSection({
  packageType,
  productStyle,
  onChange,
}: PackageDetailsProps) {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Package Type</Label>
        <Select
          value={packageType}
          defaultValue={packageType}
          onValueChange={(value) => onChange("packageType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select type' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='standup-bag'>Standup Bag</SelectItem>
              <SelectItem value='tote-bag'>Tote Bag</SelectItem>
              <SelectItem value='glass-bottle'>Glass Bottle</SelectItem>
              <SelectItem value='glass-jar'>Glass Jar</SelectItem>
              <SelectItem value='box'>Box</SelectItem>
              <SelectItem value='packet'>Packet</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <Label className='text-sm'>Style</Label>
        <Select
          value={productStyle}
          defaultValue={productStyle}
          onValueChange={(value) => onChange("productStyle", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select style' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='minimal'>Minimal</SelectItem>
              <SelectItem value='bold-and-colorful'>Bold and Colorful</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
