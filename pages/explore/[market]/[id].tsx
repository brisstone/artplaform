import * as React from 'react';
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Box, Link, Flex, Heading, IconButton } from '@chakra-ui/react';
import Seo from 'components/Seo';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AuctionDetailsView from 'components/AuctionDetailsView';
import TradeDetailsView from 'components/TradeDetailsView';
import { ArrowBackIcon } from '@chakra-ui/icons';
import OpenMarketDetailsView from 'components/OpenMarketDetailsView';
import Artwork from 'components/Artwork';
import { Col, Row } from 'react-bootstrap';
import useApi from 'hooks/useApi';
import AuctionService from 'services/Auction.service';
import TradeService from 'services/Trade.service';
import ListingService from 'services/Listing.service';


const ViewMarketEntityPage: React.FC = () => {
    const Router = useRouter();
    const market = React.useMemo(
      () => Router.query.market as string ?? '',
      [Router.query.market]
    );
    const id = Router.query.id as string

    const fetcher = {
        auction: AuctionService.getLiveAuctions,
        trade: TradeService.getTradeables,
        'open-market': ListingService.getSingleListing
    }[market] ?? AuctionService.getLiveAuctions
    const { isLoaded, data: artworks } = useApi<Array<any>>(fetcher)

    const DetailsView = React.useMemo(() => ({
        auction: <AuctionDetailsView id={id} />,
        trade: <TradeDetailsView id={id} />,
        'open-market': <OpenMarketDetailsView id={id} />,
    }[market]), [market, id])

    return (
        <Box as="div">
            <Header />

            <Box
                as="main"
                maxWidth={1360}
                mt={[4, 4, 4, 12]}
                mx="auto"
                px={['1.2rem', '1.2rem', '1.2rem', '10rem']}
            >
                <Flex gap={2} mb={8} alignItems="center">
                    <IconButton
                        variant="outline"
                        onClick={Router.back}
                        color="dark"
                        borderColor="gray"
                        aria-label="Back button"
                    >
                        <ArrowBackIcon fontSize={20} />
                    </IconButton>

                    <Heading size="md" fontWeight={400} textTransform="capitalize" color="dark">
                        { market.replace('-', ' ') }
                    </Heading>
                </Flex>

                { DetailsView }

                {
                    isLoaded && (
                        <Box my={24}>
                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                mb={3}
                            >
                                <Heading fontWeight={500} fontSize={['2xl', '2xl', '2xl', '3xl']}>
                                    Explore other artworks
                                </Heading>

                                <Box display={['none', 'none', 'none', 'initial']}>
                                    <NextLink href={`/explore/${market}`} passHref>
                                        <Link>
                                            See all
                                        </Link>
                                    </NextLink>
                                </Box>
                            </Flex>

                            <Box as={Row} py={[5, 5, 10]}>
                                {
                                    (artworks ?? []).map((item, i) => (
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
                        </Box>
                    )
                }
            </Box>

            <Footer />
        </Box>
    )
}

export default ViewMarketEntityPage