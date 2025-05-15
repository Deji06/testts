"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assest/logo.png";
import companyName from "@/assest/Group 5.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Box, Text } from "@chakra-ui/react";

// type Props = {}

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Box
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-5 sm:gap-y-0 mt-3 sm:px-10 bg-white "
      padding={["5px", "20px"]}
    >
      <div className="flex w-full sm:w-auto  justify-between items-center p-5 sm:p-0 ">
        <div className="sm:hidden text-[100px]" onClick={handleMenu}>
          <GiHamburgerMenu color="black" />
        </div>

        <div className="flex gap-x-2 items-center pr-3">
          <Image src={logo} alt="company logo" width={40} height={30} />
          <Link href={"/"}>
            {" "}
            <Image
              src={companyName}
              alt="company name"
              className="w-auto h-auto max-w-[150px] sm:max-w-[200px] object-contain"
            />
          </Link>
        </div>
      </div>

      {/* mobile view */}
      {openMenu ? (
        <ul className="flex flex-col sm:flex-row sm:items-center items-start p-5 sm:p-0  gap-x-3 gap-y-5">
          <li className={pathname === "/" ? "font-bold text-[#D35400]" : ""}>
            <Link href={"/"} onClick={() => setOpenMenu(false)}>
              <Text color={'black'}>Home</Text>
            </Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={pathname === "/about" ? "font-bold text-[#D35400]" : ""}
          >
            <Link
              href={"/about"}
              className="capitalize text-black"
              onClick={() => setOpenMenu(false)}
            >
              <Text color="black" _hover={{ color: "d35400" }}>
                about us
              </Text>
            </Link>
          </li>
          <div className="border h-4 hidden sm:flex"></div>
          <li
            className={
              pathname === "/services" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link
              href={"/services"}
              className="capitalize text-black"
              onClick={() => setOpenMenu(false)}
            >
              <Text color="black">service</Text>
            </Link>
          </li>
          <div className="border h-4 hidden sm:flex`"></div>
          <li
            className={
              pathname === "/portfolio" ? "font-bold text-[#D35400]" : ""
            }
          >
            <Link
              href={"/portfolio"}
              className="capitalize text-black"
              onClick={() => setOpenMenu(false)}
            >
              <Text color="black">portfolio</Text>
              {/* portfolio */}
            </Link>
          </li>
        </ul>
      ) : (
        " "
      )}

      {/* desktop view */}
      <ul className=" hidden sm:flex flex-col sm:flex-row sm:items-center items-start p-5 sm:p-0  gap-x-3 gap-y-5">
        <li
          className={
            pathname === "/" ? "font-bold text-[#D35400]" : "text-black"
          }
        >
          <Link href={"/"} className="capitalize">
            <Text
              textStyle="md"
              fontWeight={"medium"}
              _hover={{ color: "#d35400" }}
            >
              {" "}
              home{" "}
            </Text>
          </Link>
        </li>
        <Box borderWidth="1px" height="20px" borderColor="black"></Box>
        <li
          className={
            pathname === "/about" ? "font-bold text-[#D35400]" : "text-black"
          }
        >
          <Link href={"/about"} className="capitalize">
            <Text
              textStyle="md"
              fontWeight={"medium"}
              color={"#333333"}
              _hover={{ color: "#d35400" }}
            >
              {" "}
              about us{" "}
            </Text>
          </Link>
        </li>
        <Box borderWidth="1px" height="20px" borderColor="black"></Box>
        <li
          className={pathname === "/services" ? "font-bold text-[#D35400]" : ""}
        >
          <Link href={"/services"} className="capitalize">
            <Text
              textStyle="md"
              fontWeight={"medium"}
              color={"#333333"}
              _hover={{ color: "#d35400" }}
            >
              {" "}
              service{" "}
            </Text>
          </Link>
        </li>
        <Box borderWidth="1px" height="20px" borderColor="black"></Box>
        <li
          className={
            pathname === "/portfolio" ? "font-bold text-[#D35400]" : ""
          }
        >
          <Link href={"/portfolio"} className="capitalize">
            <Text
              textStyle="md"
              fontWeight={"medium"}
              color={"#333333"}
              _hover={{ color: "#d35400" }}
            >
              {" "}
              portfolio{" "}
            </Text>
          </Link>
        </li>
      </ul>

      <Button
        variant="outline"
        border="1px solid #D35400"
        color="#D35400"
        _hover={{ bg: "#D35400", color: "white" }}
        borderRadius="20px"
      >
        <Link
          href={"/contact"}
          className="capitalize text-[20px] "
          onClick={() => setOpenMenu(false)}
        >
          <Text textStyle="md" fontWeight={"medium"} color={"#333333"}>
            {" "}
            contact us{" "}
          </Text>
        </Link>
      </Button>
    </Box>
  );
};

export default Navbar;
