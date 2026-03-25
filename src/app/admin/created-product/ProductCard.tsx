import React from "react";
import EditProductsForm from "../edit-product/EditProductsForm";
import { DeleteProductsForm } from "../delete-product/DeleteProducts";
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
import { ProductsType } from "@/lib/types";
import Link from "next/link";
const ProductCard = ({products} : {
    products : ProductsType[]
}) => {
  return (
    <div>
      <Card key={products._id} className="relative mx-auto w-60 pt-0">
        <Link className="cursor-pointer" href={`/products/${products.slug}`}
      >
        <Image
          src={"/"}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          height={10}
          width={10}
        />
      </Link>
        <CardHeader>
          <CardAction></CardAction>
          <CardTitle>{products.name}</CardTitle>
          <div className="flex items-center gap-2">
            <CardTitle>{products.discountedPrice}</CardTitle>
            <CardTitle className="line-through text-neutral-500">
              {products.price}
            </CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 pt-3 justify-center items-center pb-4">
          <div className="flex items-center gap-4">
            <EditProductsForm products={products}/>
            <DeleteProductsForm products={products}/>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
