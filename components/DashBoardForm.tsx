"use client";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import { ProductInfoSection } from "./form/ProductInfoSection";
import { PackageDetailsSection } from "./form/PackageDetailsSection";
import { ThemeColorSection } from "./form/ThemeColorSection";
import { VariationsSection } from "./form/VariationsSection";
import { Input } from "./ui/input";

type FormData = {
  brandName: string;
  productName: string;
  productSubtitle: string;
  productDescription: string;
  packageType: string;
  productStyle: string;
  theme: string;
  color: string;
  illustrationDescription: string;
  variations: string;
};

export default function DashBoardForm() {
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    productName: "",
    productSubtitle: "",
    productDescription: "",
    packageType: "",
    productStyle: "",
    theme: "",
    color: "",
    illustrationDescription: "",
    variations: "1N",
  });

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='flex flex-col border-r max-w-2xl mx-auto p-4 gap-4'>
      <ProductInfoSection
        brandName={formData.brandName}
        productName={formData.productName}
        productSubtitle={formData.productSubtitle}
        productDescription={formData.productDescription}
        onChange={(field, value) => handleFormChange(field, value)}
      />

      <Separator />

      <PackageDetailsSection
        packageType={formData.packageType}
        productStyle={formData.productStyle}
        onChange={(field, value) => handleFormChange(field, value)}
      />

      <ThemeColorSection
        theme={formData.theme}
        onChange={(value) => handleFormChange("theme", value)}
      />

      <div className='flex flex-col gap-2'>
        <Label className='text-sm'>Illustration Description</Label>
        <Textarea
          placeholder='It will represent your design based on the provided product name & style'
          value={formData.illustrationDescription}
          onChange={(e) =>
            handleFormChange("illustrationDescription", e.target.value)
          }
        />
      </div>

      <Separator />

      <VariationsSection
        variations={formData.variations}
        onSelect={(value) => handleFormChange("variations", value)}
      />

      <Button
        className='bg-buttoncolor'
        onClick={() => console.log("Submitted:", formData)}
      >
        <div className='flex items-center gap-2 text-white'>
          <Sparkle className='w-4 h-4' />
          Generate
        </div>
      </Button>
    </div>
  );
}
