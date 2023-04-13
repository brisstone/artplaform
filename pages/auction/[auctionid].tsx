import { useEffect, useState } from "react";
// import type { NextPage } from "next";
import Head from "next/head";
import Footer from "components/Footer";
import Header from "components/Header";
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
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaCircle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import ArticleItem from "components/ArticleItem";
import Seo from "components/Seo";
import ProductSlider from "components/ProductSlider";
import { useRouter } from "next/router";
import axios from "axios";
import dayjs from "dayjs";
import Product from "components/Product";
import { Auction as AuctionItem } from "d";
import { useAppDispatch, useAppSelector } from "utils/redux";
import {
  convertToArray,
  convertToList,
} from "utils/convertDataStructures";
import { setLiveAuctions } from "reducers/appReducer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Auction() {
  const router = useRouter();
  const { auctionid } = router?.query;

  const [auction, setAuction] = useState<AuctionItem>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [auctionBids, setAuctionBids] = useState<any[]>([]);

  const Dispatch = useAppDispatch();
  const d = useAppSelector((state) => state.app.liveAuctions);
  const liveAuctions = convertToArray(d);

  const images = (auction?.image_gallery || []).map((i) => i?.url);
  // console.log({images})

  useEffect(() => {
    axios
      .get(
        `https://stapi.artsplit.com/v1/auction/get_artwork_auction_details/${auctionid}`
      )
      .then((resp) => {
        const d = resp?.data?.data;
        console.log({ d });
        setAuction(resp?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://stapi.artsplit.com/v1/auction/view_live_auctions")
      .then((resp) => {
        Dispatch(setLiveAuctions(convertToList(resp.data.data)));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://stapi.artsplit.com/v1/auction/view_auction_bids?auction_id=${auctionid}&status=PLACED`
      )
      .then((resp) => {
        // console.log(resp.data.data);
        setAuctionBids(resp?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auctionid]);

  return (
    <div>
      <Seo title="Auction" />
      <Header />

      <Box as="main" py={10} className="page-container">
        <Flex align={"center"} gap={2}>
          <FaCircle style={{ color: "#BF702A" }} />
          <Heading as={"h1"} fontSize="lg" color="#6B6968">
            Auction
          </Heading>
        </Flex>
        <section>
          <Stack direction={["column", "row"]} columnGap={20} py={10}>
            <Box flex={1}>
              <ProductSlider images={auction?.artworkImageGallery || []} />
            </Box>
            <Box flex={1}>
              <Box pb={2} mb={2}>
                <Heading fontSize={"large"} mt={5}>
                  <NextLink href={"/auction"} passHref>
                    <Link>{auction?.itemName}</Link>
                  </NextLink>
                </Heading>
              </Box>
              <Flex alignItems={"center"} gap={3}>
                <Avatar
                  src={auction?.artistImage}
                  size={"sm"}
                  name={auction?.artistName}
                />
                <Text color="#6B6968">
                  {auction?.artistName},{" "}
                  {dayjs(auction?.creationYear).format("YYYY")}
                </Text>
              </Flex>
              {/* <Image src="/graph.png" alt="" /> */}
              <Flex
                // justify={"space-between"}
                align="center"
                borderTopStyle="dashed"
                borderTopWidth={1}
                gap={4}
                // py={3}
                // mt={5}
              >
                {/* <Text flex={1}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(auction?.value || 0)}
                </Text> */}
                {/* <Box flex={1}>
                  <Tag variant={"outline"} borderRadius={30}>
                    {auction?.totalUnits?.toLocaleString()} units
                  </Tag>
                </Box> */}
                {/* <Stat flex={1}>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    50%
                  </StatHelpText>
                </Stat> */}
              </Flex>
              <Flex
                // justify={"space-between"}
                align="center"
                gap={4}
                py={[1, 3]}
              >
                <Box
                  flex={1}
                  borderWidth={1}
                  py={[2, 2, 2, 3]}
                  pl={3}
                  borderRadius="lg"
                >
                  <Text fontSize={"xs"}>Starting Bid</Text>
                  <Text color="black" fontWeight={"semibold"}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(auction?.minimumBidAmount || 0)}
                  </Text>
                </Box>
                <Box
                  flex={1}
                  borderWidth={1}
                  py={[2, 2, 2, 3]}
                  pl={3}
                  borderRadius="lg"
                  bg="black"
                >
                  <Text fontSize={"xs"} color="white">
                    Highest Bid
                  </Text>
                  <Text color="white" fontWeight={"extrabold"}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(auction?.highestBidder || 0)}
                  </Text>
                </Box>
              </Flex>
              <Flex justify={"space-between"} gap={5} mt={5}>
                <Button
                  variant={"outline"}
                  borderRadius={"2xl"}
                  onClick={() => setLightboxOpen(true)}
                >
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
                  Place bid
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
              <Box overflowY="scroll" h={"64"} pr={5}>
                <Text as="p" mb={4}>
                  {auction?.artStory}
                </Text>
              </Box>
            </Box>
            <Box flex={1}>
              <Heading size={"sm"} mb={5}>
                Live Bids
              </Heading>
              <Divider />
              <Box
                h="64"
                display={"flex"}
                flexDir="column"
                flexWrap="nowrap"
                overflowY={"auto"}
                pr={5}
                pt={5}
              >
                {auctionBids.map((item, i) => (
                  <Flex
                    key={item + i}
                    alignItems={"center"}
                    justify="space-between"
                    mt={2}
                    mb={4}
                  >
                    <Flex gap={3} alignItems={"center"}>
                      <Avatar
                        src={item?.user_id?.profile_photo?.url}
                        size={["sm", "sm", "sm", "md"]}
                        name={
                          item?.user_id?.first_name +
                          " " +
                          item?.user_id?.last_name
                        }
                      />
                      <div>
                        <Text fontSize={"xs"}>
                          {item?.user_id?.firstname} {item?.user_id?.lastname}
                        </Text>
                        <Text color="#6B6968" fontSize={"xs"}>
                          {dayjs(auction?.updatedAt).format(
                            "DD/MM/YYYY, HH:MM A"
                          )}
                        </Text>
                      </div>
                    </Flex>

                    <Tag
                      variant={"outline"}
                      size={["sm", "sm", "sm", "md"]}
                      borderRadius={30}
                    >
                      {item?.quantity || 0} Units
                    </Tag>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={["xs", "xs", "xs", "sm"]}
                    >
                      ${(item?.total_amount || 0)?.toLocaleString()}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box as="section" py={10}>
          <Flex justify={"space-between"} align="center">
            <Text fontSize="xl" fontWeight={"semibold"}>
              Explore other artworks
            </Text>

            <NextLink href="/explore" passHref>
              <Link color="#A6A6A6">See all</Link>
            </NextLink>
          </Flex>
          <Row py={10}>
            {liveAuctions?.slice(0, 8)?.map((item) => (
              <Box as={Col} key={item?._id} xs={12} md={6} lg={4} mb="3rem">
                <Product link="/auction" item={item} />
              </Box>
            ))}
          </Row>
        </Box>
      </Box>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <Footer />
    </div>
  );
}
