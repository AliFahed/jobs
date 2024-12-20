"use client";

import Link from "next/link";
import { useState } from "react";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { setHeaderLink } from "@/store/HeaderActiveLinkSlice";

export const Header = ({ option }: any) => {
  const dispatch = useDispatch();
  const selectHeaderLink = useSelector(
    (state: RootState) => state.headerLink.selectedHeaderLink
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="fixed top-0 w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href={`${
              selectHeaderLink === "Jobs"
                ? "/#jobs-section"
                : "/#salary-section"
            }`}
            className="flex items-center"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white lg:px-4">
              Web Jobs
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Sign in
            </a> */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            data-testid="mobile-menu"
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium lg:items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8">
              <li>
                <Link
                  href={
                    option === "Link In page"
                      ? "#jobs-section"
                      : "/#jobs-section"
                  }
                  className={`${
                    selectHeaderLink === "Jobs" ? "border-b" : ""
                  } block py-2 pr-4 pl-3 text-white hover:text-gray-300 `}
                  aria-current="page"
                  onClick={() => dispatch(setHeaderLink("Jobs"))}
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href={
                    option === "Link In page"
                      ? "#salary-section"
                      : "/#salary-section"
                  }
                  className={`${
                    selectHeaderLink === "Salary-Guide" ? "border-b" : ""
                  } block py-2 pr-4 pl-3 text-white hover:text-gray-300`}
                  onClick={() => dispatch(setHeaderLink("Salary-Guide"))}
                >
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
