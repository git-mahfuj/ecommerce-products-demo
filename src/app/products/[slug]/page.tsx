/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const SingleProductsPage = () => {
  const [singleProduct, setSingleProducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const grabedProduct = async () => {
      setloading(true);
      try {
        const res = await axios.get("/api/products/get-products");
        setSingleProducts(res.data.products);
      } catch (error: any) {
        console.log(error.message);
        toast.error("Server Error while Fetching Data");
      } finally {
        setloading(false);
      }
    };
    grabedProduct();
  }, []);
  console.log(singleProduct);
  const { slug } = useParams() as { slug: string };

  const product = singleProduct.find((p: ProductsData) => p.slug === slug);
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
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="max-w-lg"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductsPage;
