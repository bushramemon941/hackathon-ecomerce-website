import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialSkype } from "react-icons/sl";
import { IoLogoTwitter } from "react-icons/io5";
import { ImPinterest2 } from "react-icons/im";
export default function Footer() {
  return (
    <div>
      <footer className="text-white body-font bg-[#2A254B]">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10">
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
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
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
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Our company
              </h2>
              <nav className="list-none mb-10">
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
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Join our mailing list
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-white"
                  ></label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-700 rounded border  focus:ring-2   text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="your@email.com"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-white border-0 py-2 px-6 focus:outline-none text-gray-600 rounded">
                  Sing up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 flex flex-wrap justify-between">
          <h1>Copyright 2022 Avion LTD</h1>
          <div className="flex flex-wrap mr-20 gap-5">
            {" "}
            <CiLinkedin />
            <RiFacebookBoxLine />
            <RiInstagramLine />
            <SlSocialSkype />
            <IoLogoTwitter />
            <ImPinterest2 />
          </div>
        </div>
      </footer>
    </div>
  );
}