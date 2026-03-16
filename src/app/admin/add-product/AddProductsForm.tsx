import React from "react";
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
const AddProductsForm = () => {
  return (
    <div>
      <div className="translate-y-6">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Add Products</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Add Products</DialogTitle>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Description</Label>
                  <Input
                    id="username-1"
                    name="username"
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Price</Label>
                  <Input
                    id="username-1"
                    name="username"
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Discounted Price </Label>
                  <Input
                    id="username-1"
                    name="username"
                  />
                </Field>
                
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default AddProductsForm;
