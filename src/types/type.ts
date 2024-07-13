export type TProductCardProps = {
    _id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    stockQuantity: number;
    rating: number;
    price: number;
    image: string;

};

export type TOrder = {
    userName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    products: {
        productId: string;
        quantity: number;
    }[];
    
    paymentMethod: string;
}