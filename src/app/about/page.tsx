import React from 'react';
import Image from 'next/image';
import { PiVan } from "react-icons/pi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { PiFlowerTulipThin } from "react-icons/pi";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-100 py-2">
        <ul className="text-gray-500 flex flex-wrap justify-center space-x-4 sm:space-x-6">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center mx-auto">
            <h1 className="flex-grow sm:pr-8 text-center sm:text-left text-2xl font-serif title-font text-gray-900">
              A brand built on the love of craftsmanship, quality, and
              outstanding customer service
            </h1>
            <button className="flex-shrink-0 text-gray-400 bg-gray-100 border-0 py-2 px-6 rounded text-base mt-6 sm:mt-0">
              View Our Products
            </button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        <div className="bg-[#2A254B] p-6 border rounded flex flex-col justify-between text-gray-200">
          <h1 className="text-2xl mb-4 font-thin">
            It started with a small idea
          </h1>
          <p className="font-sans mb-4">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="text-gray-200 bg-transparent border border-gray-400 py-2 px-8 rounded text-sm self-start">
            View Collection
          </button>
        </div>

        <div className="flex justify-center items-center border rounded overflow-hidden">
          <Image
            src="/images/Block.png"
            alt="all project"
            width={640}
            height={640}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        <div className="flex justify-center items-center border rounded overflow-hidden">
          <Image
            src="/images/room.png"
            alt="all project"
            width={640}
            height={640}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-100 p-6 border rounded flex flex-col justify-between">
          <h1 className="text-2xl md:text-3xl mb-4 font-serif text-gray-600">
            Our service isnt just personal its actually hyper personally
            exquisite
          </h1>
          <p className="text-gray-400 font-sans text-sm md:text-base">
            When we started Avion the idea was simple: Make high-quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade and lovingly crafted furniture and homeware is what we
            live, breathe, and design. Our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="mt-6 bg-white text-gray-600 border border-gray-400 py-2 px-8 rounded text-sm self-start">
            View Collection
          </button>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              What makes our brand different
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 border-2 p-6 rounded-lg text-center">
              <PiVan className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h4 className="font-serif text-lg">Next day as standard</h4>
              <p className="text-sm font-sans mt-3">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
            <div className="bg-gray-100 border-2 p-6 rounded-lg text-center">
              <IoCheckmarkCircleOutline className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h4 className="font-serif text-lg">Made by true artisans</h4>
              <p className="text-sm font-sans mt-3">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
            <div className="bg-gray-100 border-2 p-6 rounded-lg text-center">
              <IoCardOutline className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h4 className="font-serif text-lg">Unbeatable prices</h4>
              <p className="text-sm font-sans mt-3">
                For our materials and quality, you wont find better prices
                anywhere.
              </p>
            </div>
            <div className="bg-gray-100 border-2 p-6 rounded-lg text-center">
              <PiFlowerTulipThin className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h4 className="font-serif text-lg">Recycled packaging</h4>
              <p className="text-sm font-sans mt-3">
                We use 100% recycled packaging to ensure our footprint is
                manageable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}