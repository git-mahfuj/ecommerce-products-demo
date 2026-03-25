"use client"
import AddProductsForm from "./add-product/AddProductsForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CreatedProducts from "./created-product/CreatedProducts";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
const AdminPage = () => {
  
  return (
    <div className="flex flex-col translate-y-16 items-center justify-between font-sans dark:bg-black">
      <h1 className="text-3xl font-medium">AdminPage</h1>
      <div className="flex items-center gap-6 translate-y-5">
        <AddProductsForm />
        <Link href={"/"}>
          <Button className="p-4.5">Homepage</Button>
        </Link>
        <Button onClick={() => {
          window.location.reload()
        }} className="">
          <RefreshCw />
        </Button>
      </div>
      <div className="translate-y-10">
        <CreatedProducts  />
      </div>
    </div>
  );
};

export default AdminPage;
