/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ProductsType } from "@/lib/types";
import axios from "axios";
import { toast } from "sonner";

export function DeleteProductsForm({ products }: { products: ProductsType[] }) {
  const grabProductDetails = () => {
    console.log(products);
  };

  const handleDeleteProduct = async () => {
    try {
      const deletedProductId = products._id;
      console.log(deletedProductId);
      const deletedRes = await axios.delete(
        `/api/products/delete-products/${deletedProductId}`
      );
      if (deletedRes.data) {
        console.log("Deleted Product", deletedRes.data);
        toast.success("Product Deleted");
        window.location.reload()
      }
    } catch (error: any) {
      console.log("Server Error While Deleting Product");
      toast.error(error.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={grabProductDetails}>
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            products from server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteProduct}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
