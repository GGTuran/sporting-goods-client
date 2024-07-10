/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from "../ProductCard/ProductCard";
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
      image: "https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg",
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
      image: "https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg",
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
      image: "https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg",
    },
  ];

 
  const handleViewDetails = (productId: number) => {
    // history.push(`/product/${productId}`);
    console.log('gg')
  };

  return (
    <main className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </main>
  );
};

export default FeaturedSection;
