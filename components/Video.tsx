import * as React from 'react';
import { Link, Stack, Box, Heading, Flex, Text } from '@chakra-ui/react';
import { getRelativeTime } from 'utils/formatters';

const Video: React.FC<{ video: Record<string, any> }> = ({ video }) => {
    return (
        <Link href={`https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`} isExternal>
            <Stack minW={240}>
                <Box
                    width="full"
                    height={160}
                    backgroundColor="#000000"
                    backgroundImage={`url('${video.snippet.thumbnails?.standard.url}')`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="center"
                    rounded="xl"
                    mb={2}
                ></Box>

                <Heading fontSize={['lg', 'lg', 'lg']} fontWeight={500}>
                    { video.snippet.title }
                </Heading>

                <Flex alignItems="center" fontSize={['xs']} color="dark" gap={1}>
                    <Text>{ video.snippet.channelTitle }</Text>
                    <Text>•</Text>
                    <Text textTransform="capitalize">
                        { getRelativeTime(video.snippet.publishedAt) }
                    </Text>
                </Flex>
            </Stack>
        </Link>
    )
}

export default Video