/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";


const FeaturedSection = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      stockQuantity: 10,
      brand: "Brand 1",
      rating: 4.5,
      description: "This is a product description.",
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      stockQuantity: 5,
      brand: "Brand 2",
      rating: 4.0,
      description: "This is a product description.",
      price: 79.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category 3",
      stockQuantity: 3,
      brand: "Brand 3",
      rating: 4.8,
      description: "This is a product description.",
      price: 129.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col justify-between">
            <CardHeader className=" flex-row gap-4 items-center">
                {product.image}
                <div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>

                </div>
            </CardHeader>
            <CardContent>
                <p>{product.description}</p>

            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>View details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default FeaturedSection;
