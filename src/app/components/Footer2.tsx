import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialSkype } from "react-icons/sl";
import { IoLogoTwitter } from "react-icons/io5";
import { ImPinterest2 } from "react-icons/im";

export default function Footer2() {
  return (
    <div>
      <footer className="text-white body-font bg-[#2A254B]">
        <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Avion
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>21 New York Street</a>
              </li>
              <li>
                <a>New York City</a>
              </li>
              <li>
                <a>United States of America</a>
              </li>
              <li>
                <a>432 34</a>
              </li>
            </nav>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start w-full">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 text-center md:text-left">
              <h2 className="title-font font-serif text-sm mb-3">
                Social links
              </h2>
              <p className="flex justify-center md:justify-start gap-5">
                {" "}
                <CiLinkedin />
                <RiFacebookBoxLine />
                <RiInstagramLine />
                <SlSocialSkype />
                <IoLogoTwitter />
                <ImPinterest2 />
              </p>
            </div>

            <div className="lg:w-1/4 md:w-1/2 px-4 mb-10 md:mb-0 text-center md:text-left">
              <h2 className="title-font font-medium text-white text-sm mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10 text-sm">
                <li>
                  <a className="text-white">New arrivals</a>
                </li>
                <li>
                  <a className="text-white">Best sellers</a>
                </li>
                <li>
                  <a className="text-white">Recently viewed</a>
                </li>
                <li>
                  <a className="text-white">Popular this week</a>
                </li>
                <li>
                  <a className="text-white">All products</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 text-center md:text-left">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 text-sm">
                <li>
                  <a className="text-white">Crockery</a>
                </li>
                <li>
                  <a className="text-white">Furniture</a>
                </li>
                <li>
                  <a className="text-white">Homeware</a>
                </li>
                <li>
                  <a className="text-white">Plant pots</a>
                </li>
                <li>
                  <a className="text-white0">Chairs</a>
                </li>
                <li>
                  <a className="text-white">Crockery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Our company
              </h2>
              <nav className="list-none mb-10 text-sm">
                <li>
                  <a className="text-white">About us</a>
                </li>
                <li>
                  <a className="text-white">Vacancies</a>
                </li>
                <li>
                  <a className="text-white">Contact us</a>
                </li>
                <li>
                  <a className="text-white">Privacy</a>
                </li>
                <li>
                  <a className="text-white">Returns policy</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="ml-5 py-4">
          <h1 className="text-sm">Copyright 2022 Avion LTD</h1>
        </div>
      </footer>
    </div>
  );
}