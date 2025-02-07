"use client";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

interface CartItem extends Product {
  quantity: number;
  cartId: string;
}

const DataFetchClient = ({ products }: { products: Product[] }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  useEffect(() => {
    const savedCart = localStorage.getItem("Cart");
    const savedWishlist = localStorage.getItem("Wishlist");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("Cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const updatedCart = [
        ...prevCart,
        { ...product, quantity: 1, cartId: uuidv4() },
      ];
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.cartId !== cartId);
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (cartId: string, increment: boolean) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.cartId === cartId) {
          const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(newQuantity, 1) };
        }
        return item;
      });
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item._id === product._id)) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("Wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter(
        (item) => item._id !== productId
      );
      localStorage.setItem("Wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("Wishlist");
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Redirect to checkout page
    window.location.href = "/Checkout";
  };

  const moveToCart = (product: Product) => {
    // Move product from wishlist to cart
    addToCart(product);
    removeFromWishlist(product._id); // Remove it from wishlist after adding to cart
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {/* Search Bar - Positioned on the top-left */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 p-2 border rounded-md text-white bg-black"
          placeholder="Search products..."
        />
      </div>

      <div className="p-4 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-6">
        {/* Display filtered products */}
        {filteredProducts.map((product) => (
          <div
            className="flex flex-col relative overflow-hidden rounded-lg shadow-lg group max-w-sm cursor-pointer"
            key={product._id}
          >
            <div className="relative pt-6 pb-6 px-4 flex items-center justify-center">
              <Image
                className="relative w-48"
                src={urlFor(product.image.asset.url).url()}
                alt={product.name}
                width={300}
                height={300}
              />
            </div>
            <div className="relative pb-6 mt-6 py-12">
              <span className="block font-semibold text-xl text-black">
                {product.name}
              </span>
              <span className="block bg-black rounded-full text-white text-xs font-bold px-12 py-5">
                Rs {product.price}
              </span>
            </div>
            <button
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="mt-2 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close button inside the modal */}
            <button
              className="absolute top-4 right-4 text-gray-600 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setShowCart(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Your Cart</h2>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.cartId}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="bg-red-500 text-white px-2 rounded-full hover:bg-red-600"
                          onClick={() => updateQuantity(item.cartId, false)}
                        >
                          -
                        </button>
                        <span className="text-gray-700">{item.quantity}</span>
                        <button
                          className="bg-green-500 text-white px-2 rounded-full hover:bg-green-600"
                          onClick={() => updateQuantity(item.cartId, true)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-gray-700">
                        Rs {item.price * item.quantity}
                      </span>
                      <button
                        className="text-white bg-red-700 p-2 rounded-lg font-bold"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-bold mt-4 text-green-700">
                  Total: Rs {calculateTotal()}
                </h3>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                  onClick={confirmOrder}
                >
                  Confirm Order
                </button>
              </>
            ) : (
              <p className="text-gray-700">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {showWishlist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close button inside the modal */}
            <button
              className="absolute top-4 right-4 text-gray-600 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => setShowWishlist(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Your Wishlist
            </h2>
            {wishlist.length > 0 ? (
              <>
                <ul>
                  {wishlist.map((item) => (
                    <li
                      key={item._id}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-700">Rs {item.price}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-white bg-blue-600 p-2 rounded-lg font-bold"
                          onClick={() => moveToCart(item)}
                        >
                          Move to Cart
                        </button>
                        <button
                          className="text-white bg-red-700 p-2 rounded-lg font-bold"
                          onClick={() => removeFromWishlist(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  onClick={clearWishlist}
                >
                  Clear Wishlist
                </button>
              </>
            ) : (
              <p className="text-gray-700">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      )}

      {/* Cart and Wishlist Buttons */}
      <button
        className="fixed bottom-16 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowCart(true)}
      >
        🛒
      </button>
      <button
        className="fixed bottom-16 right-16 bg-purple-600 text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowWishlist(true)}
      >
        💖
      </button>
    </div>
  );
};

export default DataFetchClient;
