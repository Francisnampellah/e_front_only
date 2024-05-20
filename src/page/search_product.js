import React, { useEffect, useState, useMemo } from "react";
import Product_card from "../component/product_card";
import Pagination from "../component/pagination";
import data from "../data/product.json";

const SearchProduct = () => {
  const [products, setProducts] = useState(data.products);

  const categories = useMemo(() => {
    const categorySet = new Set();
    data.products.forEach((product) =>
      categorySet.add(product.productCategory)
    );
    return ["All", ...Array.from(categorySet)];
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === "All") {
      setProducts(data.products);
    } else {
      const filtered = data.products.filter(
        (product) => product.productCategory === category
      );
      setProducts(filtered);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    filterProductsByCategory(selectedCategory);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <div className="mt-4">
            <label
              htmlFor="SortBy"
              className="block text-xs font-medium text-gray-700"
            >
              Sort By
            </label>
            <select
              id="SortBy"
              className="mt-1 p-3 rounded border-gray-300 text-sm"
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <label
                htmlFor="SortBy"
                className="block text-xs font-medium text-gray-700"
              >
                Sort By
              </label>
              <select
                id="SortBy"
                className="mt-1 p-3 rounded border-gray-300 text-sm"
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Pagination items={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProduct;
