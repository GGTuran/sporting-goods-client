import { useState, useEffect } from 'react';
import { useGetAllProductsQuery } from '@/redux/api/baseApi';

import ProductCard from "@/components/ProductCard/ProductCard";

const AllProducts = () => {
    const [selectedSort, setSelectedSort] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [queryObj, setQueryObj] = useState({
        sort: selectedSort,
        searchTerm: searchTerm,
    });

    const { data: products, isLoading, isError } = useGetAllProductsQuery(queryObj);

    // Handle sorting change
    const handleSelectChange = (event) => {
        setSelectedSort(event.target.value);
        console.log(event.target.value)
    };

    // Handle search input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
    };

    // Handle search form submit
    const handleSearchProduct = (event) => {
        event.preventDefault();
        setQueryObj({ ...queryObj, searchTerm: searchTerm });
        console.log(event.target.value)
    };

    // Effect to update queryObj when selectedSort or searchTerm changes
    useEffect(() => {
        setQueryObj({ sort: selectedSort, searchTerm: searchTerm });
    }, [selectedSort, searchTerm]);

    // Function to clear filters
    const clearFilters = () => {
        setSelectedSort('all');
        setSearchTerm('');
        setQueryObj({ sort: 'all', searchTerm: '' });
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-center text-3xl font-semibold my-10">All Products</h1>
            {/* Search form */}
            <form onSubmit={handleSearchProduct} className="flex justify-center mb-5">
                <input
                    type="text"
                    placeholder="Search by product name"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border rounded py-2 px-4 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Search
                </button>
                 <button onClick={clearFilters} className="bg-red-500 text-white py-2 px-4 rounded">
                    Clear Filters
                </button>
            </form>
            {/* Sort dropdown */}
            <div className="flex justify-center mb-5">
                <select
                    value={selectedSort}
                    onBlur={handleSelectChange}
                    className="border rounded py-2 px-4"
                >
                    <option value="all">Sort by...</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    {/* Add more sorting options as needed */}
                </select>
            </div>
            {/* Product list */}
            <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {isLoading ? (
                    <p className="text-2xl text-black flex justify-center items-center">Loading.....</p>
                ) : isError ? (
                    <p className="text-2xl text-red-500 flex justify-center items-center">
                        Error loading products
                    </p>
                ) : (
                    products?.data?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                )}
            </div>
            {/* Clear filters button */}
            <div className="flex justify-center mb-5">
               
            </div>
        </div>
    );
};

export default AllProducts;
