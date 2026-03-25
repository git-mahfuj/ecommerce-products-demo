/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ProductsType } from "@/lib/types";
import { toast } from "sonner";
import axios from "axios";
axios;
const EditProductsForm = ({ products }: { products: ProductsType[] }) => {
  const [editedProduct, setEditedProduct] = useState<ProductsType>({
    name: "",
    description: "",
    price: "",
    discountedPrice: "",
  });
  const handleGrabData = () => {
    setEditedProduct({
      ...editedProduct,
      name: "",
      description: "",
      price: "",
      discountedPrice: "",
    });
    console.log(editedProduct);
  };
  const handleEditProduct = async (e: any) => {
    e.preventDefault();
    console.log(editedProduct);
    try {
      const editedProductId = products._id;

      const editedRes = await axios.put(
        `/api/products/update-products/${editedProductId}`,
        editedProduct,
      );

      const updatedProduct = editedRes.data.product;
      if (updatedProduct) {
        console.log("EditedProduct", updatedProduct);
        setEditedProduct(updatedProduct);
        toast.success("Product Edited Successfully");
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={handleGrabData}>
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <form onSubmit={handleEditProduct}>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input
                    id="name-1"
                    name="name"
                    value={editedProduct.name}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        name: e.target.value,
                      });
                    }}
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Description</Label>
                  <Input
                    id="username-1"
                    type="text"
                    value={editedProduct.description}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        description: e.target.value,
                      });
                    }}
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Price</Label>
                  <Input
                    id="username-1"
                    type="number"
                    value={editedProduct.price}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        price: e.target.value,
                      });
                    }}
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Discounted Price </Label>
                  <Input
                    id="username-1"
                    name="username"
                    type="number"
                    value={editedProduct.discountedPrice}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        discountedPrice: e.target.value,
                      });
                    }}
                  />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditedProduct({
                        ...editedProduct,
                        name: "",
                        description: "",
                        price: "",
                        discountedPrice: "",
                      });
                    }}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EditProductsForm;
