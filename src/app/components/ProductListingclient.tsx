"use client";
import React, { useState, useEffect } from "react";
import Data from "./images";
import Image from "next/image";

type Product = {
  slug: string | number;
  quantity: number;
  features: string;
  title: string;
  _id: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
};

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const productData: Product[] = await Data();
      setProducts(productData);
    };
    fetchData();
  }, []);

  const handleImageClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };
  const renderProductDetail = (product: Product) => {
    return (
      <>
        <p>Price: Rs. {product.price}</p>
        <p>Stock: {product.quantity}</p>
        <p>Features: {product.features}</p>
        <p>Description: {product.description}</p>
      </>
    );
  };
  const handleDetailClick = (product: Product, type: string) => {
    switch (type) {
      case "price":
        alert(`Price: Rs. ${product.price}`);
        break;
      case "stock":
        alert(`Stock: ${product.quantity}`);
        break;
      case "features":
        alert(`Features: ${product.features}`);
        break;
      case "description":
        alert(`Description: ${product.description}`);
        break;
      default:
        break;
    }
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>

      {showDetail && selectedProduct && (
        <div className="p-4 border rounded-lg mb-8">
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <Image
            className="rounded-lg my-4"
            src={selectedProduct.imageUrl}
            alt={selectedProduct.imageUrl}
            width={520}
            height={300}
          />
          {renderProductDetail(selectedProduct)}

          <button
            className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            onClick={handleCloseDetail}
          >
            Close
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg">
            <Image
              className="rounded-lg mx-auto"
              src={product.imageUrl}
              alt={product.imageUrl}
              width={250}
              height={250}
              onClick={() => handleImageClick(product)}
            />
            <h2 className="text-lg font-bold mt-2 text-center">
              {product.name}
            </h2>

            <div className="mt-4 flex flex-col gap-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handleDetailClick(product, "price")}
              >
                Check Price
              </button>
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded"
                onClick={() => handleDetailClick(product, "stock")}
              >
                Check Stock
              </button>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded"
                onClick={() => handleDetailClick(product, "features")}
              >
                Check Features
              </button>
              <button
                className="bg-black text-white py-2 px-4 rounded"
                onClick={() => handleDetailClick(product, "description")}
              >
                Check Description
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No products available.</p>
      )}
    </div>
  );
};

export default ProductListing;
