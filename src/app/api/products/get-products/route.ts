/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/db";
import Product from "@/schema/products.schema";
import { NextResponse } from "next/server";

connectDB()
export async function GET() {
  try {
    const allProdcuts = await Product.find({});
    console.log(allProdcuts)
    return NextResponse.json(
      {
        message: "ALl Products Fetched",
        success: true,
        products: allProdcuts,
      },
      {
        status: 201,
      },
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({
      message: "Server Error While Fetching Products",
      error: error.message,
    });
  }
}
