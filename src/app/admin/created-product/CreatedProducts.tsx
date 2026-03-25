/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";

import { toast } from "sonner";
import axios from "axios";
import Product from "@/schema/products.schema";
import ProductCard from "./ProductCard";

const CreatedProducts = () => {
  const [createdProducts, setCreatedProducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const grabedProduct = async () => {
      setloading(true);
      try {
        const res = await axios.get("/api/products/get-products");
        setCreatedProducts(res.data.products);
        if (res.data.products) {
          toast.success("Products Fetched");
        }
      } catch (error: any) {
        console.log(error.message);
        toast.error("Server Error while Fetching Data");
      } finally {
        setloading(false);
      }
    };
    grabedProduct();
  }, []);
  console.log(createdProducts);
  return (
    <div className="flex flex-col translate-y-16 items-center justify-between font-sans dark:bg-black">
      <h1 className="font-medium text-2xl">All Products</h1>
      <div className="mt-4 ">
        {createdProducts ? (
          <div>
            {!loading && createdProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">
                {createdProducts.map((p) => (
                  <div key={p._id}>
                    <ProductCard products={p} />
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading Products</div>
            )}
          </div>
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default CreatedProducts;
