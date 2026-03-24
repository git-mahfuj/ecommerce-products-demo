/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/db";
import Product from "@/schema/products.schema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    console.log("params id:", id);

    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log("Deleted Product : " , deletedProduct)

    if(!deletedProduct) {
        console.log("Product Already Deleted")
        return NextResponse.json({
            message : "Product Already Deleted",
            success : "true"
        } , {
            status : 301
        })
    }

    return NextResponse.json(
      {
        message: "Product Deleted Successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        message: "Server Error While Deleting Product",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}