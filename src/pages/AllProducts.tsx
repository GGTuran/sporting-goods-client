/* eslint-disable prefer-const */
import { SetStateAction, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";

import ProductCard from "@/components/ProductCard/ProductCard";
import Extra from "@/components/Extra/Extra";

const AllProducts = () => {
  const [selectedSort, setSelectedSort] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

// console.log(cate)
  
  // Function to get minimum price based on selected price range
  const getMinPrice = (range: string) => {
    switch (range) {
      case "under50":
        return 0;
      case "50to100":
        return 50;
      case "over100":
        return 100;
      default:
        return undefined;
    }
  };

  // Function to get maximum price based on selected price range
  const getMaxPrice = (range: string) => {
    switch (range) {
      case "under50":
        return 50;
      case "50to100":
        return 100;
      case "over100":
        return undefined; // No upper limit
      default:
        return undefined;
    }
  };

  // Fetch products based on sort, search term, category, brand, price range, and rating filters
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    sort: selectedSort,
    searchTerm: searchTerm,
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    brand: selectedBrand !== "all" ? selectedBrand : undefined,
    minPrice: getMinPrice(selectedPriceRange),
    maxPrice: getMaxPrice(selectedPriceRange),
    minRating: selectedRating !== "all" ? parseInt(selectedRating) : undefined,
  });

  // console.log(selectedCategory,setSelectedCategory,'validate')

  // Handle sorting change
  const handleSelectChange = (event: { target: { value: any } }) => {
    const sortValue = event.target.value;
    setSelectedSort(sortValue);
  };

  // Handle search input change
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter products based on selected filters
  const filterProducts = (products: any) => {
    let filteredProducts = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by brand
    if (selectedBrand !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const minPrice = getMinPrice(selectedPriceRange);
      const maxPrice = getMaxPrice(selectedPriceRange);
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.price; // Adjust this based on your product structure
        return (
          (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice)
        );
      });
    }

    // Filter by rating
    if (selectedRating !== "all") {
      filteredProducts = filteredProducts.filter((product) => {
        const rating = product.rating; // Adjust this based on your product structure
        return rating === parseInt(selectedRating); // Adjust for your rating comparison logic
      });
    }

    return filteredProducts;
  };

  // Function to sort products based on selected criteria
  const sortProducts = (products: any[], sortCriteria: string) => {
    let sortedProducts = [...products];

    switch (sortCriteria) {
      case "priceAsc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      // Add more cases for additional sorting criteria if needed
      default:
        // No sorting or default sorting logic
        break;
    }

    return sortedProducts;
  };

  // Apply filtering and sorting to products based on selected filters and sort
  const filteredAndSortedProducts = sortProducts(
    filterProducts(products?.data || []),
    selectedSort
  );

  // Handle clear filters
  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSelectedPriceRange("all");
    setSelectedRating("all");
    setSearchTerm("");
    setSelectedSort("all");
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-semibold my-10">All Products</h1>
       {/* Search form */}
       <form onSubmit={(e) => e.preventDefault()} className="flex justify-center mb-5">
                <input
                    type="text"
                    placeholder="Search by product name"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border rounded py-2 px-4 mr-2"
                />
        </form>
      <section className="px-4 md:px-0">
       

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-5">
          {/* Sort dropdown */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedSort}
              onChange={handleSelectChange}
              className="border rounded py-2 px-4 w-full md:w-auto"
            >
              <option value="all">Sort by...</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>

          {/* Sport filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Sports</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              {/* Add more category options as needed */}
            </select>
          </div>

          {/* Brand filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border rounded py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Brands</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              {/* Add more brand options as needed */}
            </select>
          </div>

          {/* Price range filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="border rounded py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="over100">Over $100</option>
              {/* Add more price range options as needed */}
            </select>
          </div>

          {/* Rating filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="border rounded py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
              {/* Add more rating options as needed */}
            </select>
          </div>

          {/* Clear filters button */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <button
              onClick={clearFilters}
              className="bg-red-500 text-white py-2 px-4 rounded w-full md:w-auto"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>
      {/* Product list */}
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {isLoading ? (
          <p className="text-2xl text-black flex justify-center items-center">
            {/* <Extra></Extra> */}
            Loading......
          </p>
        ) : isError ? (
          <p className="text-2xl text-red-500 flex justify-center items-center">
            Error loading products
          </p>
        ) : filteredAndSortedProducts.length === 0 ? (
          <p className="text-2xl text-black flex justify-center items-center">
            No products found
          </p>
        ) : (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
