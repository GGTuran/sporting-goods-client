/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddProductMutation } from "@/redux/api/baseApi"
import { FormEvent, useState } from "react"

const AddProductModal = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    const [addProduct, {data, isLoading, isError, isSuccess}] = useAddProductMutation();
    console.log(isLoading, isSuccess, isError, data);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const productDetails = {
            name,
            description,
            category,
            brand,
            stockQuantity: Number(stockQuantity),
            rating: Number(rating),
            price: Number(price),
            image,
        };
        console.log(productDetails)

        addProduct(productDetails);
        // const toastId = toast.success("Added Product successfully!");
        
    }

  return (
<Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">Add Product</button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add a new product
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
              onBlur={(e) => setName(e.target.value)}
                id="name"
                className="col-span-3"
               />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                 onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                 onBlur={(e) => setCategory(e.target.value)}
                id="category"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand
              </Label>
              <Input
                 onBlur={(e) => setBrand(e.target.value)}
                id="brand"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stockQuantity" className="text-right">
                STock Quantity
              </Label>
              <Input
                 onBlur={(e) => setStockQuantity(e.target.value)}
                id="stockQuantity"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                 onBlur={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                 onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image Link
              </Label>
              <Input
                 onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            
             
            
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300" type="submit">Save</button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


export default AddProductModal;