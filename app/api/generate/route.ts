import { NextResponse, NextRequest } from "next/server";
import { Runware } from "@runware/sdk-js";
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

export const POST = async (req: NextRequest) => {
  const formData: FormData = await req.json();
  console.log(formData);
  const runware = new Runware({
    apiKey: process.env.RUNWARE_API_KEY ?? "",
  });
  const prompt = `
  Create a packaging design concept based on the following product information:

  Brand Name: ${formData.brandName || "N/A"}
  Product Name: ${formData.productName || "N/A"}
  Product Subtitle: ${formData.productSubtitle || "N/A"}
  Product Description: ${formData.productDescription || "N/A"}
  Package Type: ${formData.packageType} (e.g., box, bottle, pouch)
  Product Style: ${formData.productStyle} (e.g., minimal, rustic, modern)
  Theme: ${formData.theme} (e.g., rich, elegant, playful)
  Color: $formData.{color} (Hex code)
  Illustration Description: ${
    formData.illustrationDescription || "N/A"
  } (Describe any desired illustrations)

  Consider the target audience and create a visually appealing and informative design.  Provide a detailed description of the packaging, including:

  * **Overall appearance:** Describe the shape, size, and general aesthetic.
  * **Color scheme:** Explain how the color is used and its impact.
  * **Typography:** Suggest font styles and sizes for the product name, brand name, and other text.
  * **Graphics/Illustrations:** Describe any visuals and their placement.
  * **Material:** Suggest suitable packaging material.
  * **Layout:** Describe the arrangement of elements on the packaging.
  * **Special features (if any):**  e.g., embossing, spot UV coating.

  If the illustration description is provided, incorporate those details into the design.  If not, suggest relevant visuals that would complement the product.  Focus on creating a concept that effectively communicates the product's value and appeals to the target market.  Be creative and detailed in your description.  Avoid generating actual images; focus on the descriptive concept.
  `;
  const response = await runware.requestImages({
    positivePrompt: prompt,
    model: "runware:100@1",
    width: 256,
    height: 256,
    numberResults: formData.variations === "1N" ? 1 : 4,
  });
  console.log(response);
  return NextResponse.json(response);
};
