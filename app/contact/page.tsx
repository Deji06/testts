import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  Grid,
} from "@chakra-ui/react";
// import { Switch } from "@/components/ui/switch";

export default function Contact() {
  // const inputWidth = useBreakpointValue({ base: "100%", sm: "565px" });

  return (
    <Box p={5} w="" mx="auto" background={"white"}>
      <Box mx={"auto"} w={['100%',"80%"]}>
        <Text textAlign="center" fontWeight="bold" fontSize="xl" color="black">
          Contact Us
        </Text>

        <form>
          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            columnGap={{ base: 10, sm: 0 }}
            mt={10}
            w="100%"
            // border={'1px solid black'}
          >
            <Box mb={4} mr={{ sm: 4 }}>
              <Text mb={1} fontWeight="bold" color="black">
                First Name
              </Text>
              <Input
                type="text"
                placeholder="First Name"
                bg="#F4F4F4"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="10px"
                _placeholder={{ color: "#A9A9A9", px: 1 }}
              />
            </Box>

            <Box mb={4}>
              <Text mb={1} fontWeight="bold" color="black">
                Last Name
              </Text>
              <Input
                type="text"
                placeholder="Last Name"
                bg="#F4F4F4"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="10px"
                _placeholder={{ color: "#A9A9A9", px: 1 }}
              />
            </Box>
          </Grid>

          <Box mt={5}>
            <Text mb={1} fontWeight="bold" color="black">
              Email Address
            </Text>
            <Input
              type="email"
              placeholder="Email Address"
              // width={inputWidth}
              bg="#F4F4F4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="10px"
              _placeholder={{ color: "#A9A9A9", px: 1 }}
            />
          </Box>

          <Box mt={5}>
            <Text mb={1} fontWeight="bold" color="black">
              Your Message
            </Text>
            <Textarea
              placeholder="Textarea"
              // width={inputWidth}
              bg="#F4F4F4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="10px"
              _placeholder={{ color: "#A9A9A9", px: 1 }}
            />
          </Box>

          <Flex alignItems="center" mt={5} gap={2}>
            {/* <Switch id="airplane-mode" /> */}
            <input type="checkbox" />
            <Text color="black">I agree to the T&amp;C</Text>
          </Flex>

          <Button
            type="submit"
            mt={5}
            width={{ base: "350px", sm: "565px" }}
            ml={['0px', "200px"]}
            borderRadius="10px"
            bg="#555555"
            color="white"
            textTransform="uppercase"
            _hover={{ bg: "#444444" }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}
