import { Box, Flex, Text } from "@chakra-ui/react";
// import Footer from "@/app/components/Footer";

export default function about() {
    return (
     <Box padding={[2,5]} background={'white'}>
      <Flex flexDirection={{base:"column", md:'row'}} justifyContent={'space-between'} w={['fit', '100%']} alignItems={{base:'self-start', md:'self-end'}}>
       <Text fontSize={'40px'} paddingTop={50} textTransform={'uppercase'} paddingLeft={[2,5]} color='black'>About us</Text>
       <Box w={'fit'} h={'auto'}>
        {/* container */}
        <Flex gapX={5} justifyContent={'space-around'} padding={[2,5]}>
          <Flex flexDirection={'column'} gapY={10} >
            <Box bg={'#F2EFED'} w={[200,400]} h={150} rounded={'15px'}></Box>
            <Box bg={'#F2EFED'} w={[200,400]} h={150} rounded={'15px'}></Box>
          </Flex>
          <Box bg={'#F2EFED'} w={150} h={330} rounded={'15px'}></Box>
        </Flex>
       </Box>
      </Flex>

      <Box marginTop={10}>
        <Flex  flexDirection={{base:"column", md:'row'}} justifyContent={'space-between'} alignItems={'center'} gapX={3}>
          <Box w={'fit'} h={'auto'}>
            {/* container */}
            <Flex gapX={5} justifyContent={'space-around'} padding={[2,5]}>
              <Flex flexDirection={'column'} gapY={10} >
                <Box bg={'#F2EFED'} w={[200,400]} h={150} rounded={'15px'}></Box>
                <Box bg={'#F2EFED'} w={[200,400]} h={150} rounded={'15px'}></Box>
              </Flex>
              <Box bg={'#F2EFED'} w={150} h={330} rounded={'15px'}></Box>
            </Flex>
          </Box>
          <Flex flexDirection={'column'} mt={[3, 0]} pl={[2, 0]} gapY={5} >
            <Text fontWeight={'bold'} fontSize={'20px'} color='black'>Creativity, Innovation, and Excellence in Every Project</Text>
            <Text color='black'>
              At EliteOn, we specialize in helping brands build an exceptional digital presence.
              From designing stunning websites, to creating unique logos, or managing your social media growth, 
              we innovate to ensure your success.
            </Text>
          </Flex>
        </Flex>
      </Box>
     </Box>
    //  <Footer />
    );
  }
  