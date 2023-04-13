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
    Tag,
    Skeleton,
    SkeletonText,
    SkeletonCircle
} from '@chakra-ui/react';
import ArtworkCarousel from './ArtworkCarousel';
import { formatPrice } from 'utils/formatters';
import useApi from 'hooks/useApi';
import ListingService from 'services/Listing.service';
import Seo from './Seo';


const OpenMarketDetailsView: NextPage<{ id: string }> = ({ id }) => {
    const { isLoaded, data: art } = useApi(() => ListingService.get(id), [id])

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

                        <Flex gap={2} mb={10} alignItems={"center"}>
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

                        <Box>
                            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                                <Heading fontSize="2xl">
                                    Art Info
                                </Heading>

                                <Skeleton isLoaded={isLoaded} rounded="full">
                                    <Tag variant="solid" size="lg" bgColor="black" px={4} py={3} rounded="full">
                                        { formatPrice(art?.price) }
                                    </Tag>
                                </Skeleton>
                            </Flex>

                            <Box className="with-special-scrollbar" maxHeight="280px">
                                <SkeletonText isLoaded={isLoaded} noOfLines={8}>
                                    <Text fontSize="md" lineHeight={2} textAlign="justify" color="dark.light">
                                        { art?.story }
                                    </Text>
                                </SkeletonText>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default OpenMarketDetailsView