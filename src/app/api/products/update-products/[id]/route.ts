/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/db";
import Product from "@/schema/products.schema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
     const {id} = await params
    console.log("params id:", id);

    const reqBody = await req.json();

    const {
      newname: name,
      newdescription: description,
      newprice: price,
      newdiscountedPrice: discountedPrice,
    } = reqBody;

    const product = await Product.findById(id);
    console.log(product);
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, discountedPrice },
    );

    if (!updatedProduct) {
      console.log("Product not found")
      return NextResponse.json(
        { message: "Product not found", success: false },
        { status: 404 },
      );
    }
    console.log(updatedProduct)
    return NextResponse.json(
      {
        message: "Product Updated Successfully",
        success: true,
      },
      {
        status: 201,
      },
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Server Error While Updating Data",
        error: error.message,
        success: false,
      },
      {
        status: 501,
      },
    );
  }
}
