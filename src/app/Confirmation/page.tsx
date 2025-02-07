import Link from "next/link";
import React from "react";

const Confirmation = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold text-green-700">Thank You!</h1>
    <p className="mt-4">Your order has been successfully placed.</p>
    <Link href="/" className="mt-4 text-blue-600 underline">
      Go back to Home
    </Link>
  </div>
);

export default Confirmation;