"use client";

import Image from "next/image";
// import Hero from '@/assest/Hero Section.png'
// import image1 from '@/assest/image1.png'
// import image2 from '@/assest/image2.png'
// import image3 from '@/assest/image3.png'
// import managerImage from '@/assest/projectManager.png'
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import vector from "@/assest/Vector.png";
import box from "@/assest/Frame 14176.png";
import eclipse1 from "@/assest/Ellipse 7 (1).png";
import eclipse2 from "@/assest/Ellipse 8.png";
// import rectangle from "@/assest/Rectangle 3.png";
import star from "@/assest/Star 16.png";
import circle from "@/assest/Ellipse 7.png";
import polygon from "@/assest/Polygon 1.png";
import { Box, Flex, Text, Button, Icon, Input } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      paddingLeft={["10px", "30px"]}
      paddingBottom="100px"
      paddingRight={["30px"]}
    >
      <Flex direction={{ base: "column", md: "row" }} gapX="200px">
        <Box bg="#D9D9D9" w={["full", "350px"]} h="500px" position="relative">
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
            color={"#333333"}
            textAlign={["left", "left"]}
          >
            turning <br /> creativity into <br />
            reality.
          </Text>
          <Text mt="10px" color={"#333333"}>
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
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            gapY={1}
            gapX={3}
            mt="10px"
          >
            <Text fontWeight={"bold"} color={"#555555"}>
              01
            </Text>
            <Text width="300px" color={"#333333"}>
              Master creative design with our expert-led courses in logos,
              flyers, and UI/UX design.
            </Text>
          </Flex>
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            gapY={1}
            gapX={3}
            mt="10px"
          >
            <Text fontWeight={"bold"} color={"#555555"}>
              02
            </Text>
            <Text width="300px" color={"#333333"}>
              Transform your ideas into reality with our bespoke design and
              development services.
            </Text>
          </Flex>
        </Box>
      </Flex>

      <section>
        <Box ml={["0px", "100px"]} mt={5}>
          <Text textTransform={"uppercase"} fontSize={"14px"} color={"#555555"}>
            our services
          </Text>
          <Text fontWeight={"bold"} fontSize={"25px"} color={"#555555"}>
            what we do best
          </Text>
          {/* container */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gapY={5}
            justifyContent={"space-between"}
            // alignItems={"center"}
            w="80%"
            mt="20px"
          >
            {/* first child */}
            <Flex flexDirection={"column"} gapY={6}>
              <Box>
                <Flex
                  border="1px solid"
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gapX={"20px"}
                  px={3}
                >
                  <Text>04</Text>
                  <Box spaceX={"2px"} spaceY={1}>
                    <Text fontWeight={"bold"} fontFamily={""}>
                      Digital Marketing
                    </Text>
                    <Text color={"#555555"}>
                      Boost your online presence with effective marketing
                      strategies.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  border="1px solid"
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gapX={"20px"}
                  px={3}
                >
                  <Text>05</Text>
                  <Box spaceX={"2px"} spaceY={1}>
                    <Text fontWeight={"bold"}>Training Programs</Text>
                    <Text color={"#555555"}>
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
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gapX={"20px"}
                  px={3}
                >
                  <Text>06</Text>
                  <Box gapX={"2px"} spaceY={1}>
                    <Text fontWeight={"bold"}>Digital Marketing</Text>
                    <Text color={"#555555"}>
                      Includes Social Media Management, SEO, Paid Ads, and
                      Campaigns.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            {/* second child */}
            <Flex flexDirection={"column"} gapY={6}>
              <Box>
                <Flex
                  border="1px solid"
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gapY={"20px"}
                  gapX={3}
                  px={3}
                >
                  <Text color={"#555555"}>01</Text>
                  <Box spaceX={"5px"} spaceY={1}>
                    <Text fontWeight={"bold"}>Creative Design</Text>
                    <Text color={"#555555"}>
                      Includes Logo Design, Flyer & Brochure Design, App &
                      Website UI/UX
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  border="1px solid"
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  columnGap={"20px"}
                  px={3}
                >
                  <Text>02</Text>
                  <Box spaceX={"2px"} spaceY={1}>
                    <Text fontWeight={"bold"}>Web and App Development</Text>
                    <Text color={"#555555"}>
                      Includes Website Development, Custom Mobile & Web
                      Applications.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  border="1px solid"
                  w={["fit", "400px"]}
                  borderRadius={"60px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gapX={"20px"}
                  px={"3"}
                >
                  <Text>03</Text>
                  <Box spaceX={"2px"} spaceY={1}>
                    <Text fontWeight={"bold"}>Digital Marketing</Text>
                    <Text color={"#555555"}>
                      Includes Social Media Management, SEO, Paid Ads, and
                      Campaigns.
                    </Text>
                  </Box>
                </Flex>
                <Flex gapX={2} mt={["5", "2"]} alignItems={"center"} ml={2}>
                  <Text
                    color={"#D35400"}
                    textDecor={"underline"}
                    cursor={"pointer"}
                  >
                    Train with the best to build your digital expertise.
                  </Text>
                  <Box border={"1px solid #d35400"} borderRadius={"50%"} p={2}>
                    <FaArrowRight />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </section>

      <section className="mt-5">
        <Box ml={["0px", "100px"]} mt={"50px"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            mt="40px"
            justifyContent="space-evenly"
            alignItems="center"
            gapX={"150px"}
            w="100%"
          >
            <Box
              bg="#D9D9D9"
              w={["full", "40%"]}
              h="250px"
              rounded={"10px"}
            ></Box>
            <Box w={["full", "50%"]}>
              <Flex flexDirection="column" gapX={3}>
                <Box gapY={0}>
                  <Text
                    fontWeight="bold"
                    textTransform={"uppercase"}
                    lineHeight={["2", "1"]}
                    m="0"
                  >
                    About Us
                  </Text>
                  <Text
                    fontSize={"48px"}
                    fontWeight={"bold"}
                    lineHeight={["2", "1"]}
                    m="0"
                  >
                    Who We Are
                  </Text>
                </Box>
                <Text w={["100%", "55%"]} color={"#555555"} pt={2}>
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
        <Box position={"relative"} ml={["0px", "100px"]} mt={"50px"} pb={20}>
          <Box
            position={"absolute"}
            left={{ base: "200px", md: "250px" }}
            top={{ base: "240px", md: "150px" }}
            width={["80px", "160px"]}
          >
            <Image src={vector} alt="" width={160} />
          </Box>

          <Box
            position={"absolute"}
            left={{ base: "30px", md: "270px" }}
            top={{ base: "450px", md: "280px" }}
            zIndex={1}
            width={["80px", "200px"]}
          >
            <Image src={box} alt="" width={200} />
          </Box>

          <Box
            position={"absolute"}
            left={{ base: "20px", md: "250px" }}
            top={{ base: "510px", md: "485px" }}
            width={["60px", "200px"]}
          >
            <Image src={eclipse2} alt="" width={100} />
          </Box>

          <Box
            position={"absolute"}
            left={{ base: "10px", md: "220px" }}
            top={{ base: "500px", md: "435px" }}
            zIndex={0}
            width={["80px", "200px"]}
          >
            <Image src={eclipse1} alt="" width={180} height={500} />
          </Box>

          <Box
            position={"absolute"}
            left={{ base: "260px", md: "550px" }}
            top={{ base: "300px", md: "140px" }}
            width={["80px", "200px"]}
          >
            <Image src={box} alt="" width={200} />
          </Box>

          <Box
            position={"absolute"}
            left={{ base: "140px", md: "800px" }}
            top={{ base: "380px", md: "0px" }}
            width={["80px", "200px"]}
          >
            <Image src={box} alt="" width={200} />
          </Box>

          <Flex flexDirection={"column"} gapY={"2"} w={["100%", "40%"]}>
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
            <Text color={"#555555"}>
              From concept to execution, our work speaks for itself. Here are a
              few projects were proud of.
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
            direction={{ base: "row", md: "row" }}
            gapX={3}
            width={["60%", "50%"]}
            alignItems={"center"}
            position={"absolute"}
            left={{ base: "120px", md: "550px" }}
            top={{ base: "500px", md: "500px" }}
          >
            <Box
              border={"1px solid #D9D9D9"}
              bgColor={"#d9d9d9"}
              borderRadius="full"
              width="50px"
              height={"50px"}
            ></Box>
            <Box width={["100%", "49%"]}>
              <Text color={"#555555"}>
                From concept to execution, our work speaks for itself. Here are
                a few projects we&apos;re proud of.
              </Text>
            </Box>
          </Flex>
        </Box>
      </section>

      <section>
        <Box
          mt={["350px", "500px"]}
          ml={["0px", "100px"]}
          position={"relative"}
          h={100}
        >
          <Box
            position={"absolute"}
            zIndex={4}
            left={{ base: 50, md: "-20" }}
            top={{ base: "5", md: "-10" }}
            width={"fit"}
          >
            <Flex
              flexDir="column"
              justify="center"
              align={['left',"center"]}
              textAlign="center"
              // adjusted px size
              px={[30,280]}
              w="100%"
            >
              <Box
                position={{ base: "absolute", md: "static" }}
                top={{ base: "-50px", md: "0px" }}
                left={{ base: "100px", md: "0px" }}
                border="1px solid #D9D9D9"
                bg="#D9D9D9"
                borderRadius="full"
                width="70px"
                height="70px"
              ></Box>

              <Box mt={5} ml={0} maxW={["80%", "500px"]} border={'1px solid re'}>
                <Text fontWeight="bold" fontSize={["20px", "32px"]}>
                  Wale Yomi Fash.
                </Text>
                <Text color="#555555">Lead designer</Text>

                <Box mt={4} ml={[-2, 0]} border={'1px solid blu'} >
                  <Text color="#555555" fontSize={['12px', '16px']}>
                    I enrolled in the UI/UX Design course, and now I&apos;m working
                    at a top tech company! The EliteOn hands-on projects helped
                    me build a strong portfolio.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box position={"absolute"} left={"380px"} top={"210px"}>
            <Image src={eclipse2} alt="" width={120} />
          </Box>
          <Box
            position={"absolute"}
            left={{ base: "40px", md: "200px" }}
            top={""}
            zIndex={3}
            boxShadow={"md"}
            border={"none"}
            bg={"#ffffff"}
            height={"300px"}
            borderRadius={25}
            width={["260px", 500]}
          ></Box>

          <Box
            position={"absolute"}
            left={{ base: "30px", md: "190px" }}
            top={"8"}
            zIndex={2}
            boxShadow="md"
            border={"none"}
            bg={"#ffffff"}
            height={"250px"}
            borderRadius={25}
            width={["290px", 520]}
          ></Box>

          <Box
            position={"absolute"}
            left={{ base: "20px", md: "180px" }}
            top={"20"}
            zIndex={1}
            boxShadow="md"
            border={"none"}
            bg={"#ffffff"}
            height={"170px"}
            borderRadius={25}
            width={["312px", 540]}
          ></Box>
          <Box
            position={"relative"}
            zIndex={0}
            left={{ base: "200px", md: 450 }}
            top={{ base: "-80px", md: -150 }}
            width={["150px", "fit"]}
          >
            <Image src={star} alt="" width={450} />
          </Box>
        </Box>

        <Icon
          bgColor={"white"}
          color={"#000"}
          borderRadius={"full"}
          width={["", "100px"]}
          height={"100px"}
          boxShadow={"md"}
          position={"absolute"}
          left={{ base: "0px", md: "150px" }}
          boxSize={["30px", "50px"]}
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
          left={{ base: "350px", md: "950px" }}
          boxSize={["30px", "50px"]}
        >
          <IoIosArrowForward />
        </Icon>
      </section>

      <section>
        <Box ml={["0px", "100px"]} mt={"300px"}>
          <Text color={"#555555"}>what can we do for you ?</Text>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            mt={4}
            gapX={3}
            gapY={2}
          >
            <Box bg={"#555555"} borderRadius={"full"} px={5} py={2}>
              <Text color={"white"} textTransform={"capitalize"}>
                product design
              </Text>
            </Box>
            <Box border={"1px solid"} borderRadius={"full"} px={5} py={2}>
              <Text color={"#555555"} textTransform={"capitalize"}>
                website development
              </Text>
            </Box>
            <Box border={"1px solid"} borderRadius={"full"} px={5} py={2}>
              <Text color={"#555555"} textTransform={"capitalize"}>
                digital marketing
              </Text>
            </Box>
          </Flex>
          <Box mt={5}>
            <Flex
              alignItems={{ base: "left", md: "center" }}
              direction={{ base: "column", md: "row" }}
            >
              <Box width={"full"} spaceY={5}>
                <Box width={"45%"}>
                  <Input
                    placeholder="Name"
                    size={"md"}
                    width={"100%"}
                    border={"none"}
                    borderBottom={"2px solid #555555"}
                    borderRadius={0}
                    outline={"none"}
                  ></Input>
                </Box>
                <Box width={"45%"}>
                  <Input
                    placeholder="Email"
                    size={"md"}
                    width={"100%"}
                    border={"none"}
                    borderBottom={"2px solid #555555"}
                    borderRadius={0}
                    outline={"none"}
                  ></Input>
                </Box>
                <Box width={"45%"}>
                  <Input
                    placeholder="Project Details"
                    size={"md"}
                    width={"100%"}
                    border={"none"}
                    borderBottom={"2px solid #555555"}
                    borderRadius={0}
                    outline={"none"}
                  ></Input>
                </Box>
              </Box>
              <Box spaceY={5} pt={10}>
                <Flex flexDirection={"column"} gapY={2}>
                  <Box>
                    <Text color="#555555">Phone</Text>
                    <Text color="#555555" fontWeight={"bold"}>
                      +234 (0) 902-507-6961
                    </Text>
                  </Box>
                </Flex>
                <Flex flexDirection={"column"} gapY={2}>
                  <Box>
                    <Text>Email</Text>
                    <Text color="#555555" fontWeight={"bold"}>
                      thegrowthnexus7@gmail.com
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </section>
    </Box>
  );
}
