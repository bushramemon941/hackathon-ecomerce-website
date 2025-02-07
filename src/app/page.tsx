import Image from "next/image";
import { PiVan } from "react-icons/pi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { PiFlowerTulipThin } from "react-icons/pi";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#2A254B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-4xl font-serif leading-snug mb-6">
                The furniture brand for the future with timeless designs
              </h1>
              <p className="mb-6 text-sm sm:text-base leading-relaxed">
                A new era in eco-friendly furniture with Avelon, the French
                luxury retail brand offering tasteful designs and sustainable
                products.
              </p>
              <button className="bg-gray-600 text-white py-3 px-6 rounded hover:bg-gray-700">
                View Collection
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/images/chair.png"
                alt="Modern chair"
                width={520}
                height={584}
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-medium mb-10">
              What makes our brand different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <PiVan className="text-4xl mx-auto mb-4" />,
                  title: "Next day as standard",
                  description:
                    "Order before 3pm and get your order the next day.",
                },
                {
                  icon: (
                    <IoCheckmarkCircleOutline className="text-4xl mx-auto mb-4" />
                  ),
                  title: "Made by true artisans",
                  description:
                    "Handmade crafted goods made with passion and skill.",
                },
                {
                  icon: <IoCardOutline className="text-4xl mx-auto mb-4" />,
                  title: "Unbeatable prices",
                  description:
                    "Top-notch quality at the best prices in the market.",
                },
                {
                  icon: <PiFlowerTulipThin className="text-4xl mx-auto mb-4" />,
                  title: "Recycled packaging",
                  description:
                    "100% recycled packaging for a sustainable future.",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  {feature.icon}
                  <h3 className="font-serif text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif mb-10">
              Our Popular Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "/images/long.png",
                  title: "The Poplar Suede Sofa",
                  price: "£980",
                },
                {
                  img: "/images/chair.png",
                  title: "The Dandy Chair",
                  price: "£250",
                },
                {
                  img: "/images/dandy.png",
                  title: "The Dandy Chair",
                  price: "£250",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={305}
                    height={375}
                    className="object-contain mx-auto"
                  />
                  <h3 className="font-serif text-lg mt-4">{product.title}</h3>
                  <p className="text-sm mt-2">{product.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-gray-600 text-white py-3 px-6 rounded hover:bg-gray-700">
                View Collection
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">
              Join the club and get the benefits
            </h2>
            <p className="text-sm sm:text-base mb-8">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:w-auto px-4 py-3 rounded-lg text-gray-800"
              />
              <button className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
