import * as React from 'react';
import type { NextPage } from "next";
import {
    Box,
    Heading,
    SimpleGrid,
    Flex,
    Avatar,
    Text,
    Center,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
    Tag,
    HStack
} from '@chakra-ui/react';
import ArtworkCarousel from './ArtworkCarousel';
import CountdownTimer from './CountdownTimer';
import useApi from 'hooks/useApi';
import AuctionService from 'services/Auction.service';
import { formatNumber, formatPrice } from 'utils/formatters';
import dayjs from 'dayjs';
import Seo from './Seo';
import MusicPlaylist from './MusicPlaylist';


const AuctionDetailsView: NextPage<{ id: string }> = ({ id }) => {
    const { isLoaded, data: art } = useApi(() => AuctionService.get(id), [id])
    const isMusic = React.useMemo(() => art?.asset_type === 'music', [art])

    return (
        <>
            <Seo
                title={art.itemName ?? 'View Auction'}
                description={art.artStory ?? ''}
            />

            <Box as="section">
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={[4, 4, 20]} mb={[8, 8, 8, 16]}>
                    <Skeleton isLoaded={isLoaded}>
                        <ArtworkCarousel artworks={art?.artworkImageGallery ?? []}>
                            <Center pos="absolute" left={0} right={0} bottom={4}>
                                <CountdownTimer
                                    time={art?.endTime}
                                    p={3}
                                    pr={4}
                                />
                            </Center>
                        </ArtworkCarousel>
                    </Skeleton>

                    <Box py={2}>
                        <Skeleton isLoaded={isLoaded}>
                            <Heading fontWeight={500} mb={2}>
                                { art?.itemName }
                            </Heading>
                        </Skeleton>

                        <HStack align="flex-start" justify="space-between">
                            <Flex gap={2} mb={8} alignItems={"center"}>
                                <SkeletonCircle isLoaded={isLoaded}>
                                    <Avatar
                                        size={"sm"}
                                        name={art?.artistName}
                                        src={art?.artistImage}
                                        border="2px solid"
                                        style={{ borderColor: 'var(--chakra-colors-primary)' }}
                                    />
                                </SkeletonCircle>

                                <SkeletonText isLoaded={isLoaded}>
                                    <Text color="#6B6968" fontSize={[12, 12, 12, 14]}>
                                        { art?.artistName }, {" "}
                                        {new Date(art?.creationYear).getFullYear()}
                                    </Text>
                                </SkeletonText>
                            </Flex>

                            {
                                art.tradeMode === 'ASSET' && (
                                    <Tag variant="outline" size={['sm', 'md']} rounded="full" px={3} py={2}>
                                        { formatNumber(art?.totalUnits) } Splits
                                    </Tag>
                                )
                            }
                        </HStack>

                        {
                            !!art?.music_gallery?.length && (
                                <MusicPlaylist gallery={art.music_gallery} />
                            )
                        }

                        <SimpleGrid columns={2} rowGap={4} spacing={4}>
                            <Box p={4} rounded="xl" border="1px solid" borderColor="gray">
                                <Text fontSize="sm" color="dark">Starting Bid</Text>

                                <SkeletonText isLoaded={isLoaded}>
                                    <Text fontSize="xl">
                                        { formatPrice(art?.minimumBidAmount) }
                                    </Text>
                                </SkeletonText>
                            </Box>

                            <Box p={4} rounded="xl" bg="black" color="white">
                                <Text fontSize="sm">Highest Bid</Text>
                                <SkeletonText isLoaded={isLoaded}>
                                    <Text fontSize="xl" fontWeight={500}>
                                        {
                                            formatPrice((
                                                art?.highestBidder || art?.minimumBidAmount
                                            ))
                                        }
                                    </Text>
                                </SkeletonText>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 1, 2]} spacing={[10, 10, 10, 20]}>
                    <Box>
                        <Heading fontSize="2xl" mb={2}>
                            Art Info
                        </Heading>

                        <SkeletonText isLoaded={isLoaded} noOfLines={8}>
                            <Box className="with-special-scrollbar" pt={2} maxHeight={420}>
                                <Text fontSize="md" lineHeight={2} textAlign="justify" color="dark.light">
                                    { art?.artStory }    
                                </Text>
                            </Box>
                        </SkeletonText>
                    </Box>

                    <Box>
                        <Heading fontSize="2xl" pb={5} borderBottom="1px solid" borderColor="gray.200">
                            Live Bids
                        </Heading>

                        <Stack className="with-special-scrollbar" maxHeight={400} pt={4}>
                            {
                                art?.bids?.length
                                ? art?.bids.map((bid: any) => <Bid key={bid.bidId} bid={bid} />)
                                : (
                                    <Center>
                                        <Text color="gray.500" fontSize="sm">
                                            No bids yet.
                                        </Text>
                                    </Center>
                                )
                            }
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}

const Bid: React.FC<{ bid: any }> = ({ bid }) => {
    const name = `${bid.bidderFirstName} ${bid.bidderLastname}`

    return (
        <Flex justifyContent="space-between" alignItems="center" my={1}>
            <Flex gap={[3, 4]}>
                <Avatar src={bid.bidderPhoto} name={name} size={['sm', 'md']} />

                <Flex direction="column" justifyItems="center" alignItems="flex-start">
                    <Text fontSize={['sm', 'md']} fontWeight={500}>
                        { name }
                    </Text>
                    <Text fontSize={['10px', 'sm']} color="dark">
                        { dayjs(bid.bidDate).format('DD/MM/YYYY') }
                        { ', ' }
                        { dayjs(bid.bidDate).format('hh:mm A') }
                    </Text>
                </Flex>
            </Flex>

            <Tag variant="outline" size={['sm', 'md']} rounded="full" px={3} py={2}>
                { formatNumber(bid.bidQuantity) } Unit{ bid.bidQuantity > 1 && 's' }
            </Tag>

            <Text fontWeight="bold" fontSize={['sm', 'md']}>
                { formatPrice(bid.bidAmount * bid.bidQuantity) }
            </Text>
        </Flex>
    )
}

export default AuctionDetailsView