"use client";
import React from "react";
import { ProductsData } from "@/components/Products.Collection";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SingleProductsPage = () => {
  const { slug } = useParams() as { slug: string };
  const mockData: ProductsData[] = [
    {
      id: 1,
      slug: "product-1",
      name: "Product 1",
      description: "Description for Product 1",
      price: 99.99,
      discountedPrice: 79.99,
    },
    {
      id: 2,
      slug: "product-2",
      name: "Product 2",
      description: "Description for Product 2",
      price: 149.99,
    },
    {
      id: 3,
      slug: "product-3",
      name: "Product 3",
      description: "Description for Product 3",
      price: 199.99,
      discountedPrice: 159.99,
    },
    {
      id: 4,
      slug: "product-4",
      name: "Product 4",
      description: "Description for Product 4",
      price: 89.99,
      discountedPrice: 69.99,
    },
    {
      id: 5,
      slug: "product-5",
      name: "Product 5",
      description: "Description for Product 5",
      price: 129.99,
    },
    {
      id: 6,
      slug: "product-6",
      name: "Product 6",
      description: "Description for Product 6",
      price: 179.99,
      discountedPrice: 139.99,
    },
    {
      id: 7,
      slug: "product-7",
      name: "Product 7",
      description: "Description for Product 7",
      price: 109.99,
    },
    {
      id: 8,
      slug: "product-8",
      name: "Product 8",
      description: "Description for Product 8",
      price: 159.99,
      discountedPrice: 119.99,
    },
    {
      id: 9,
      slug: "product-9",
      name: "Product 9",
      description: "Description for Product 9",
      price: 219.99,
    },
  ];
  const product = mockData.find((p: ProductsData) => p.slug === slug);
  if (!product) {
    return (
      <div className="flex flex-col translate-y-16 items-center justify-between font-sans dark:bg-black">
        <h1 className="text-4xl font-medium">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col translate-y-16 items-center gap-10 justify-between font-sans dark:bg-black max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-medium">{product.name}</h1>
      <div className="grid grid-cols-2 gap-38 w-full">
        <div>
          <p className="text-2xl">Product Image</p>
          <div className="bg-gray-200 h-96 w-full mt-4 rounded-lg flex items-center justify-center">
            Image for {product.name}
          </div>
        </div>
        <div>
          <div>
            <p className="text-3xl font-medium mb-4">{product.name}</p>
            <p className="text-lg mb-6">{product.description}</p>
            <div className="flex items-center gap-4 mb-6">
              {product.discountedPrice ? (
                <>
                  <span className="text-3xl font-bold text-green-600">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                  <span className="line-through text-muted-foreground text-xl">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <Button className=" text-white px-6 py-2 rounded-lg ">
              Add To Cart
            </Button>
          </div>
          <div>
            <Accordion  type="single"
      collapsible
      defaultValue="item-1"
      className="max-w-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                 {product.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductsPage;
