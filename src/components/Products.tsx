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
export default function Products({ products }: { products: ProductsData[] }) {
  return (
    <Card className="relative mx-auto w-90 pt-0">
      <Link className="cursor-pointer" href={`/products/${products.slug}`}>
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
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  );
}
