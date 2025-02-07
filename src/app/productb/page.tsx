import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListing from "../components/ProductListingclient";



export default function ProductB() {
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <Header />
      <ProductListing />
      <Footer />
    </div>
  );
}