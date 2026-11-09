import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ImagePlus, Loader2 } from "lucide-react";
import { toast } from "sonner";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  isProductCategory,
  PRODUCT_CATEGORIES,
  type ApiResponse,
  type PageProps,
  type ProductCategory,
} from "@/types";

interface ProductDetails {
  name: string;
  description: string;
  price: string;
  category: ProductCategory;
}

const DEFAULT_CATEGORY: ProductCategory = "Salad";

const AddProductPage = ({ backendUrl }: PageProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    name: "",
    description: "",
    price: "",
    category: DEFAULT_CATEGORY,
  });

  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(image);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  const handleProductDetails = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategoryChange = (value: string | null) => {
    if (value && isProductCategory(value)) {
      setProductDetails((prev) => ({ ...prev, category: value }));
    }
  };

  const handlePriceInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    const numericRegex = /^-?(\d*\.?\d*)$/;

    if (
      rawValue === "" ||
      rawValue === "." ||
      rawValue === "-" ||
      numericRegex.test(rawValue)
    ) {
      // ONLY call the setter function if the input is valid
      handleProductDetails(e);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      toast.error("Choose an image for the product.");
      return;
    }

    const form = e.currentTarget;

    const formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("description", productDetails.description);
    formData.append("price", productDetails.price);
    formData.append("category", productDetails.category);
    formData.append("image", image);
    // console.log(productDetails);

    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>(
        `${backendUrl}/api/food/add`,
        formData
      );

      if (response.data.success) {
        setProductDetails({
          name: "",
          description: "",
          price: "",
          category: DEFAULT_CATEGORY,
        });
        setImage(null);
        // Reset the file input visually
        form.reset();
        toast.success("Product added successfully!");
      } else {
        console.error("API Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Failed to submit form:",
        axios.isAxiosError(error) && error.response
          ? error.response.data
          : error instanceof Error
            ? error.message
            : error
      );
      toast.error("Failed to add product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Add product"
        description="Publish a new dish to the menu."
      />

      <form
        onSubmit={handleSubmit}
        className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
      >
        <Card>
          <CardHeader>
            <CardTitle>Image</CardTitle>
            <CardDescription>JPG, PNG or WebP.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel htmlFor="image">Upload image</FieldLabel>
              <Input
                id="image"
                type="file"
                accept="image/*"
                required
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              />
            </Field>
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-lg border border-dashed bg-muted/40">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt=""
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                  <ImagePlus className="size-6" />
                  No image selected
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
            <CardDescription>
              Shown to customers on the menu and at checkout.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Product name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Caesar salad"
                  autoComplete="off"
                  value={productDetails.name}
                  onChange={handleProductDetails}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Ingredients, portion size, allergens"
                  value={productDetails.description}
                  onChange={handleProductDetails}
                  required
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="category">Category</FieldLabel>
                  <Select
                    value={productDetails.category}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRODUCT_CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="price">Price (USD)</FieldLabel>
                  <Input
                    id="price"
                    type="text"
                    inputMode="decimal"
                    name="price"
                    placeholder="0.00"
                    value={productDetails.price}
                    onChange={handlePriceInputChange}
                    required
                  />
                  <FieldDescription>Digits and one decimal point.</FieldDescription>
                </Field>
              </div>
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="animate-spin" />}
              {isSubmitting ? "Adding…" : "Add product"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default AddProductPage;
