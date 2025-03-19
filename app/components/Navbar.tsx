"use client";
import React, {useState} from "react";
import Image from "next/image";
import logo from "@/assest/logo.png";
import companyName from "@/assest/Group 5.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

// type Props = {}

const Navbar = () => {
  const pathname = usePathname();
  const[openMenu, setOpenMenu] = useState(false)

  const handleMenu = ()=> {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-5 sm:gap-y-0 mt-3 sm:px-10 py-5 ">
      
      <div className="flex w-full sm:w-auto  justify-between items-center p-5 sm:p-0 ">
        <GiHamburgerMenu  className="sm:hidden text-[40px]" onClick={handleMenu}/>
        <div className="flex gap-x-3">
          <Image src={logo} alt="company logo" width={60} height={30} />
          <Image src={companyName} alt="company name" width={100} height={100} />
        </div>
      </div>

      {/* mobile view */}
      {openMenu?
        <ul className="flex flex-col sm:flex-row sm:items-center items-start p-5 sm:p-0  gap-x-3 gap-y-5">
          <li className={pathname === "/" ? "font-bold text-[#D35400]" : ""}>
            <Link href={"/"}>Home</Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={pathname === "/about" ? "font-bold text-[#D35400]" : ""}
          >
            <Link href={"/about"} className="capitalize">about us</Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={
              pathname === "/services" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link href={"/services"} className="capitalize">services</Link>
          </li>
          <div className="border h-4 hidden sm:flex`"></div>
          <li
            className={
              pathname === "/portfolio" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link href={"/portfolio" } className="capitalize">portfolio</Link>
          </li>
        </ul> : " "
    }

     {/* desktop view */}
      <ul className=" hidden sm:flex flex-col sm:flex-row sm:items-center items-start p-5 sm:p-0  gap-x-3 gap-y-5">
          <li className={pathname === "/" ? "font-bold text-[#D35400]" : ""}>
            <Link href={"/"}>Home</Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={pathname === "/about" ? "font-bold text-[#D35400]" : ""}
          >
            <Link href={"/about"} className="capitalize">about us</Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={
              pathname === "/services" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link href={"/services"} className="capitalize">services</Link>
          </li>
          <div className="border h-4 hidden sm:flex`"></div>
          <li
            className={
              pathname === "/portfolio" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link href={"/portfolio" } className="capitalize">portfolio</Link>
          </li>
        </ul> 

      <button className="border border-[#D35400] rounded-full flex items-center justify-center px-5 cursor-pointer h-10">
        <Link href={"/contact"} className="capitalize text-[20px]">
          contact us
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
