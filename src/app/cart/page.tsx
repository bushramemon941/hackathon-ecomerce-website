import React from 'react'
import Header from '../components/Header'

import Footer from '../components/Footer';
import DataFetch from '../components/DataFetch';

export default function Cart() {
  return (
    <div className="w-full max-w-[1280px] h-auto mx-auto mt-10 px-4">
      <Header/>
      <div className="flex justify-center mt-6">
        <DataFetch/>
   </div>
      <div className="w-full h-auto mt-8">
        <Footer/>
      </div>
    </div>
  );
}