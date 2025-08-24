"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full p-5 mx-auto px-3 md:px-6 lg:px-12 xl:px-16">
      {loading ? (
        <div className="w-full flex justify-center items-center flex-col min-h-60">
          <span className="loading loading-spinner text-success"></span>
          <p>Loading Data....</p>
        </div>
      ) : (
        <div className="w-full">
          {products.length === 0 ? (
            <div>No products found</div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-2 space-y-2">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
