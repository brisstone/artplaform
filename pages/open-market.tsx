import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import {
  Box,
  Avatar,
  Text,
  Heading,
  Stack,
  Image,
  Flex,
  Link,
  Tag,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaCircle } from "react-icons/fa";
import ProductSlider from "../components/ProductSlider";

const OpenMarket: NextPage = () => {
  const images = [
    // "/girl-with-basket.png",
    // "/peace-of-mind.png",
    "/style.png",
    "/arthur.png",
    "/after-war.png",
    "/sisters.png",
    "/useless.png",
    "/chubby.png",
    "/four-children.png",

    "/better-days.png",
  ];
  return (
    <div>
      <Head>
        <title>Open Market | Artsplit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Box as="main" py={10} className={styles.container}>
        <Flex align={"center"} gap={2}>
          <FaCircle style={{ color: "#BF702A" }} />
          <Heading as={"h1"} fontSize="lg" color="#6B6968">
            Open Market
          </Heading>
        </Flex>
        <section>
          <Stack direction={["column", "row"]} columnGap={20} py={10}>
            <Box flex={1}>
              <ProductSlider images={[]} />
            </Box>
            <Box flex={1}>
              <Box pb={2} mb={2}>
                <Heading fontSize={"2xl"} fontWeight="semibold">
                  {/* <NextLink href={"/auction"} passHref> */}
                  Dreams in Reality
                  {/* </NextLink> */}
                </Heading>
              </Box>
              <Flex alignItems={"center"} gap={3}>
                <Avatar
                  src="/el-anatsui-potrait.png"
                  size={"sm"}
                  name="el-anatsui"
                />
                <Text color="#6B6968">El Anatsui, 1996</Text>
              </Flex>

              <Box flex={1} mt={10}>
                <Flex justify={"space-between"} mb={5} align="center">
                  <Heading size={"sm"}>Art Info</Heading>
                  <Button
                    borderRadius={"2xl"}
                    bg="black"
                    color="white"
                    size="lg"
                  >
                    $50
                  </Button>
                </Flex>
                <Box overflowY="scroll" h={["60", "60", "60", "80"]} pr={5}>
                  <Text as="p" mb={4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, aut! Fuga maxime, labore ea, perspiciatis, tempora
                    exercitationem quis enim aut doloribus accusantium nihil sed
                    unde quisquam veritatis cum corrupti quod. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Aperiam, aut! Fuga
                    maxime, labore ea, perspiciatis, tempora exercitationem quis
                    enim aut doloribus accusantium nihil sed unde quisquam
                    veritatis cum corrupti quod.
                  </Text>
                  <Text as="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, aut! Fuga maxime, labore ea, perspiciatis, tempora
                    exercitationem quis enim aut doloribus accusantium nihil sed
                    unde quisquam veritatis cum corrupti quod. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Aperiam, aut! Fuga
                    maxime, labore ea, perspiciatis, tempora exercitationem quis
                    enim aut doloribus accusantium nihil sed unde quisquam
                    veritatis cum corrupti quod.
                  </Text>
                </Box>
              </Box>
              <Flex justify={"space-between"} gap={5} mt={5}>
                <Button variant={"outline"} borderRadius={"2xl"}>
                  View Item
                </Button>
                <Button
                  borderRadius={"2xl"}
                  flex={1}
                  style={{
                    background: "#BF702A",
                    borderColor: "#bf702a",
                    color: "#fff",
                  }}
                >
                  Buy/Sell
                </Button>
              </Flex>
            </Box>
          </Stack>
        </section>

        <Box as="section" py={10}>
          <Flex justify={"space-between"}>
            <Text fontSize="xl" fontWeight={"semibold"}>
              Explore other artworks
            </Text>

            <NextLink href="/explore" passHref>
              <Link color="#A6A6A6">See all</Link>
            </NextLink>
          </Flex>
          <Stack direction={["column", "row"]} columnGap={5} pb={5} pt={5}>
            {images.slice(0, 4).map((item) => (
              <Box key={item} flex={1}>
                <Image src={item} alt="article" borderRadius={"xl"} h={80} />

                <Box
                  pb={2}
                  borderBottomStyle="dashed"
                  borderBottomWidth={1}
                  mb={2}
                >
                  <Heading fontSize={"large"} mb={2} mt={5}>
                    Dreams in Reality
                  </Heading>
                  <Text textTransform={"uppercase"} color="orange">
                    $1,500.00
                  </Text>
                </Box>
                <Flex alignItems={"center"} justify="space-between">
                  <Flex gap={3} alignItems={"center"}>
                    <Avatar
                      src="/el-anatsui-potrait.png"
                      size={"sm"}
                      name="el-anatsui"
                    />
                    <Text color="#6B6968">El Anatsui, 1996</Text>
                  </Flex>

                  <Tag variant={"outline"}>25 Units</Tag>
                </Flex>
              </Box>
            ))}
          </Stack>
          <Stack direction={["column", "row"]} columnGap={5} pb={10} pt={5}>
            {images.slice(4, 8).map((item) => (
              <Box key={item} flex={1}>
                <Image src={item} alt="article" borderRadius={"xl"} h={80} />

                <Box
                  pb={2}
                  borderBottomStyle="dashed"
                  borderBottomWidth={1}
                  mb={2}
                >
                  <Heading fontSize={"large"} mb={2} mt={5}>
                    Dreams in Reality
                  </Heading>
                  <Text textTransform={"uppercase"} color="orange">
                    $1,500.00
                  </Text>
                </Box>
                <Flex alignItems={"center"} justify="space-between">
                  <Flex gap={3} alignItems={"center"}>
                    <Avatar
                      src="/el-anatsui-potrait.png"
                      size={"sm"}
                      name="el-anatsui"
                    />
                    <Text color="#6B6968">El Anatsui, 1996</Text>
                  </Flex>

                  <Tag variant={"outline"}>25 Units</Tag>
                </Flex>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};
export default OpenMarket;
