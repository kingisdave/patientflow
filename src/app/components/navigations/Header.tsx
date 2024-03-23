// 📁 components/navigations/Header.tsx

import { useState } from "react";
import Link from "next/link"
import { Container } from "../Container"
// import Image from "next/image"
// import ArrowRightIcon from "../icons/ArrowRightIcon";
import { ThemeSwitcher } from "..";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 backdrop-blur-xl z-50 px-3 md:px-10 shadow-lg">
      <Container className="flex items-center justify-between py-5 rounded-3xl text-neutral-700 dark:text-white">
        <Link href="/"
          className="text-lg sl:text-2xl ml:text-3xl font-sans font-medium italic">
            patientflow
          {/* <Image src="/_assets/logo.png" 
            alt="mainstack" 
            width={50} height={50} 
            className="h-14 w-14"
          /> */}
        </Link>
        <div className="flex items-center gap-x-3">
          <button
            className="block xsl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          <div className="md:hidden px-2 text-white font-semibold duration-600">
            <ThemeSwitcher />
          </div>
        </div>
        <div className={`${isOpen? '' : 'hidden'} md:hidden absolute top-0 left-0 h-screen bg-blue-900 text-white px-3`}>
          <div className="w-full flex justify-center font-sans font-bold italic">
            <Link href="/"
              className="text-lg sl:text-xl ml:text-2xl py-4">
                patientflow
            </Link>

          </div>
          <ul className={`grid items-center md:w-auto mt-2 font-bold`}>
            <Link href="/" 
              className="px-4 hover:bg-slate-200 py-4 focus:bg-slate-700 focus:text-slate-100">
              <h1 className="text-sm text-red-500">
              </h1>
              HLP Admit Note
            </Link>
            <Link href="/" className=" py-4 px-4 focus:bg-slate-700 focus:text-slate-100">
              LOSHQ
            </Link>
            <Link href="/" className="px-4 py-4 focus:bg-slate-700 focus:text-slate-100">
              Hospitalist Insights
            </Link>
            <Link href="/" className=" px-4 py-4 focus:bg-slate-700 focus:text-slate-100">
              Contact Us
            </Link>
            <Link href="/login" 
              className="px-3 py-4 mt-4 font-semibold border bg-orange-500 rounded-sm">
              Login
            </Link>
          </ul>
        </div>
        <ul className={`hidden md:flex md:gap-x-3 xsl:gap-x-10 items-center md:w-auto`}>
          <Link href="/" 
            className="flex items-center px-4 hover:bg-slate-200 focus:bg-slate-700 focus:text-slate-100 rounded-3xl ">
            <h1 className="text-sm text-red-500">
            </h1>
            HLP Admit Note
          </Link>
          <Link href="/" className="">
            LOSHQ
          </Link>
          <Link href="/" className="">
            Hospitalist Insights
          </Link>
          <Link href="/" className="">
            Contact Us
          </Link>
          <Link href="/login" 
            className="px-4 py-2 font-semibold border bg-orange-500 rounded-sm">
            Login
          </Link>
          <div className="px-2 text-white font-semibold duration-600">
            <ThemeSwitcher />
          </div>
        </ul>
      </Container>
    </div>
  )
}

export default Header;