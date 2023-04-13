import * as React from 'react';
import { Avatar, Box, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import PageLayout from 'layouts/PageLayout';
import useApi from 'hooks/useApi';
import CMSService, { CMSArtist as Artist } from 'services/CMS.service';
import { ResponseDataModel } from 'services/API.service';
import HowToParticipate from 'components/HowToParticipate';

const MonthlyAuctionsPage: React.FC = () => {
    const { isLoaded, data: artists = [] } = useApi<Array<ResponseDataModel<Artist>>>(
        CMSService.getArtistsOnAuction
    )

    return (
        <PageLayout image={
            <NextLink href="/monthly-auctions-dec-2022-brochure" passHref>
                <Link>
                    <Image src="/mocona-slider.jpg" alt="Auctions brochure" />
                </Link>
            </NextLink>
        }>

            <Box as="section" className="page-container" mb={20}>
                <Text as="p" mb={6} textAlign="justify">
                    The December edition of the ARTSPLIT Monthly Auctions promises to deliver on a two-for-one deal;
                    spotlight Ghanaian art and introduce ARTSPLIT to the Gold Coast. Featuring works by leading
                    Ghanaian artists bridging generations of artistic excellence, the works presented, which include
                    works by Ablade Glover, Kofi Agorsor, and Isshaq Ismail, divulge an exploratory voyage into artistic skill,
                    medium, and narrative across generations.
                </Text>

                <Text as="p" textAlign="justify">
                    These artists create works that evoke emotions and canonise womanhood as an ode to the motherland,
                    referencing sociocultural norms and features in their works and bridging generations of artistic mastery and skill.
                    These artists use their art to express resilience, inspire reflection, and motivate change in the face of ongoing
                    national and international challenges. Their works open new possibilities for experimenting with stylised figuration,
                    considered abstraction, and vivid expressions.
                </Text>

                {
                    (isLoaded && artists?.length) ? (
                        <SimpleGrid columns={[1, 1, 1, 3, 3]} gap={8} mt={[12, 24]}>
                            {
                                artists.slice(0, 3).map((artist) => (
                                    <NextLink
                                        key={`artist-on-auction-${artist.id}`}
                                        href={`/discover/${artist.id}`}
                                    >
                                        <Box
                                            px={8} py={12}
                                            position="relative"
                                            rounded="3xl"
                                            shadow="xl"
                                            textAlign="center"
                                            borderWidth={1}
                                            cursor="pointer"
                                        >
                                            <Avatar
                                                size="lg"
                                                name={artist.attributes.artist_name}
                                                src={artist.attributes.artist_photo?.data.attributes.url}
                                                mb={6}
                                                borderWidth={2}
                                                borderColor="primary"
                                            />

                                            <Heading fontSize="xl" color="primary" fontWeight={500} mb={3}>
                                                { artist.attributes.artist_name }
                                            </Heading>

                                            <Text fontSize="sm">
                                                { artist.attributes.excerpt }
                                            </Text>
                                        </Box>
                                    </NextLink>
                                ))
                            }
                        </SimpleGrid>
                    ) : <></>
                }
            </Box>

            <HowToParticipate />
        </PageLayout>
    )
}

export default MonthlyAuctionsPage