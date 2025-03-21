// import Image from "next/image";

import React from "react";
import Image from "next/image";
// import Hero from '@/assest/Hero Section.png'
// import image1 from '@/assest/image1.png'
// import image2 from '@/assest/image2.png'
// import image3 from '@/assest/image3.png'
// import managerImage from '@/assest/projectManager.png'
import { FaArrowRight } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

import vector from "@/assest/Vector.png";
import box from "@/assest/Frame 14176.png";
import eclipse1 from "@/assest/Ellipse 7 (1).png";
import eclipse2 from "@/assest/Ellipse 8.png";
// import rectangle from "@/assest/Rectangle 3.png";
import star from "@/assest/Star 16.png";
import circle from "@/assest/Ellipse 7.png";
import polygon from "@/assest/Polygon 1.png";
import Footer from "./components/Footer";
import { Box, Flex, Text, Button, Icon, Input} from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Box paddingLeft="30px" paddingBottom="100px" paddingRight="30px">
        <Flex columnGap="200px">
          <Box bg="#D9D9D9" w="350px" h="500px" position="relative">
            <Box
              position="absolute"
              top="180px"
              bottom="300px"
              left="90px"
              right="50px"
            >
              <Image src={circle} alt="circle" width={150} />
            </Box>
            <Box position="absolute" top="240px" left="150px" bottom="100px">
              <Image src={polygon} alt="circle" width={0} />
            </Box>
          </Box>
          <Box>
            <Text
              textTransform="capitalize"
              fontSize="60px"
              fontWeight={"bold"}
              color={'#333333'}
            >
              turning <br /> creativity into <br />
              reality.
            </Text>
            <Text mt="10px" color={'#333333'}>
              Empowering your brand with innovative digital solutions
            </Text>
            <Button
              variant="outline"
              border="1px solid #D35400"
              bgColor="#D35400"
              borderRadius="20px"
              mt="10px"
              px="40px"
            >
              <Text color="#fff">Explore</Text>
            </Button>
            <Flex flexDirection={"column"} rowGap={1} mt="10px">
              <Text fontWeight={"bold"} color={'#555555'}>01</Text>
              <Text width="300px" color={'#333333'}>
                Master creative design with our expert-led courses in logos,
                flyers, and UI/UX design.
              </Text>
            </Flex>
            <Flex flexDirection={"column"} rowGap={1} mt="10px">
              <Text fontWeight={"bold"} color={'#555555'}>02</Text>
              <Text width="300px" color={'#333333'}>
                Transform your ideas into reality with our bespoke design and
                development services.
              </Text>
            </Flex>
          </Box>
        </Flex>

        <section>
          <Box ml={"100px"}>
            <Text textTransform={"uppercase"} fontSize={"14px"} color={'#555555'}>
              our services
            </Text>
            <Text fontWeight={"bold"} fontSize={"25px"} color={'#555555'}>
              what we do best
            </Text>
            {/* container */}
            <Flex
              justifyContent={"space-between"}
              // alignItems={"center"}
              w="80%"
              mt="20px"
            >
              {/* first child */}
              <Flex flexDirection={"column"} rowGap={6}>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    columnGap={"20px"}
                    px={3}
                  >
                    <Text>04</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"} fontFamily={''}>Digital Marketing</Text>
                      <Text color={'#555555'}>
                        Boost your online presence with effective marketing
                        strategies.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    columnGap={"20px"}
                    px={3}
                  >
                    <Text>05</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"}>Training Programs</Text>
                      <Text color={'#555555'}>
                        {" "}
                        Includes Graphic Design, UI/UX Design, Web Development,
                        and Digital Marketing.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    columnGap={"20px"}
                    px={3}
                  >
                    <Text>06</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"}>Digital Marketing</Text>
                      <Text color={'#555555'}>
                        Includes Social Media Management, SEO, Paid Ads, and
                        Campaigns.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* second child */}
              <Flex flexDirection={"column"} rowGap={6}>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    rowGap={"20px"}
                    px={3}
                  >
                    <Text color={'#555555'}>01</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"}>Creative Design</Text>
                      <Text color={'#555555'}>
                        Includes Logo Design, Flyer & Brochure Design, App &
                        Website UI/UX
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    columnGap={"20px"}
                    px={3}
                  >
                    <Text>02</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"}>Web and App Development</Text>
                      <Text color={'#555555'}>
                        Includes Website Development, Custom Mobile & Web
                        Applications.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    border="1px solid"
                    w={"400px"}
                    borderRadius={"60px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    columnGap={"20px"}
                    px={"3"}
                  >
                    <Text>03</Text>
                    <Box columnGap={"2px"}>
                      <Text fontWeight={"bold"}>Digital Marketing</Text>
                      <Text color={'#555555'}>
                        Includes Social Media Management, SEO, Paid Ads, and
                        Campaigns.
                      </Text>
                    </Box>
                  </Flex>
                  <Flex columnGap={2} mt="2" alignItems={"center"}>
                    <Text
                      color={"#D35400"}
                      textDecor={"underline"}
                      cursor={"pointer"}
                    >
                      Train with the best to build your digital expertise.
                    </Text>
                    <Box
                      border={"1px solid #d35400"}
                      borderRadius={"50%"}
                      p={2}
                    >
                      <FaArrowRight />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </section>

        <section className="mt-5">
          <Box ml={"100px"} mt={"50px"}>
            <Flex
              mt="40px"
              justifyContent="space-evenly"
              alignItems="center"
              columnGap={"150px"}
              w="100%"
            >
              <Box bg="#D9D9D9" w="40%" h="250px" rounded={"10px"}></Box>
              <Box w="50%">
                <Flex flexDirection="column" columnGap={3}>
                  <Box rowGap={0}>
                    <Text
                      fontWeight="bold"
                      textTransform={"uppercase"}
                      lineHeight="1"
                      m="0"
                    >
                      About Us
                    </Text>
                    <Text
                      fontSize={"48px"}
                      fontWeight={"bold"}
                      lineHeight="1"
                      m="0"
                    >
                      Who We Are
                    </Text>
                  </Box>
                  <Text w="55%" color={'#555555'}>
                    We are a full-service digital agency transforming ideas into
                    reality. From designing logos to developing cutting-edge
                    websites, we specialize in creating digital experiences that
                    connect, inspire, and drive business success.
                  </Text>
                </Flex>
                <Button
                  variant="outline"
                  border="1px solid #D35400"
                  bgColor="#D35400"
                  borderRadius="20px"
                  mt="10px"
                  px="20px"
                >
                  <Text color="#fff">Learn More</Text>
                </Button>
              </Box>
            </Flex>
          </Box>
        </section>

        <section>
          <Box position={"relative"} ml={"100px"} mt={"50px"} pb={20}>
            <Box position={"absolute"} left={250} top={"150px"}>
              <Image src={vector} alt="" width={160} />
            </Box>

            <Box position={"absolute"} left={"270px"} top={"280px"} zIndex={1}>
              <Image src={box} alt="" width={200} />
            </Box>

            <Box position={"absolute"} left={"250px"} top={"485px"}>
              <Image src={eclipse2} alt="" width={100} />
            </Box>

            <Box position={"absolute"} left={"220px"} top={"435px"} zIndex={0}>
              <Image src={eclipse1} alt="" width={180} height={500} />
            </Box>

            <Box position={"absolute"} left={"550px"} top={"140px"}>
              <Image src={box} alt="" width={200} />
            </Box>

            <Box position={"absolute"} left={"800px"} top={""}>
              <Image src={box} alt="" width={200} />
            </Box>

            <Flex flexDirection={"column"} rowGap={"2"} w={"40%"}>
              <Text textTransform={"uppercase"} fontWeight={"bold"}>
                portfolio highlights
              </Text>
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                fontSize={"40px"}
              >
                our creative works
              </Text>
              <Text color={'#555555'}>
                From concept to execution, our work speaks for itself. Here are
                a few projects we're proud of.
              </Text>
              <Button
                variant="outline"
                border="1px solid #D35400"
                bgColor="#D35400"
                borderRadius="20px"
                mt="10px"
                w={"40%"}
                // px="30px"
              >
                <Text color="#fff">Explore</Text>
              </Button>
            </Flex>

            <Flex
              columnGap={3}
              width={"50%"}
              alignItems={"center"}
              position={"absolute"}
              left={"550px"}
              top={"500px"}
            >
              <Box
                border={"1px solid #D9D9D9"}
                bgColor={"#d9d9d9"}
                borderRadius="full"
                width="50px"
                height={"50px"}
              ></Box>
              <Box width={"49%"}>
                <Text color={'#555555'}>
                  From concept to execution, our work speaks for itself. Here
                  are a few projects we're proud of.
                </Text>
              </Box>
            </Flex>
          </Box>
        </section>

        <section>
          <Box mt={"500px"} ml={"100px"} position={"relative"} h={100}>
            <Box
              position={"absolute"}
              zIndex={4}
              left={-20}
              top={"-10"}
              width={"fit"}
            >
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  border={"1px solid #D9D9D9"}
                  bgColor={"#d9d9d9"}
                  borderRadius="full"
                  width="70px"
                  height={"70px"}
                ></Box>
                <Box>
                  <Text fontWeight={"bold"} fontSize={"32px"}>
                    Wale Yomi Fash.
                  </Text>
                  <Text pl={""} textAlign={"center"} color={'#555555'}>
                    Lead designer
                  </Text>
                </Box>
                <Box width={"30%"}>
                  <Text textAlign={"center"} pl={""} color={'#555555'}>
                    I enrolled in the UI/UX Design course, and now I’m working
                    at a top tech company! The EliteOn hands-on projects helped
                    me build a strong portfolio.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box position={"absolute"} left={"380px"} top={"210px"}>
              <Image src={eclipse2} alt="" width={120} />
            </Box>
            <Box
              position={"absolute"}
              left={"200px"}
              top={""}
              zIndex={3}
              boxShadow={"md"}
              border={"none"}
              bg={"#ffffff"}
              height={"300px"}
              borderRadius={25}
              width={500}
            ></Box>

            <Box
              position={"absolute"}
              left={"190px"}
              top={"8"}
              zIndex={2}
              boxShadow="md"
              border={"none"}
              bg={"#ffffff"}
              height={"250px"}
              borderRadius={25}
              width={520}
            ></Box>

            <Box
              position={"absolute"}
              left={"180px"}
              top={"20"}
              zIndex={1}
              boxShadow="md"
              border={"none"}
              bg={"#ffffff"}
              height={"170px"}
              borderRadius={25}
              width={540}
            ></Box>
            <Box
              position={"relative"}
              zIndex={0}
              left={450}
              top={-150}
              width={"fit"}
            >
              <Image src={star} alt="" width={450} />
            </Box>
          </Box>

          <Icon
            bgColor={"white"}
            color={"#000"}
            borderRadius={"full"}
            width={"100px"}
            height={"100px"}
            boxShadow={"md"}
            position={"absolute"}
            left={"150px"}
            boxSize={"50px"}
          >
            <IoIosArrowBack />
          </Icon>
          <Icon
            bgColor={"white"}
            borderRadius={"full"}
            width={"100px"}
            height={"100px"}
            boxShadow={"md"}
            position={"absolute"}
            left={"950px"}
            boxSize={"50px"}
          >
            <IoIosArrowForward />
          </Icon>
        </section>

        <section>
          <Box ml={'100px'} mt={'300px'}>
            <Text color={'#555555'}>what can we do for you ?</Text>
            <Flex mt={4} rowGap={3}>
              <Box bg={'#555555'} borderRadius={'full'} px={5} py={2}>
                <Text color={'white'} textTransform={'capitalize'}>product design</Text>
              </Box>
              <Box border={'1px solid'} borderRadius={'full'} px={5} py={2}>
                <Text color={'#555555'} textTransform={'capitalize'}>website development</Text>
              </Box>
              <Box border={'1px solid'} borderRadius={'full'} px={5} py={2}>
                <Text color={'#555555'} textTransform={'capitalize'}>digital marketing</Text>
              </Box>
            </Flex>
            <Box mt={5}>
              <Flex alignItems={'center'}>
                <Box width={'full'} rowGap={5}>
                  <Box width={'45%'}>
                    <Input placeholder="Name" size={'md'} width={'100%'} border={'none'} borderBottom={'2px solid #555555'} borderRadius={0} outline={'none'}></Input>
                  </Box>
                  <Box width={'45%'}>
                    <Input placeholder="Email" size={'md'} width={'100%'} border={'none'} borderBottom={'2px solid #555555'} borderRadius={0} outline={'none'}></Input>
                  </Box>
                  <Box width={'45%'}>
                    <Input placeholder="Project Details" size={'md'} width={'100%'} border={'none'} borderBottom={'2px solid #555555'} borderRadius={0} outline={'none'}></Input>
                  </Box>
                </Box>
                <Box rowGap={5} pt={10}>
                  <Flex flexDirection={'column'} rowGap={2}>
                    <Box>
                      <Text color='#555555'>Phone</Text>
                      <Text color='#555555' fontWeight={'bold'}>+234 (0) 902-507-6961</Text>
                    </Box>
                  </Flex>
                  <Flex flexDirection={'column'} rowGap={2}>
                    <Box>
                      <Text>Email</Text>
                      <Text color='#555555' fontWeight={'bold'}>thegrowthnexus7@gmail.com</Text>
                    </Box>
                  </Flex>
                </Box>

              </Flex>
            </Box>
          </Box>
        </section>
      </Box>
      <Footer/>
    </>
  );
};

