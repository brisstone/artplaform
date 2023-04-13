import * as React from 'react';
import {
    Box,
    Heading,
    VStack
} from '@chakra-ui/react';
import MusicPlayer from './MusicPlayer';
import { useNumber } from 'react-hanger';

export interface MusicPlaylistProps {
    title?: string;
    gallery: any[];
}

const MusicPlaylist: React.FC<MusicPlaylistProps> = ({ title, gallery = [] }) => {
    /**
     * Historically, the stylus (needle) is the part of a Vinyl record player that
     * rests against the record and it determines what gets played, hence the
     * name choice.
     */
    const stylus = useNumber(1, {
        lowerLimit: 1,
        upperLimit: gallery.length,
        loop: true
    })

    return (
        <VStack gap={1} alignItems="flex-start" mb={5}>
            <Heading fontSize="2xl">
                { title ?? 'Preview' }
            </Heading>

            <Box className="with-special-scrollbar" maxH={250} w="104%">
                {
                    gallery.map((track: any, index) => (
                        <MusicPlayer
                            key={`track-${track.asset_id}`}
                            number={index + 1}
                            track={track}
                            current={stylus.value}
                            onPlay={stylus.setValue}
                        />
                    ))
                }
            </Box>
        </VStack>
    )
}

export default MusicPlaylist