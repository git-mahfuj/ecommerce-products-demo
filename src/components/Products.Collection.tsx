import React from "react";
import Products from "./Products";

export interface ProductsData {
  id: number;
  slug: string;
  name: string;
  description: string;
}
const ProductsCollection = ({ products }: { products: ProductsData[] }) => {
  const mockData: ProductsData[] = [
    {
      id: 1,
      slug : "product-1",
      name: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      slug: "product-2",
      name: "Product 2",
      description: "Description for Product 2",
    },
    {
      id: 3,
      slug: "product-3",
      name: "Product 3",
      description: "Description for Product 3",
    },
    {
      id: 4,
      slug: "product-4",
      name: "Product 4",
      description: "Description for Product 4",
    },
    {
      id: 5,
      slug: "product-5",
      name: "Product 5",
      description: "Description for Product 5",
    },
    {
      id: 6,
      slug: "product-6",
      name: "Product 6",
      description: "Description for Product 6",
    },
    {
      id: 7,
      slug: "product-7",
      name: "Product 7",
      description: "Description for Product 7",
    },
    {
      id: 8,
      slug: "product-8",
      name: "Product 8",
      description: "Description for Product 8",
    },
    {
      id: 9,
      slug: "product-9",
      name: "Product 9",
      description: "Description for Product 9",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="font-medium text-3xl">List of All Products</h1>
      {mockData && mockData.length > 0 ? <div className="grid grid-cols-4 justify-center items-center gap-6">
        {
            mockData.map((i) => (
                <div key={i.id}>
                    <Products products={i} />
                </div>
            ))
        }
      </div> : <div>
        <p className="font-medium text-3xl">No Products Available</p>
        </div>}
    </div>
  );
};

export default ProductsCollection;
