"use client";
import { Badge } from "@/components/ui/badge";
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
import { ProductsData } from "./Products.Collection";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Products({ products }: { products: ProductsData }) {
  return (
    <Card className="relative mx-auto w-90 pt-0">
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
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{products.name}</CardTitle>
        <CardDescription>{products.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2 pt-0 pb-4">
        <div className="flex items-center gap-2">
          {products.discountedPrice ? (
            <>
              <span className="text-2xl font-bold text-green-600">${products.discountedPrice.toFixed(2)}</span>
              <span className="line-through text-muted-foreground text-lg">${products.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-2xl font-bold">${products.price.toFixed(2)}</span>
          )}
        </div>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  );
}
