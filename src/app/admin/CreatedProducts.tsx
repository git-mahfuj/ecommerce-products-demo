import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import EditProductsForm from "./edit-product/EditProductsForm";
import { DeleteProductsForm } from "./delete-product/DeleteProducts";

const CreatedProducts = () => {
  return (
    <div className="flex flex-col translate-y-16 items-center justify-between font-sans dark:bg-black">
      <h1 className="font-medium text-2xl">All Products</h1>
      <div className="grid grid-cols-5 justify-center items-center gap-4">
        <Card className="relative mx-auto w-60 pt-0">
          <Image
            src={"/"}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            height={10}
            width={10}
          />
          <CardHeader>
            <CardAction></CardAction>
            <CardTitle>product</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-2 pt-3 justify-center items-center pb-4">
            <div className="flex items-center gap-4">
              <EditProductsForm />
              <DeleteProductsForm />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CreatedProducts;
