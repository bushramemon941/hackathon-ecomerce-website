import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";

export default function Product() {
  return (
    <div className="w-full min-h-screen items-center justify-self-center">
      <Navbar />
      <section className="">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-24 py-16 gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              className="mx-auto"
              src="/images/shad.png"
              alt="all project"
              width={441.53}
              height={433.4}
            />
          </div>
          <div className="flex flex-col md:items-start text-center md:text-left items-center w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl text-[#4D4D4D] font-serif leading-snug">
              The Dandy Chair
            </h1>
            <p className="mt-4 text-lg md:text-xl">£250</p>
            <p className="mt-6 text-gray-500 leading-relaxed text-sm md:text-base">
              A timeless design with premium materials features as one of our
              most popular and iconic pieces. The Dandy Chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="mt-4 text-gray-500 space-y-2">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            <div className="mt-6">
              <p className="font-serif text-gray-500 text-sm">Dimensions</p>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-sm font-semibold">Height</p>
                  <p className="text-gray-500">110cm</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Width</p>
                  <p className="text-gray-500">75cm</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Depth</p>
                  <p className="text-gray-500">50cm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
              <div className="flex items-center">
                <button className="px-4 py-2 bg-gray-200">-</button>
                <span className="px-4">1</span>
                <button className="px-4 py-2 bg-gray-200">+</button>
              </div>
              <button className="bg-[#2A254B] text-white px-6 py-2 mt-4 md:mt-0">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
            New Ceramics
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                src: "/images/chair.png",
                title: "The Dandy Chair",
                price: "£250",
              },
              {
                src: "/images/bowl.png",
                title: "Rustic Vase Set",
                price: "£155",
              },
              {
                src: "/images/lamp.png",
                title: "The Silky Vase",
                price: "£125",
              },
              {
                src: "/images/lamp1.png",
                title: "The Lucy Lamp",
                price: "£399",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={305}
                  height={375}
                />
                <h2 className="title-font font-serif text-sm text-gray-900 mt-3">
                  {item.title}
                </h2>
                <p className="text-gray-500">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-gray-200 px-8 py-2">View Collection</button>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif text-gray-900 text-center mb-8">
            Join the Club and Get the Benefits
          </h1>
          <p className="text-center text-sm md:text-base text-gray-500">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
            <input
              type="email"
              className="w-full md:w-auto px-4 py-2 border rounded focus:outline-none"
              placeholder="your@email.com"
            />
            <button className="bg-[#2A254B] text-white px-8 py-2">
              Sign Up
            </button>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}