'use client'
import { Box, Text, Flex, Icon} from "@chakra-ui/react"
import { MdArrowOutward } from "react-icons/md";

export default function services() {
    return (
        <Box bgColor={'#D35400'} padding={5} marginTop={5}>
            <Box w={''}>
                <Box >
                    <Text color={'white'} fontSize={'30px'} textTransform={'capitalize'}>our services</Text>
                    <Text color={'white'} fontSize={'15px'} >Our Expertise at a Glance.</Text>
                </Box>
                {/* second container */}
                <Flex flexDirection={'column'} p={[1, 4]} gapY={3} mx={'auto'} w={['100%', '50%']} mt={[5, 0]}>
                    <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex flexDirection={'row'} gapX={3} alignItems={'center'}>
                            <Box border={'1px solid white'} w={5} h={5}></Box>
                            <Text color={'white'} fontSize={['12px','16px']}>creative design</Text>
                        </Flex>
                        <Box>
                            <Text color={'white'} fontSize={['12px','16px']}>flyers, logos, ui/ux</Text>
                        </Box>
                    </Flex>
                    <Box border={'1px solid white'} w={'100%'} marginTop={5}></Box>

                    <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex flexDirection={'row'} gapX={3} alignItems={'center'}>
                            <Box border={'1px solid white'} w={5} h={5}></Box>
                            <Text color={'white'} fontSize={['12px', '16px']}>Web & App Development</Text>
                        </Flex>
                        <Box>
                            <Text color={'white'} fontSize={['12px','16px']}>Websites & Custom Apps</Text>
                        </Box>
                    </Flex>
                    <Box border={'1px solid white'} w={'100%'} marginTop={5}></Box>

                    <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex flexDirection={'row'} gapX={3} alignItems={'center'}>
                            <Box border={'1px solid white'} w={5} h={5}></Box>
                            <Text color={'white'} fontSize={['12px','16px']}>Digital Marketing</Text>
                        </Flex>
                        <Box>
                            <Text color={'white'} fontSize={['12px','16px']}>SEO, Paid Ads, Campaigns</Text>
                        </Box>
                    </Flex>
                    <Box border={'1px solid white'} w={'100%'} marginTop={5}></Box>

                    <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex flexDirection={'row'} gapX={3} alignItems={'center'}>
                            <Box border={'1px solid white'} w={5} h={5}></Box>
                            <Text color={'white'} fontSize={['12px','16px']}>Training Programs</Text>
                        </Flex>
                        <Box>
                            <Text color={'white'} fontSize={['12px','16px']}>Design, Development, Marketing Skills</Text>
                        </Box>
                    </Flex>
                    <Box border={'1px solid white'} w={'100%'} marginTop={5}></Box>
                </Flex>

                <Flex flexDirection={'row'} gapX={2} alignItems={'center'} marginTop={5}>
                    <Text color={'white'} textDecoration={'underline'}>Explore Services</Text>
                    <Icon as={MdArrowOutward} color={'white'}/>
                     {/* <MdArrowOutward /> */}
                </Flex>

            </Box>


        </Box>
    )
}