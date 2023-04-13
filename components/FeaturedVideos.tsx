import * as React from 'react';
import { SimpleGrid, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';
import Section from './Section';
import Video from './Video';
import useApi from 'hooks/useApi';
import { YouTube } from 'services/API.service';

const FeaturedVideos: React.FC = () => {
    const { isLoaded, data: videos } = useApi<any>(
        () => YouTube.get(
            '/playlistItems?part=snippet&maxResults=4&'.concat(
                `playlistId=${process.env.YOUTUBE_PLAYLIST_CHANNEL_ID}&key=${process.env.GOOGLE_API_KEY}`
            )
        )
    )

    return (
        <Section
            preTitle="ARTSPLIT TV"
            title="Featured Videos"
            href="https://www.youtube.com/@artsplittv"
            isExternal
        >
            <SimpleGrid columns={[1, 1, 2, 4]} spacing={8}>
                {
                    isLoaded
                    ? videos?.items.map((video: any, i: number) => (
                        <Video key={`video-${i}`} video={video} />
                    )) : (
                        new Array(4).fill(0).map((_, i) => (
                            <Stack key={`loading-video-${i}`} gap={3}>
                                <Skeleton h={240} rounded="3xl" />
                                <SkeletonText noOfLines={2} mx={3} />
                            </Stack>
                        ))
                    )
                }
            </SimpleGrid>
        </Section>
    )
}

export default FeaturedVideos