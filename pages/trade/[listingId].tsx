import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "components/Footer";
import Header from "components/Header";
import styles from "styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
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
  StatArrow,
  StatHelpText,
  Stat,
  Button,
  Tab,
  Tabs,
  TabList,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  TableContainer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaCircle } from "react-icons/fa";
import Seo from "components/Seo";
import ProductSlider from "components/ProductSlider";

import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import LiveAuctionsComponent from "components/LiveAuctionsComponent";

const Trade: NextPage = () => {
  const router = useRouter();
  const { listingId } = router?.query;

  // console.log({ listingId });

  const [item, setItem] = useState<any>({});

  useEffect(() => {
    if (listingId) {
      axios
        .get(
          `https://stapi.artsplit.com/v1/listing/listing_details?listing_id=${listingId}`
        )
        .then((resp) => {
          console.log(resp.data?.data);
          setItem(resp?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          `https://stapi.artsplit.com/v1/trade/price_history?listing_id=${listingId}`
        )
        .then((resp) => {
          console.log(resp.data.data);
          // setItem(resp?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          `https://stapi.artsplit.com/v1/trade/buy_offers?listing_id=${listingId}`
        )
        .then((resp) => {
          console.log(resp.data.data);
          // setItem(resp?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          `https://stapi.artsplit.com/v1/trade/sell_offers?listing_id=${listingId}`
        )
        .then((resp) => {
          console.log(resp.data.data);
          // setItem(resp?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingId]);

  return (
    <div>
      <Seo title="Trade" />
      <Header />

      <Box as="main" py={10} className="page-container">
        <Flex align={"center"} gap={2}>
          <FaCircle style={{ color: "#BF702A" }} />
          <Heading as={"h1"} fontSize="lg" color="#6B6968">
            Trade
          </Heading>
        </Flex>
        <section>
          <Stack direction={["column", "row"]} columnGap={20} py={10}>
            <Box flex={1}>
              <ProductSlider images={[]} />
            </Box>
            <Box flex={1}>
              <Box pb={2} mb={2}>
                <Heading fontSize={"large"} mt={5}>
                  {/* <NextLink href={"/auction"} passHref> */}
                  {item?.name}
                  {/* </NextLink> */}
                </Heading>
              </Box>
              <Flex alignItems={"center"} gap={3}>
                <Avatar
                  src={item?.artist_id?.photo}
                  size={"sm"}
                  name={item?.artist_id?.name}
                />
                <Text color="#6B6968">
                  {item?.artist_id?.name},{" "}
                  {dayjs(item?.creation_year).format("YYYY")}
                </Text>
              </Flex>
              <Image src="/graph.png" alt="" />
              <Flex
                // justify={"space-between"}
                align="center"
                borderTopStyle="dashed"
                borderTopWidth={1}
                gap={4}
                py={3}
                mb={10}
              >
                <Text flex={1}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item?.price || 0)}
                </Text>
                <Box flex={1}>
                  <Tag variant={"outline"}>
                    {item?.total_units?.toLocaleString()} units
                  </Tag>
                </Box>
                <Stat flex={1}>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    50%
                  </StatHelpText>
                </Stat>
              </Flex>
              <Tabs variant="soft-rounded" mb={10} isFitted>
                <TabList borderWidth={1} borderRadius={"2xl"}>
                  <Tab>24 h</Tab>
                  <Tab>1 Week</Tab>
                  <Tab>1 Month</Tab>
                  <Tab>1 Year</Tab>
                  <Tab>All</Tab>
                </TabList>
              </Tabs>
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
        <Box as="section" mt={5}>
          <Stack direction={["column", "row"]} gap={10}>
            <Box flex={1}>
              <Heading size={"sm"} mb={5}>
                Art Info
              </Heading>
              <Box overflowY="scroll" h={"80"} pr={5}>
                <Text as="p" mb={4}>
                  {item?.story}
                </Text>
              </Box>
            </Box>
            <Box flex={1}>
              <Flex borderWidth={1} borderRadius="lg">
                <Box flex={1} py={5} pl={3} borderRightWidth={1}>
                  <Text fontSize={"xs"}>Starting Bid</Text>
                  <Text color="black" fontWeight={"semibold"}>
                    $3.50
                  </Text>
                </Box>
                <Box flex={1} py={5} pl={3} borderRightWidth={1}>
                  <Text fontSize={"xs"}>Available Unit(s)</Text>
                  <Text color="black" fontWeight={"semibold"}>
                    {item?.total_units}
                  </Text>
                </Box>
                <Box flex={1} py={5} pl={3}>
                  <Text fontSize={"xs"}>Reference Price</Text>
                  <Text color="black" fontWeight={"semibold"}>
                    $1,000.00
                  </Text>
                </Box>
              </Flex>

              <Box
                display={"flex"}
                flexDir="column"
                flexWrap="nowrap"
                overflowY={"auto"}
                pr={5}
                pt={5}
              >
                <TableContainer borderRadius={"lg"} borderWidth={1}>
                  <Table size="sm" variant="unstyled">
                    <Thead borderBottomWidth={1}>
                      <Tr>
                        <Th py={3} color="#A6A6A6" borderRightWidth={1}>
                          Asks
                        </Th>
                        <Th color="#A6A6A6" borderRightWidth={1}>
                          Units
                        </Th>
                        <Th color="#A6A6A6" borderRightWidth={1}>
                          Bids
                        </Th>
                        <Th color="#A6A6A6">Units</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td borderRightWidth={1} color="#FF0000">
                          $50.00
                        </Td>
                        <Td borderRightWidth={1}>20</Td>
                        <Td borderRightWidth={1} isNumeric color="#06932C">
                          $25.40
                        </Td>
                        <Td>6</Td>
                      </Tr>
                      <Tr>
                        <Td borderRightWidth={1} color="#FF0000">
                          $40.00
                        </Td>
                        <Td borderRightWidth={1}>30</Td>
                        <Td borderRightWidth={1} isNumeric color="#06932C">
                          $30.48
                        </Td>
                        <Td>6</Td>
                      </Tr>
                      <Tr>
                        <Td borderRightWidth={1} color="#FF0000">
                          $20.00
                        </Td>
                        <Td borderRightWidth={1}>100</Td>
                        <Td borderRightWidth={1} isNumeric color="#06932C">
                          $10.00
                        </Td>
                        <Td>6</Td>
                      </Tr>
                      <Tr>
                        <Td borderRightWidth={1} color="#FF0000">
                          $20.00
                        </Td>
                        <Td borderRightWidth={1}>10</Td>
                        <Td borderRightWidth={1} isNumeric color="#06932C">
                          $10.00
                        </Td>
                        <Td>6</Td>
                      </Tr>
                      <Tr>
                        <Td borderRightWidth={1} color="#FF0000">
                          $80.00
                        </Td>
                        <Td borderRightWidth={1}>15</Td>
                        <Td borderRightWidth={1} isNumeric color="#06932C">
                          $39.00
                        </Td>
                        <Td>6</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box as="section" py={10}>
          <Flex justify={"space-between"}>
            <Text fontSize="xl" fontWeight={"semibold"}>
              Explore other artworks
            </Text>

            <NextLink href="/explore" passHref>
              <Link color="#A6A6A6">See all</Link>
            </NextLink>
          </Flex>

          <Box as={Row} py={10}>
            <LiveAuctionsComponent />
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Trade;
