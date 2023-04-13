import { useEffect, useState, useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router';
import Footer from "components/Footer";
import Header from "components/Header";
import { Row, Col } from "react-bootstrap";
import {
  Flex,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  Select,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
  Button,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import PriceRangeSlider from "components/PriceRangeSlider";
// import { setLiveAuctions, setLiveTrades } from "reducers/appReducer";
import { useAppDispatch, useAppSelector } from "utils/redux";
// import { convertToArray, convertToList } from "utils/convertDataStructures";
import { YEARS } from "Constants";
import Seo from "components/Seo";
import PageHeader from "components/PageHeader";
import AuctionService from "services/Auction.service";
import TradeService from "services/Trade.service";
import ListingService from "services/Listing.service";
import ArtistService, { Artist } from "services/Artist.service";
import Artwork from "components/Artwork";
import ArtworkService, { ArtworkCategory } from "services/Artwork.service";
import useApi from "hooks/useApi";
import { formatPrice } from "utils/formatters";

const ITEMS_PER_PAGE = 12;

const Explore: NextPage = () => {
  const Router = useRouter();
  const market = useMemo(
    () => Router.query.market as string ?? '',
    [Router.query.market]
  );
  // const Dispatch = useAppDispatch();
  // const state = useAppSelector((state) => state.app);
  // const liveAuctions = convertToArray(state.liveAuctions);
  // const liveTrades = convertToArray(state.liveTrades);
  const [liveAuctions, setLiveAuctions] = useState<any[]>([]);
  const [liveTrades, setLiveTrades] = useState<any[]>([]);
  const [openMarket, setOpenMarket] = useState<any[]>([]);
  const [loading, setLoading] = useState(true)
  const { data: artists } = useApi<Artist[]>(
    ArtistService.getAll, [], []
  );
  const { data: categories } = useApi<ArtworkCategory[]>(
    ArtworkService.getCategories, [], []
  );
  const [tradePage, setTradePage] = useState(1);
  const [auctionPage, setAuctionPage] = useState(1);
  const [marketPage, setMarketPage] = useState(1);

  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState(0);
  const [artist, setArtist] = useState("");
  const tabs = useMemo(() => [
    { id: 'auction', label: 'Auction' },
    { id: 'trade', label: 'Trade' },
    { id: 'open-market', label: 'Open Market' }
  ], [])
  const [tabIndex, setTabIndex] = useState<number>();

  useEffect(() => {
    // Select tab based on "market" route param.
    const index = tabs.findIndex(({ id }) => id === market)
    if (index === -1) Router.replace('/explore/auction')
    setTabIndex(index)
  }, [tabs, market, Router])

  const visitMarket = (index: number) => {
    Router.push(`/explore/${tabs[index].id}`)
  }

  const updatePrice = (e: any) => setPrice(e.target.value)

  useEffect(() => {
    setLoading(true)
    const params: Record<string, any> = {};
    if (artist) params.artist_id = artist
    if (category) params.art_category_id = category
    if (price) params.upperbound_price = price
    if (year) params.year = year

    switch (market) {
      case 'auction':
        AuctionService.getLiveAuctions(params).then(({ data }) => {
          // Dispatch(setLiveAuctions(convertToList(data ?? [])));
          setLiveAuctions(data ?? []);
          setLoading(false)
        })
        break;
      case 'trade':
        TradeService.getTradeables(params).then(({ data }) => {
          // Dispatch(setLiveTrades(convertToList(data ?? [])));
          setLiveTrades(data ?? []);
          setLoading(false)
        })
        break;
      case 'open-market':
        ListingService.getSingleListing(params).then(({ data }) => {
          setOpenMarket(data ?? []);
          setLoading(false)
        })
        break;
      default:
        break;
    }
  }, [
    category, year, price, artist, market
  ]);

  const clearFilters = () => {
    setCategory('');
    setPrice(0);
    setArtist('');
    setYear('');
  };

  return (
    <Box as="div">
      <Seo title="Explore" description="Bid on Art by Africa's Leading Artists" />

      <Header />

      <Box as="main" maxWidth={1420} mx="auto" px={['1.2rem', '1.2rem', '1.2rem', '10rem']}>
        <PageHeader title={
          <Text>
            Bid on Art by<br/>Africa's Leading Artists 
          </Text>
        } constrained={false}>
          <Stack>
            <Text>
              You can bid on works you like at ARTSPLIT auctions. We connect 'collectors' like you
              to art by leading artists from around the world, with new auctions opening monthly.
              The best part is that you can build your collection at your own pace, one split at a time,
              thanks to the flexibility of co-ownership.
            </Text>

            <Text>
              We also feature African artworks (Modern & Contemporary) as well as a diverse selection
              of music from various genres (yes, Afrobeats), allowing you to find works by your favourite
              artists as well as discover new ones all in one place.  
            </Text>
          </Stack>
        </PageHeader>

        <Box borderBottomWidth={1} borderStyle="solid" borderColor="gray" mb={10} />

        <Box as="section">
          <Tabs variant="soft-rounded" index={tabIndex} onChange={visitMarket}>
            <Flex justify={"space-between"} mb={10}>
              <TabList
                border="1px solid"
                borderColor="gray.100"
                rounded="full"
                width={['full', 'full', 'auto']}
              >
                <Tab px={6}>Auction</Tab>
                <Tab px={6}>Trade</Tab>
                <Tab px={6}>Open Market</Tab>
              </TabList>

              {
                (category || price > 0 || year || artist) && (
                  <Tag
                    display={['none', 'none', 'flex']}
                    size="md"
                    variant="solid"
                    borderRadius="lg"
                    bgColor="primary"
                    color="white"
                    rounded="full"
                    px={5}
                  >
                    <TagLabel mr={1}>
                      Filter
                    </TagLabel>

                    <TagCloseButton onClick={clearFilters} />
                  </Tag>
                )
              }
            </Flex>

            <Row>
              <Box as={Col} mb={[2, 0]} xs={12} sm={3}>
                <div>
                  <Text color="#A6A6A6" mb={2}>Category</Text>
                  <Select
                    placeholder="Select option"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    height="56px"
                  >
                    {
                      categories?.map((category) => (
                        <option
                          key={`artwork-category-${category._id}`}
                          value={category._id}
                        >
                          { category.name }
                        </option>
                      ))
                    }
                  </Select>
                </div>
              </Box>

              <Box as={Col} mb={[2, 0]} xs={12} sm={3}>
                <div>
                  <Text color="#A6A6A6" mb={2}>Year</Text>
                  <Select
                    placeholder="Select option"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    height="56px"
                  >
                    {YEARS.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Select>
                </div>
              </Box>

              <Box as={Col} mb={[2, 0]} xs={12} sm={3}>
                <div>
                  <Text color="#A6A6A6" mb={2}>Artist</Text>
                  <Select
                    placeholder="Select option"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    height="56px"
                  >
                    {artists?.map((artist) => (
                      <option key={`artist-${artist._id}`} value={artist?._id}>
                        { artist.name }
                      </option>
                    ))}
                  </Select>
                </div>
              </Box>

              <Box as={Col} mb={[2, 0]} xs={12} sm={3}>
                <Text color="#A6A6A6" mb={2}>Price Range</Text>
                <PriceRangeSlider
                  value={price}
                  onChange={updatePrice}
                  format={formatPrice}
                />

                <Flex justify="space-between" fontWeight={500}>
                  <span>$0</span>
                  <span>$10,000</span>
                </Flex>
              </Box>
            </Row>

            {
              loading ? (
                <Box>
                  <Box as={Row} py={10}>
                    {
                      new Array(6).fill('skeleton').map((_, i) => (
                        <Col
                          key={`artwork-${_}-${i}`}
                          xs={12}
                          md={6}
                          lg={4}
                          style={{ marginBottom: "3rem" }}
                        >
                          <Skeleton rounded="3xl" h={420} mb={4} />
                          <SkeletonText noOfLines={2} />
                          <Box borderBottomWidth={1} borderStyle="dashed" my={4} />
                          <Flex justifyContent="space-between">
                            <Flex alignItems="center">
                              <SkeletonCircle mr={2} />
                              <SkeletonText noOfLines={1} w={20} />
                            </Flex>

                            <Skeleton rounded="full" w={32} />
                          </Flex>
                        </Col>
                      ))
                    }
                  </Box>
                </Box>
              ) : (
                <TabPanels>
                  <TabPanel p={0}>
                    <Box as={Row} py={10}>
                      {
                        liveAuctions.slice(0, auctionPage * ITEMS_PER_PAGE)
                          .map((item, i) => (
                            <Col
                              key={item?._id + i}
                              xs={12}
                              md={6}
                              lg={4}
                              style={{ marginBottom: "3rem" }}
                            >
                              <Artwork market={market} data={item} />
                            </Col>
                          ))
                      }
                    </Box>

                    <Flex>
                      <Button
                        mx="auto"
                        variant="outline"
                        color="black"
                        borderColor="gray"
                        onClick={() => setAuctionPage(auctionPage + 1)}
                      >
                        See more
                      </Button>
                    </Flex>
                  </TabPanel>

                  <TabPanel p={0}>
                    <Box as={Row} py={10}>
                      {
                        liveTrades?.slice(0, tradePage * ITEMS_PER_PAGE)
                        .map((item, i) => (
                          <Col
                            key={item?._id + item?.artworkId + i}
                            xs={12}
                            md={6}
                            lg={4}
                            style={{ marginBottom: "3rem" }}
                          >
                            <Artwork market={market} data={item} />
                          </Col>
                        ))
                      }
                    </Box>

                    <Flex>
                      <Button
                        mx="auto"
                        variant={"outline"}
                        color="black"
                        borderColor="gray"
                        onClick={() => setTradePage(tradePage + 1)}
                      >
                        See more
                      </Button>
                    </Flex>
                  </TabPanel>

                  <TabPanel p={0}>
                    <Box as={Row} py={10}>
                      {openMarket
                        ?.slice(0, tradePage * ITEMS_PER_PAGE)
                        .map((item, i) => (
                          <Col
                            key={item?._id + item?.artworkId + i}
                            xs={12}
                            md={6}
                            lg={4}
                            style={{ marginBottom: "3rem" }}
                          >
                            <Artwork market={market} data={item} />
                          </Col>
                        ))}
                    </Box>

                    <Flex>
                      <Button
                        mx="auto"
                        variant="outline"
                        color="black"
                        borderColor="gray"
                        onClick={() => setMarketPage(marketPage + 1)}
                      >
                        See more
                      </Button>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              )
            }
          </Tabs>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Explore;
