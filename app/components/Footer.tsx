import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <Box bg="#555555" pb={3} px={5} width={'100%'} mt={'50px'}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        gap={{ base: 3, sm: 20 }}
        h={{ sm: "250px" }}
      >
        {/* Logo and Social Icons */}
        <Flex direction="column" align="center" gap={5} pl={2}>
          <Flex gap={2}>
            <Image src="/logo.png" alt="company logo" w="60px" h="50px"  />
            <Image
              src="/Group 5.png"
              alt="company name"
              w="auto"
              h="auto"
              maxWidth={'150px'}
              objectFit="contain"
            />
          </Flex>
          <Flex gap={2}>
            <FaSquareFacebook color="#F4F4F49E" />
            <FaInstagram color="#F4F4F49E" />
            <FaXTwitter color="#F4F4F49E" />
          </Flex>
        </Flex>

        {/* Footer Links */}
        <Flex
          w="full"
          justify="space-between"
          wrap="wrap"
          gap={{ base: 5, sm: 40 }}
          pl={{ sm: 20 }}
        >
          {[
            {
              title: "company",
              links: ["about us", "careers", "press"],
            },
            {
              title: "product",
              links: ["features", "pricing", "reviews"],
            },
            {
              title: "support",
              links: ["help center", "contact us", "privacy policy"],
            },
            {
              title: "social",
              links: ["twitter", "LinkedIn", "facebook"],
            },
          ].map((section, index) => (
            <Flex key={index} direction="column" gap={3}>
              <Text
                color="white"
                textTransform="capitalize"
                fontSize="12px"
                fontWeight="bold"
              >
                {section.title}
              </Text>
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href="#"
                  color="#F4F4F49E"
                  textTransform="capitalize"
                  fontSize="12px"
                  _hover={{ color: "white" }}
                >
                  {link}
                </Link>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;


































































// import React from 'react'
// import Image from 'next/image'
// import logo from '@/assest/logo.png'
// import { FaInstagram } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import companyName from '@/assest/Group 5.png'
// import { Box, Flex, Text, Button, Icon, Input} from "@chakra-ui/react";


// const Footer = () => {
//   return (
//     <Box bg={'#555555'}>
//         <Flex>
//             <Box>
//                 {/* image */}
//                 {/* icons */}
//             </Box>
//             <Box>
                
//             </Box>
//         </Flex>

//     </Box>
   
//   )
// }

// export default Footer

{/* <div className='bg-[#555555] flex flex-col sm:flex-row items-center gap-x-20 gap-y-3 sm:h-[250px] p-10'>
<div className='flex flex-col gap-y-5 items-center pl-2  '>
    <div className='flex gap-x-2'>
        <Image src={logo} alt='company logo'  width={60} height={30}/>
        <Image src={companyName} alt="company name" className='w-auto h-auto object-contain ' />
    </div>
    <div className='flex gap-x-2 mx-auto'>
     <FaSquareFacebook className='text-[#F4F4F49E]' />
     <FaInstagram  className='text-[#F4F4F49E]' />
     <FaXTwitter className='text-[#F4F4F49E]'  />
    </div>
</div>
<div className='sm:flex grid grid-cols-2 items-center gap-x-40 sm:pl-20 gap-y-5'>
    <div className='flex flex-col gap-y-3 mt-2 sm:mt-0' >
        <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>company</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>about us</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>careers</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>press</a>
    </div>
    <div className='flex flex-col gap-y-3' >
        <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>product</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>features</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>pricing</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>reviews</a>
    </div>
    <div className='flex flex-col gap-y-3' >
        <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>support</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>help center</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>contact us</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>privacy policy</a>
    </div>
    <div className='flex flex-col gap-y-3' >
        <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>social</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>twitter</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>LinkedIn</a>
        <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>facebook</a>
    </div>

</div>

</div> */}