/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/db";
import Product from "@/schema/products.schema";
import { NextRequest, NextResponse } from "next/server";

connectDB();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const { name, slug, price, discountedPrice } = reqBody;

    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return NextResponse.json(
        {
          message: "Product Already Exists",
        },
        {
          status: 401,
        },
      );
    }

    const createdProduct = await new Product({
      name,
      slug: name.toLowerCase(),
      price,
      discountedPrice,
    });

    const product = await createdProduct.save();

    console.log(product);

    return NextResponse.json(
      {
        message: "Product Created Successfully",
        success: true,
        product: product,
      },
      {
        status: 201,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Server Error While Creating Products",
        error: error.message,
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}