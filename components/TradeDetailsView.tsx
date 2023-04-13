import * as React from 'react';
import type { NextPage } from "next";
import {
    Box,
    Heading,
    SimpleGrid,
    Flex,
    Avatar,
    Text,
    TabList,
    Tab,
    Tabs,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Skeleton,
    SkeletonCircle,
    SkeletonText
} from '@chakra-ui/react';
import ArtworkCarousel from './ArtworkCarousel';
import { formatNumber, formatPrice } from 'utils/formatters';
import useApi from 'hooks/useApi';
import ListingService from 'services/Listing.service';
import TradeService from 'services/Trade.service';
import PriceGraph from './PriceGraph';
import Seo from './Seo';
import MusicPlaylist from './MusicPlaylist';


const TradeDetailsView: NextPage<{ id: string }> = ({ id }) => {
    const { isLoaded, data: art } = useApi(() => ListingService.get(id), [id])
    const {
        isLoaded: historyIsLoaded,
        data: priceHistory = []
    } = useApi<any[]>(() => TradeService.getPriceHistory(id), [id])

    const bids = [
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 },
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 },
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 },
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 },
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 },
        { ask: 20, units: 3, bids: 1200, bidUnits: 6 }
    ]

    return (
        <>
            <Seo
                title={art.name ?? 'View Auction'}
                description={art.story ?? ''}
            />

            <Box as="section">
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={20} mb={16}>
                    <Skeleton isLoaded={isLoaded}>
                        <ArtworkCarousel artworks={art?.image_gallery ?? []} />
                    </Skeleton>

                    <Box py={2}>
                        <Skeleton isLoaded={isLoaded}>
                            <Heading fontWeight={500} mb={2}>
                                { art?.name }
                            </Heading>
                        </Skeleton>

                        <Flex gap={2} mb={12} alignItems={"center"}>
                            <SkeletonCircle isLoaded={isLoaded}>
                                <Avatar
                                    size={"sm"}
                                    name={art?.artist_id?.name}
                                    src={art?.artist_id?.profile_photo?.url}
                                    border="2px solid"
                                    style={{ borderColor: 'var(--chakra-colors-primary)' }}
                                />
                            </SkeletonCircle>
                            
                            <SkeletonText isLoaded={isLoaded} noOfLines={1}>
                                <Text color="#6B6968" fontSize={[12, 12, 12, 14]}>
                                    { art?.artist_id?.name }, {" "}
                                    { new Date(art?.creation_year).getFullYear() }
                                </Text>
                            </SkeletonText>
                        </Flex>

                        { historyIsLoaded && <PriceGraph data={priceHistory} /> }

                        {/* <Tabs variant="soft-rounded">
                            <TabList tabIndex={4} rounded="full" border="1px solid" borderColor="gray.100">
                                <Tab>24h</Tab>
                                <Tab>1 Week</Tab>
                                <Tab>1 Month</Tab>
                                <Tab>1 Year</Tab>
                                <Tab>All</Tab>
                            </TabList>
                        </Tabs> */}
                    </Box>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 1, 2]} spacing={20}>
                    <Box>
                        <Heading fontSize="2xl" mb={2}>
                            Art Info
                        </Heading>

                        <SkeletonText isLoaded={isLoaded} noOfLines={24}>
                            <Box
                                className="with-special-scrollbar"
                                pt={2}
                                maxHeight={420 + (art?.music_gallery?.length ? 170 : 0)}
                            >
                                <Text fontSize="md" lineHeight={2} textAlign="justify" color="dark.light">
                                    { art?.story }    
                                </Text>
                            </Box>
                        </SkeletonText>
                    </Box>

                    <Box>
                        <SimpleGrid columns={3} mb={3} borderWidth={1} borderRadius="xl">
                            <Box py={4} pl={6}>
                                <Text fontSize={"xs"}>Starting Bid</Text>

                                <SkeletonText isLoaded={isLoaded}>
                                    <Text color="black" fontWeight={"semibold"}>
                                        { formatPrice(art?.price) }
                                    </Text>
                                </SkeletonText>
                            </Box>

                            <Box py={4} pl={6} borderLeftWidth={1} borderRightWidth={1}>
                                <Text fontSize={"xs"}>Available Unit(s)</Text>

                                <SkeletonText isLoaded={isLoaded}>
                                    <Text color="black" fontWeight={"semibold"}>
                                        { formatNumber(art?.total_units - art?.subscribed_units) }
                                    </Text>
                                </SkeletonText>
                            </Box>

                            <Box py={4} pl={6}>
                                <Text fontSize={"xs"}>Reference Price</Text>

                                <SkeletonText isLoaded={isLoaded}>
                                    <Text color="black" fontWeight={"semibold"}>
                                        { formatPrice(art?.value ?? 0) }
                                    </Text>
                                </SkeletonText>
                            </Box>
                        </SimpleGrid>

                        <Box>
                            <TableContainer
                                borderWidth={1}
                                rounded="xl"
                                maxHeight="214px"
                                overflowY="auto"
                                mb={8}
                                className="with-special-scrollbar"
                            >
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th py={4}>Asks</Th>
                                            <Th py={4}>Units</Th>
                                            <Th py={4}>Bids</Th>
                                            <Th py={4}>Units</Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {
                                            isLoaded
                                            ? bids.map((bid, i) => (
                                                <Tr key={`bid-${i}`} fontSize="sm">
                                                    <Td py={2.5} color="red.500">
                                                        { formatPrice(bid.ask) }
                                                    </Td>
                                                    <Td py={2.5}>
                                                        { bid.units }
                                                    </Td>
                                                    <Td py={2.5} color="green.500">
                                                        { formatPrice(bid.bids) }
                                                    </Td>
                                                    <Td py={2.5}>
                                                        { bid.bidUnits }
                                                    </Td>
                                                </Tr>
                                            ))
                                            : (
                                                <Tr>
                                                    <Td><Skeleton w={4} /></Td>
                                                    <Td><Skeleton w={4} /></Td>
                                                    <Td><Skeleton w={4} /></Td>
                                                    <Td><Skeleton w={4} /></Td>
                                                </Tr>
                                            )
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>

                            {
                                !!art?.music_gallery?.length && (
                                    <MusicPlaylist gallery={art.music_gallery} />
                                )
                            }
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        
        </>
    )
}

export default TradeDetailsView