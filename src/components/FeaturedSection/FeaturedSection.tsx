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

 
  const handleViewDetails = (productId: number) => {
    // history.push(`/product/${productId}`);
    console.log('gg')
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col justify-between">
            <CardHeader className="flex flex-row gap-4 items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              <div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p>Brand: {product.brand}</p>
              <p>Stock Quantity: {product.stockQuantity}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Rating: {product.rating}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300" onClick={() => handleViewDetails(product.id)}>View Details</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default FeaturedSection;
