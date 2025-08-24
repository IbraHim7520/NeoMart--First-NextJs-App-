"use client";

import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductForm = () => {
  const [weight, setWeights] = useState([""]);
  const [loading , setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    discount: "",
    create_date: "",
    expiry_date: "",
    category: "food",
    rating: 0,
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle weights
  const handleWeightChange = (index, value) => {
    const newWeights = [...weight];
    newWeights[index] = value;
    setWeights(newWeights);
  };

  const addWeightField = () => {
    setWeights([...weight, ""]);
  };

  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    const dataToSubmit = { ...formData, weight };
    dataToSubmit.reviews = [];
    dataToSubmit.instock = true
    dataToSubmit.id = 52
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, dataToSubmit )
    if(response?.data){
      console.log(response?.data?.insertedId)
      setLoading(false)
      toast.success("Product Uploaded")
      toast.target.reset()
    }else{
      setLoading(false)
      toast.error("Failed to upload!")
      e.target.reset()
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl">
      <Toaster></Toaster>
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Product Name */}
        <div>
          <label className="block font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Image Link */}
        <div>
          <label className="block font-semibold">Image Link</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block font-semibold">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Created Date */}
        <div>
          <label className="block font-semibold">Created Date</label>
          <input
            type="date"
            name="create_date"
            value={formData.createdDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block font-semibold">Expiry Date</label>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="food">Food</option>
            <option value="vegetable">Vegetable</option>
            <option value="snacks">Snacks</option>
            <option value="fruit">Fruit</option>
          </select>
        </div>

        {/* Reviews */}
        <div>
          <label className="block font-semibold">
            Reviews ({formData.reviews})
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            name="rating"
            value={formData.reviews}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Uploader Email */}
        <div className="md:col-span-2">
          <label className="block font-semibold">Uploader Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Weights */}
        <div className="md:col-span-2">
          <label className="block font-semibold">Weights (kg)</label>
          {weight.map((w, index) => (
            <input
              key={index}
              type="text"
              value={w}
              onChange={(e) => handleWeightChange(index, e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder={`Weight ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={addWeightField}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg"
          >
            + Add Weight
          </button>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="btn btn-success w-full text-white" >
            {
              loading ? 
              <span  className="loading loading-spinner text-white text-center"></span>
              :
              "Upload"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
