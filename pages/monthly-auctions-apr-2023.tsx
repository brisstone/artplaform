import * as React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Box, Button, HStack, Heading, Image, Link, SimpleGrid, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
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
        '641d861a6b60946fbbac8168': 's92X', // Okpu Eze
        '641c067335efd6863c429d99': 'vBeh', // Reuben Ugbine
    }

    const staticArtworkData: Record<string, any> = {
        '641d861a6b60946fbbac8168': {
            story: "Eze's Untitled 1982 is a departure from his typical abstract paintings, featuring a close-up view of a minstrel group in performance. His sculptural aesthetic is evident in the demonstrative postures and motion of the figures, creating a harmonious composition that balances colours and geometry. The warm and cool tones depict the interaction of imaginative and physical realms, resulting in a fiery concentric formation of geometric decibels. ",
            medium: 'Oil on Board'
        },
        '641c067335efd6863c429d99': {
            story: "Ugbine's Untitled 2012 features a female figure with looped arms resembling flared butterfly wings. The minimalist approach allows the essential beauty of the stylised anatomy to emerge, depicting the protagonist's painful loads of existence with triumphant gestures, reflecting the resilience of his nation's people in turbulent times. The tragic, neckless head suggests a stricken profile, yet the figure's graceful elegance and soaring spirit remain undiminished.",
            medium: 'Sculpture (Ebony Wood)'
        }
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
                    screen: screens[artworkId],
                    ...staticArtworkData[artworkId]
                }
            })
            artworksOnAuction.setValue(artworks)
        }
    }, [auctions])

    const learnMore = () => openApp('br1M')

    return (
        <PageLayout title="New Bloom (feat. Okpu Eze & Reuben Ugbine)" image={
            <NextLink href="#" passHref>
                <Link>
                    <Image src="/april-auction-banner.png" alt="Auctions brochure" />
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
                    The ARTSPLIT April Monthly Auction presents a unique opportunity to
                    experience the oeuvres of two exceptional Nigerian artists, Okpu Eze and Reuben Ugbine.
                </Text>

                <Text
                    as="p"
                    fontSize={['sm', 'md', 'lg']}
                    textAlign="justify"
                    lineHeight={8}
                    mb={8}
                >
                    While their approaches to the medium differ, both artists demonstrate
                    mastery of the medium in their ability to convey emotion, movement, and
                    resilience through their respective perspectives on the human form. 
                </Text>

                <Wrap spacing={5}>
                    {
                        [
                            { name: 'Okpu Eze', profile: 'b5Rb' },
                            { name: 'Reuben Ugbine', profile: 'vFwm' },
                        ].map((artist) => (
                            <WrapItem key={artist.name} w={{ base: 'full', md: 'auto' }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    color="primary"
                                    w="full"
                                    px={24}
                                    py={7}
                                    rounded="md"
                                    fontSize={['sm', 'md']}
                                    onClick={() => openApp(artist.profile)}
                                >
                                    Learn More About { artist.name }
                                </Button>
                            </WrapItem>
                        ))
                    }
                </Wrap>

                <Box mt={[16, 24, 32]}>
                    <Heading fontSize={['3xl', '4xl', '5xl']} className="primary-gradient-text">
                        Browse the works
                    </Heading>

                    <VStack gap={[12, 24, 32]} mt={[6, 12, 16, 24]} mb={[12, 24]}>
                        {
                            Object.values(artworksOnAuction.value)?.map((artwork: any, i) => (
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

            <HowToParticipate />
        </PageLayout>
    )
}

export default MonthlyAuctionsPage