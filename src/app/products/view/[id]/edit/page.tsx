import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const EditProd = ({params}) => {
    console.log(params.id);
  return (
    <div className="flex justify-center items-center h-screen">
    <Card key="1" className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Update Product</CardTitle>
        <CardDescription>Modify the details of your product.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="id">ID</Label>
              <Input disabled id="id" placeholder="Product ID" value={params.id} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Product Name" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" placeholder="Brand Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" placeholder="Price" type="number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Product Description" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" placeholder="Quantity" type="number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="model_id">Model ID</Label>
              <Input id="model_id" placeholder="Model ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Photo</Label>
              <Input placeholder="Photo" type="text" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Update Product</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default EditProd