export default page;

// <div className='p-5 pb-10'>
//       <Image src={Hero} alt='background image' className='h-auto object-contain w-full mx-auto' />

//       <section>
//         <p className='text-center font-bold text-[48px]'>our services</p>
//         <p className='text-center text-[#555555] '>At EliteOn, we specialize in helping brands build an exceptional digital presence.
//           Whether it’s designing stunning <br /> websites,
//           creating unique logos, or managing your social media growth, we innovate to ensure your success.
//         </p>
//         <div className='mt-10'>
//           <div className='flex sm:flex-row flex-col items-center justify-evenly gap-y-5'>
//             <Image src={image1} alt='' width={250}/>
//             <Image src={image2} alt='' width={250}/>
//             <Image src={image3} alt='' width={250}/>
//           </div>
//           <div className='flex justify-center mt-5'>
//            <button className='border bg-[#D35400] text-white text-[12px] rounded-full px-10 py-3 cursor-pointer'>view all services</button>
//           </div>
//         </div>
//       </section>

//       <section className='bg-[#F4F4F4] flex flex-col sm:flex-row items-center gap-y-5  mt-5 pb-5'>
//         <div className='pt-10 pl-3 space-y-5'>
//           <p className='text-[40px] text-center sm:text-left'>Who We Are</p>
//           <p className='text-[#555555] w-[55%]  mx-auto sm:mx-0'>We are EliteOn—your trusted partner in digital success. Our mission is
//             simple: to bring your ideas into reality with innovative designs, custom-built solutions,
//             and impactful digital strategies
//           </p>
//           <button className='border bg-[#D35400] text-white text-[12px] rounded-full px-10 py-3 cursor-pointer mx-20 sm:mx-0'>learn more about us</button>
//         </div>
//         <div>
//           <Image src={managerImage} alt='team image' />
//         </div>
//       </section>

//       <section className='sm:mt-5 py-10'>
//         <p className='text-[40px] font-bold text-center'>What our client says</p>
//         <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-32 gap-y-10 sm:mx-auto p-10'>
//           <div className='border-none bg-[#F3F6FA] sm:w-[350px] p-10 rounded-tl-[40px] rounded-br-[40px] '>
//             <p className='text-[#555555]'>EliteOn transformed our social media presence and gave our brand a fresh, professional image!</p>
//           </div>
//           <div className='border-none bg-[#F3F6FA] sm:w-[350px] p-10 rounded-tl-[40px] rounded-br-[40px] '>
//             <p className='text-[#555555]'>EliteOn transformed our social media presence and gave our brand a fresh, professional image!</p>
//           </div>
//           <div  className='flex justify-center sm:col-span-2'>
//             <div className='border-none bg-[#F3F6FA] sm:w-[350px] p-10 rounded-tl-[40px] rounded-br-[40px] col-span-2 mx-auto '>
//               <p className='text-[#555555]'>EliteOn transformed our social media presence and gave our brand a fresh, professional image!</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer/>
//     </div>
