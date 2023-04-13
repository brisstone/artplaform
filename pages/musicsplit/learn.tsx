import * as React from 'react';
import { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import WhyMusicSplit from 'components/WhyMusicSplit';
import {
    Box, Button, Flex, Heading, Image, Link, Stack, Text
} from '@chakra-ui/react';
import useAppDownloader from 'hooks/useAppDownloader';
import ArtisteImageSlider from 'components/ArtisteImageSlider';

const streamingProfiles = [
    {
        name: 'Apple Music',
        icon: '/icons/apple-music.svg',
        url: 'https://music.apple.com/ng/artist/king-perryy/1372006944'
    },
    {
        name: 'Spotify',
        icon: '/icons/spotify.svg',
        url: 'https://open.spotify.com/artist/2Srxd4jkUb5hcZEJO1SPnW'
    },
    {
        name: 'Deezer',
        icon: '/icons/deezer.svg',
        url: 'https://www.deezer.com/fr/artist/14651481'
    },
    {
        name: 'YouTube',
        icon: '/icons/youtube.svg',
        url: 'https://www.youtube.com/channel/UCTQb_biZoWmcmhkOf5bJwnA'
    },
    {
        name: 'SoundCloud',
        icon: '/icons/soundcloud.svg',
        url: 'https://soundcloud.com/kingperryy'
    },
    {
        name: 'Tidal',
        icon: '/icons/tidal.svg',
        url: 'https://listen.tidal.com/artist/9792146'
    },
    {
        name: 'Amazon Music',
        icon: '/icons/amazon-music.svg',
        url: 'https://music.amazon.com/artists/B07CPCL4VP/king-perryy'
    }
]

const MusicSplitLearnPage: NextPage = () => {
    const { download } = useAppDownloader()

    return (
        <PageLayout title={'King Perryy'} pre={false}>
            <Box
                as="section"
                backgroundImage="url('/king-perryy.jpg')"
                backgroundSize="cover"
                backgroundPosition="0% 30%"
            >
                <Box bgColor="rgba(0, 0, 0, .5)">
                    <Flex alignItems="center" py={[24, 24, 32]} className="page-container">
                        <Stack spacing={[4, 4, 10]} maxW={960} color="white">
                            <Text>
                                ARTSPLIT Introduces
                            </Text>

                            <Heading>
                                <Text color="gray" fontSize={['5xl', '5xl', '6xl', '6xl']}>
                                    KING
                                </Text>
                                <Text fontSize={['6xl', '8xl']} mt={-4}>
                                    PERRYY
                                </Text>
                            </Heading>

                            <Box>
                                <Text fontSize={['sm', 'md', 'md', 'lg']} lineHeight={[1.6, 1.9]}>
                                    With Nigerian music gaining precedence worldwide, King Perryy stands out as
                                    one of the country's most distinctive and ambitious young acts.
                                    The creator of what he calls the “Continental Sound,” the former seminary
                                    student and would-be Catholic priest fuses the melodies and rhythms of today''s
                                    Afrobeats with pan-African influences and reggae/dancehall to create deeply resonant
                                    songs that transcend cultures and borders. With a run of successful singles
                                    (“Man on Duty,” “Work 'N' Grind”) to his credit and over 70 million streams on digital platforms,
                                    he released his debut album, Citizen of the World, in 2021.
                                </Text>
                            </Box>

                            <Box pt={4}>
                                <Text>Listen on</Text>
                                <Flex gap={6} mt={4}>
                                    {
                                        streamingProfiles.map((profile) => (
                                            <Link
                                                key={profile.name}
                                                href={profile.url}
                                                isExternal
                                                _hover={{
                                                    transform: 'scale(1.2)'
                                                }}
                                            >
                                                <Image src={profile.icon} alt={profile.name} h={8} />
                                            </Link>
                                        ))
                                    }
                                </Flex>
                            </Box>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
            
            <Box as="section" bgColor="#FBF7F3" py={[12, 12, 24]}>
                <Box className="page-container">
                    <Heading mb={6}>
                        More on <span className="primary-gradient-text">{ 'King Perryy' }</span>
                    </Heading>

                    <Stack spacing={8} textAlign="justify" fontSize={['sm', 'md', 'md', 'lg']}>
                        <Text>
                            Born Anthony Offiah, King Perryy grew up in the oil city of Port Harcourt,
                            the same town that has spawned Nigerian music superstars Burna Boy and Omah Lay.
                            As a child, his father introduced him to a wide range of music, from the reggae of
                            Bob Marley and Sean Paul to Nigerian classics from Fela Kuti and Alex Zitto.
                            Some of his favourite music from the time was from boy bands Westlife and the Backstreet Boys,
                            whose melodies he maintains as an influence to this day. Taking to rap, he made his first
                            tracks at age 12, freestyling over instrumentals from the group P Square, which he downloaded online.
                        </Text>

                        <Text>
                            With hit singles "Work 'N' Grind," "YKTFV," and "Man on Duty," as well as dominating on
                            features such as "Kom Kom" with Timaya and Patoranking, King Perryy, who is now an independent artist,
                            has amassed over 70 million streams across digital streaming platforms.
                        </Text>

                        <Text>
                            King Perryy's debut album, Citizen of the World, was released in April 2021.
                            Citizen of the World was three years in the making and included 11 new songs as
                            well as four of King Perryy's most recent singles, "YKTFV," "Waist," "Work 'N' Grind," and
                            "My Darlina." Timaya, Mayorkun, Oxlade, and Phyno also appear on the project, with beats by
                            top hitmakers across the industry.
                        </Text>

                        <Text>
                            For the artiste, Citizen of the World is more than King Perryy's debut project: It's a manifesto and
                            a mission statement for how he sees the world. “Citizen of the World is an identity, a mindstate,”
                            King Perryy says. “I found the title the moment I found myself.”
                        </Text>
                    </Stack>

                    <Box mt={12}>
                        <Button onClick={download} size="lg">
                            Follow Artist
                        </Button>
                    </Box>
                </Box>
            </Box>

            <ArtisteImageSlider />

            <WhyMusicSplit bg='white' card='#FBF7F3' />
        </PageLayout>
    )
}

export default MusicSplitLearnPage