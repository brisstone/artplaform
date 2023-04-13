import React from "react";
import { AspectRatio, Box, Button, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { formatNumber, formatPrice } from "utils/formatters";
import useAppDownloader from "hooks/useAppDownloader";

interface AuctionListingProps {
    artwork: Record<string, any>;
    reverse?: boolean;
}

const ArtworkAuctionListing: React.FC<AuctionListingProps> = (props) => {
    const {
        artwork,
        reverse
    } = props
    const { openApp } = useAppDownloader()

    const listingType = React.useMemo(() => {
        const keys = Object.keys(artwork)
        if (keys.includes('lease') && keys.includes('split'))
            return 'Split and Lease'
        return keys.at(1) ?? 'N/A'
    }, [artwork])

    const isOneTimeAuction = listingType === 'one-time'

    return (
        <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            w="full"
            gap={[8, 16, 24]}
            alignItems={{ base: 'flex-start', '2xl': 'center' }}
        >
            <Box
                order={{ base: 1, xl: reverse ? 2 : 1 }}
                rounded="md"
                overflow="hidden"
            >
                <Image
                    src={artwork.artwork?.art_image}
                    alt={`Image for ${artwork._id}`}
                />
            </Box>
            
            <Box order={[2, reverse ? 1 : 2]} gap={2.5} py={[0, 0, 2]}>
                <Box mb={6}>
                    <Text color="primary">
                        ARTIST
                    </Text>
                    <Heading fontWeight={500}>
                        { artwork.artwork?.artist_id.name }
                    </Heading>
                </Box>

                <Box mb={6}>
                    <Text color="primary">
                        TITLE
                    </Text>
                    <Heading fontWeight={500}>
                        { artwork.artwork?.name }
                    </Heading>
                </Box>

                <Text
                    textAlign="justify"
                    fontSize="md"
                    lineHeight={2}
                    mt={6}
                >
                    { artwork.story }
                </Text>

                <Divider my={8} borderColor="gray.300" />

                <VStack gap={[1, 1, 3]} align="flex-start" mb={[4, 8, 12]}>
                    <LabelledData label="Year">
                        { new Date(artwork.artwork.creation_year).getFullYear() }
                    </LabelledData>

                    <LabelledData label="Medium">
                        { artwork.medium }
                    </LabelledData>

                    <LabelledData label="Size">
                        { artwork.artwork.dimensions.length_in_cm }cm
                        { ' x ' }
                        { artwork.artwork.dimensions.width_in_cm }cm
                        { ' x ' }
                        { artwork.artwork.dimensions.depth_in_cm }cm
                    </LabelledData>

                    <LabelledData label="Starting Price">
                        {
                            formatPrice(artwork[
                                isOneTimeAuction ? 'one-time' : 'split'
                            ].minimum_bid_amount)
                        }
                    </LabelledData>

                    {
                        !isOneTimeAuction && (
                            <LabelledData label="Splits Available">
                                { formatNumber(100000) } Units
                            </LabelledData>
                        )
                    }

                    <LabelledData label="Listing Type">
                        { listingType } Auction
                    </LabelledData>
                </VStack>

                <Button onClick={() => openApp(artwork.screen)} size="lg" rounded="lg">
                    Buy Now
                </Button>
            </Box>
        </SimpleGrid>
    )
}

const LabelledData: React.FC<{
    label: string;
    children: React.ReactNode;
}> = ({ label, children }) => {
    return (
        <Flex gap={2}>
            <Text>
                {`${label}:`}
            </Text>
            <Text fontWeight={500} textTransform="capitalize">
                { children ?? 'N/A' }
            </Text>
        </Flex>
    )
}

export default ArtworkAuctionListing