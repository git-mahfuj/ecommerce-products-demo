/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const AddProductsForm = () => {
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    discountedPrice: "",
  });

  const handleAddProduct = async (e: any) => {
    e.preventDefault();
    console.log("Form Data:", products);
    try {
      const response = await axios.post(
        "/api/products/create-products",
        products,
      );

      if (response.data && response.data.length > 0) {
        console.log(response.data || response.data);
        toast.success("Product Added Successfully");
        setProducts({
          ...products,
          name :"",
          description : "",
          price : "",
          discountedPrice : ""
        })
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="p-4.5">
              Add Products
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleAddProduct}>
              <DialogHeader>
                <DialogTitle>Add Products</DialogTitle>
              </DialogHeader>
              <FieldGroup className="mb-3 mt-4">
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input
                    id="name-1"
                    type="text"
                    value={products.name}
                    onChange={(e) =>
                      setProducts({
                        ...products,
                        name: e.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Description</Label>
                  <Input
                    id="username-1"
                    type="text"
                    value={products.description}
                    onChange={(e) =>
                      setProducts({
                        ...products,
                        description: e.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Price</Label>
                  <Input
                    id="username-1"
                    type="number"
                    value={products.price}
                    onChange={(e) =>
                      setProducts({
                        ...products,
                        price: e.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Discounted Price </Label>
                  <Input
                    id="username-1"
                    type="number"
                    value={products.discountedPrice}
                    onChange={(e) =>
                      setProducts({
                        ...products,
                        discountedPrice: e.target.value,
                      })
                    }
                  />
                </Field>
              </FieldGroup>
              <DialogFooter className="pt-2">
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      setProducts({
                        ...products,
                        name: "",
                        description: "",
                        price: "",
                        discountedPrice: "",
                      });
                    }}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button
                    onClick={() => {
                      if (products.name.length > 0 && products.description.length > 0 && products.price.length > 0 && products.discountedPrice.length > 0) {
                        window.location.reload();
                      } 
                    }}
                    type="submit"
                  >
                    Save changes
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddProductsForm;
