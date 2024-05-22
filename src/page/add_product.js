import React, { useState } from "react";
import addProductToFirestore from "../data/add_product";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    price: "",
    productDetail: "",
    vendor: "",
    productImages: [],
  });
  const [imageFiles, setImageFiles] = useState([]);

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const files = e.target.files;
    setImageFiles(files);
  };

  // Function to upload images to Firebase Storage

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToFirestore(formData, imageFiles);
  };

  return (
    <div class="bg-gray-100 p-8 rounded-md shadow-md">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-4">
          <label
            for="productName"
            class="text-sm block font-medium text-gray-700"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div class="mb-4">
          <label
            for="productCategory"
            class="text-sm block font-medium text-gray-700"
          >
            Product Category:
          </label>
          <input
            type="text"
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div class="mb-4">
          <label for="price" class="text-sm block font-medium text-gray-700">
            Vendor:
          </label>
          <input
            type="text"
            id="vendor"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div class="mb-4">
          <label for="price" class="text-sm block font-medium text-gray-700">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div class="mb-4">
          <label
            for="productDetail"
            class="text-sm block font-medium text-gray-700"
          >
            Product Detail:
          </label>
          <textarea
            id="productDetail"
            name="productDetail"
            value={formData.productDetail}
            onChange={handleChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          ></textarea>
        </div>
        <div class="mb-4">
          <label
            for="productImages"
            class="text-sm block font-medium text-gray-700"
          >
            Product Images:
          </label>
          <input
            type="file"
            id="productImages"
            name="productImages"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
