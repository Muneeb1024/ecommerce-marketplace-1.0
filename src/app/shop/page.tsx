'use client'
import { useState } from "react";
import Categories from "@/components/categories";
import Header2 from "@/components/header2";
import Topheader2 from "@/components/topheader2";
import Products2 from "@/components/products2";
import Logos from "@/components/logos";
import Footer from "@/components/footer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Shop() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Default range
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // For category selection
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // For dropdown visibility

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Toggle dropdown visibility when Filter button is clicked
  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="wrapper1">
      <Topheader2 />
      <Header2 />
      <Categories />

      <div className="wrapper1 bg-white">
        <div className="wrapper2 py-6 flex flex-col items-center md:flex-row justify-between gap-6 sm:px-10 lg:px-0">

          {/* Search Input */}
          <div className="py-6 flex flex-col items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-[300px] border pl-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Price Range Slider */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm font-bold mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
            <Slider
              range
              min={0}
              max={1000} // Max price adjust kar sakte hain
              value={priceRange}
              onChange={(value) => setPriceRange(value as [number, number])}
              step={10}
              className="w-[300px]"
            />
          </div>

          {/* Filter Button */}
          <div className="h-[50px] gap-[15px] flex items-center justify-center md:justify-end w-[300px]">
            <button
              onClick={handleFilterClick}
              className="text-center h-full w-[94px] bg-[#23A6F0] rounded-[5px] text-white text-[14px] font-bold"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Category Dropdown (visible when Filter button is clicked) */}
        {showDropdown && (
          <div className="absolute bg-white border shadow-md w-[300px] p-4 mt-2 rounded-md">
            <h3 className="font-bold mb-2">Select Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border py-2 px-4 rounded-md"
            >
              <option value="">All Categories</option>
              {/* Add your categories here */}
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
        )}
      </div>

      {/* Pass priceRange and selectedCategory to Products2 component */}
      <Products2 searchQuery={searchQuery} priceRange={priceRange} category={selectedCategory} />

      <Logos />
      <Footer />
    </section>
  );
}

export default Shop;
