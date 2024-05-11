import React, { useEffect, useState } from "react";
import Product_card from "../component/product_card";
import Pagination from "../component/pagination";
import data from "../data/product.json";

const SearchProduct = () => {
  const [products, setProducts] = useState(data.products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    function getUniqueCategories(products) {
      const categories = new Set();
      products.forEach((product) => {
        categories.add(product.productCategory);
      });
      return Array.from(categories);
    }
    setCategories(getUniqueCategories(products));
  }, []);

  const filterProductsByCategory = (category) => {
    if (category == "All") {
      console.log(category);
      setProducts(data.products);
    } else {
      const filtered = data.products.filter(
        (product) => product.productCategory === category
      );
      setProducts(filtered);
    }
  };

  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p class="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div class="mt-8 block lg:hidden">
          <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div class="hidden space-y-4 lg:block">
            <div>
              <label
                for="SortBy"
                class="block text-xs font-medium text-gray-700"
              >
                Sort By
              </label>

              <select
                id="SortBy"
                className="mt-1 p-3 rounded border-gray-300 text-sm"
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  filterProductsByCategory(selectedCategory);
                }}
              >
                <option value={"All"}>All</option>
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div class="lg:col-span-3">
            <Pagination items={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProduct;
