import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";
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
import { Row, Col } from "react-bootstrap";
import NextLink from "next/link";
import { FaCircle } from "react-icons/fa";
import ProductSlider from "../../components/ProductSlider";
import OpenMarketItem from "../../components/OpenMarketItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Lightbox from "react-image-lightbox";
import Seo from "components/Seo";
import "react-image-lightbox/style.css";

const OpenMarket: NextPage = () => {
  const router = useRouter();
  const { listing_id } = router?.query;

  const [item, setItem] = useState<any>({});
  const [listings, setListings] = useState<any[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = (item?.image_gallery || []).map((i: any) => i?.url);

  useEffect(() => {
    axios
      .get(
        `https://stapi.artsplit.com/v1/listing/listing_details?listing_id=${listing_id}`
      )
      .then((resp) => {
        setItem(resp.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://stapi.artsplit.com/v1/listing/single_listings")
      .then((resp) => {
        console.log("listing", resp.data.data);

        setListings(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listing_id]);

  return (
    <div>
      <Seo title="Open Market" />
      <Header />

      <Box as="main" py={10} className="page-container">
        <Flex align={"center"} gap={2}>
          <FaCircle style={{ color: "#BF702A" }} />
          <Heading as={"h1"} fontSize="lg" color="#6B6968">
            Open Market
          </Heading>
        </Flex>
        <section>
          <Stack direction={["column", "row"]} columnGap={20} py={10}>
            <Box flex={1}>
              <ProductSlider images={item?.image_gallery || []} />
            </Box>
            <Box flex={1}>
              <Box pb={2} mb={2}>
                <Heading fontSize={"2xl"} fontWeight="semibold">
                  {item?.name}
                </Heading>
              </Box>
              <Flex alignItems={"center"} gap={3}>
                <Avatar size={"sm"} name={item?.artist_id?.name} />
                <Text color="#6B6968">
                  {item?.artist_id?.name},{" "}
                  {dayjs(item?.creation_year).format("YYYY")}
                </Text>
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
                    ${item?.value?.toLocaleString()}
                  </Button>
                </Flex>
                <Box overflowY="scroll" h={["60", "60", "60", "80"]} pr={5}>
                  <Text as="p" mb={4}>
                    {item?.story}
                  </Text>
                </Box>
              </Box>
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

          <Row py={10}>
            {listings?.map((item, i) => (
              <Box
                as={Col}
                key={item?._id + item?.artworkId + i}
                xs={12}
                md={6}
                lg={4}
                mb="3rem"
              >
                <OpenMarketItem link="/open-market" item={item} />
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
};
export default OpenMarket;
