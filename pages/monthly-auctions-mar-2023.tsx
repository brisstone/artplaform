import * as React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Box, Button, Heading, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link'
import PageLayout from 'layouts/PageLayout';
import useApi from 'hooks/useApi';
import HowToParticipate from 'components/HowToParticipate';
import AuctionService from 'services/Auction.service';
import { useArray, useStateful } from 'react-hanger';
import ArtworkAuctionListing from 'components/ArtworkAuctionListing';
import useAppDownloader from 'hooks/useAppDownloader';

const MonthlyAuctionsPage: React.FC = () => {
    const router = useRouter()
    const { openApp } = useAppDownloader()
    const artworksOnAuction = useStateful<Record<string, any>>({})

    const {
        isLoaded,
        data: auctions
    } = useApi(AuctionService.getLiveAuctions)

    const screens: Record<string, string> = {
        '63d93ea53195a78e5a8660cd': '8NoE', // One-Time Auction
        '63d8dd153195a7569c7763f7': 'oEfH', // 1992 Split & Lease
        '63d8e608875f400a23e7aee2': 'tNxq', // 1993 Split & Lease
    }

    React.useEffect(() => {
        if (auctions?.length) {
            const artworks: Record<string, any> = {}
            auctions.forEach((auction: any) => {
                const artworkId = auction.artwork_id._id
                artworks[artworkId] = {
                    ...(artworks[artworkId] ?? {}),
                    artwork: auction.artwork_id,
                    [auction.trade_mode_alias.toLowerCase()]: auction,
                    screen: screens[artworkId]
                }
            })
            artworksOnAuction.setValue(artworks)
        }
    }, [auctions])

    const learnMore = () => openApp('br1M')

    return (
        <PageLayout title="Splits of Colour (feat. Rufus Ogundele)" image={
            <NextLink href="/monthly-auctions-dec-2022-brochure" passHref>
                <Link>
                    <Image src="/splits-of-color-rufus-ogundele.png" alt="Auctions brochure" />
                </Link>
            </NextLink>
        }>

            <Box as="section" className="page-container" mb={[20, 32]}>
                <Text
                    as="p"
                    fontSize={['sm', 'md', 'lg']}
                    textAlign="justify"
                    lineHeight={8}
                    mb={8}
                >
                    ARTSPLIT is delighted to present three classic pieces from Rufus Ogundele's
                    illustrious oeuvre in the March Edition of its Monthly Auctions, titled “Splits of Colours”.
                </Text>

                <Text
                    as="p"
                    fontSize={['sm', 'md', 'lg']}
                    textAlign="justify"
                    lineHeight={8}
                    mb={8}
                >
                    The pieces highlight the simplification of colour and form and reveal an individualistic
                    aesthetic that celebrates the traditional Yoruba family, festivals and other cultural activities.
                    His figural forms, depicted with flat areas of colour bounded by thick black lines, are reminiscent
                    of elements found in German expressionism. In applying the principles of European Modernism to
                    traditional themes and motifs, Ogundele joins the company of prominent African artists whose art
                    embodies the progressive accommodation of modernism in contemporary art on the one hand—and on the other,
                    deliberate and rational engagement in the preservation of African tradition.
                </Text>

                <Box>
                    <Button
                        variant="outline"
                        size="lg"
                        color="primary"
                        w="auto"
                        px={24}
                        py={7}
                        rounded="md"
                        fontSize={['sm', 'md']}
                        onClick={learnMore}
                    >
                        Learn More about Rufus Ogundele
                    </Button>
                </Box>

                <Box mt={[16, 24, 32]}>
                    <Heading fontSize={['2xl', '4xl', '5xl']} mb={1}>
                        Works Available for
                    </Heading>
                    <Heading fontSize={['2xl', '4xl', '5xl']} className="primary-gradient-text">
                        Split and Lease Auctions
                    </Heading>

                    <VStack gap={[12, 24, 32]} mt={[6, 12, 16, 24]} mb={[12, 24]}>
                        {
                            Object.values(artworksOnAuction.value)?.slice(1).map((artwork: any, i) => (
                                <ArtworkAuctionListing
                                    key={`artwork-${artwork.artwork?._id}`}
                                    artwork={artwork}
                                    reverse={i % 2 === 1}
                                />
                            ))
                        }
                    </VStack>

                    <Heading fontSize={['2xl', '4xl']} mb={1}>
                        Available for
                    </Heading>
                    <Heading fontSize={['2xl', '4xl']} className="primary-gradient-text">
                        One-Time Auction
                    </Heading>

                    <VStack gap={[6, 12, 24, 32]} mt={[6, 12, 16]}>
                        {
                            Object.values(artworksOnAuction.value)?.slice(0, 1).map((artwork: any, i) => (
                                <ArtworkAuctionListing
                                    key={`artwork-${artwork.artwork?._id}`}
                                    artwork={artwork}
                                    reverse={i % 2 === 1}
                                />
                            ))
                        }
                    </VStack>
                </Box>
            </Box>

            <Image src="/splits-of-color.png" alt="Auctions brochure" mb={16} />

            <HowToParticipate />
        </PageLayout>
    )
}

export default MonthlyAuctionsPage