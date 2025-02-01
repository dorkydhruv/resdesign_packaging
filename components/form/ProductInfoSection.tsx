import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type ProductInfoProps = {
  brandName: string;
  productName: string;
  productSubtitle: string;
  productDescription: string;
  onChange: (
    field:
      | "brandName"
      | "productName"
      | "productSubtitle"
      | "productDescription",
    value: string
  ) => void;
};

export function ProductInfoSection({
  brandName,
  productName,
  productSubtitle,
  productDescription,
  onChange,
}: ProductInfoProps) {
  return (
    <div className='space-y-4'>
      {/* Brand & Product Row */}
      <div className='flex flex-row gap-2'>
        <div className='flex flex-col gap-1 flex-1'>
          <Label className='text-sm'>Brand Name</Label>
          <Input
            placeholder='Starbucks'
            value={brandName}
            onChange={(e) => onChange("brandName", e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1 flex-1'>
          <Label className='text-sm'>Product Name</Label>
          <Input
            placeholder='Products blend coffee'
            value={productName}
            onChange={(e) => onChange("productName", e.target.value)}
          />
        </div>
      </div>
      {/* Subtitle */}
      <div className='flex flex-col gap-2'>
        <Label className='text-sm'>Product Subtitle (max 20 words)</Label>
        <Input
          placeholder='100% organic coffee beans'
          value={productSubtitle}
          onChange={(e) => onChange("productSubtitle", e.target.value)}
        />
      </div>
      {/* Description */}
      <div className='flex flex-col gap-2'>
        <Label className='text-sm'>Product Description</Label>
        <Textarea
          placeholder='Keep it short. Each description as a new line gives better results'
          value={productDescription}
          onChange={(e) => onChange("productDescription", e.target.value)}
        />
      </div>
    </div>
  );
}
