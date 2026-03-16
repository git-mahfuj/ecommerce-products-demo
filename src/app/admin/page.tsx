import AddProductsForm from "./add-product/AddProductsForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CreatedProducts from "./CreatedProducts";


const AdminPage = () => {
  return (
    <div className="flex flex-col translate-y-16 items-center justify-between font-sans dark:bg-black">
      <h1 className="text-3xl font-medium">AdminPage</h1>
      <AddProductsForm />
      <div className="translate-y-10">
        <CreatedProducts />
      </div>
    </div>
  );
};

export default AdminPage;
