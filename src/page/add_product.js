import React, { useState } from "react";
import addProductToFirestore from "../data/add_product";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    price: "",
    productDetail: "",
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
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productCategory">Product Category:</label>
          <input
            type="text"
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productDetail">Product Detail:</label>
          <textarea
            id="productDetail"
            name="productDetail"
            value={formData.productDetail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productImages">Product Images:</label>
          <input
            type="file"
            id="productImages"
            name="productImages"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
