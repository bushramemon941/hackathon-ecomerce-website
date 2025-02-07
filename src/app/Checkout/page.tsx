"use client";

import { useState } from "react";
import Header from "../components/Header";



const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    paymentMethod: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (
      !formData.name ||
      !formData.address ||
      !formData.contact ||
      !formData.paymentMethod
    ) {
      setError("Please fill all the fields.");
      return;
    }

    // Clear cart and redirect to confirmation
    localStorage.removeItem("Cart");
    alert("Your order has been confirmed!");
    window.location.href = "/Confirmation";
  };

  return (
    <div className="container mx-auto p-4">
             <Header/>
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Checkout</h1>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
       
          <label className="block font-bold text-black">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold text-black">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold text-black">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold text-black">
            Payment Method:
          </label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Confirm Order
        </button>
      </form>
   
    </div>
    
  );
};

export default Checkout;
