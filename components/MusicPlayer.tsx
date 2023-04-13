import * as React from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Text,
    Slider,
    SliderFilledTrack,
    SliderTrack,
    SliderThumb,
    usePrevious
} from '@chakra-ui/react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
import { useBoolean, useNumber } from 'react-hanger';
import { MdGraphicEq } from 'react-icons/md';

export interface MusicPlayerProps {
    number: number;
    track: Record<string, any>;
    onPlay?: (track: number) => void;
    hideNumber?: boolean;
    current?: number;
}

const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {
    const {
        number,
        current,
        track,
        onPlay,
        hideNumber = false,
    } = props
    const audio = React.useRef<HTMLAudioElement>(null)
    const audioIsPlaying = useBoolean(false)
    const progress = useNumber(0)
    const id = React.useId()
    const previous = usePrevious(current)

    const togglePlay = (e: any) => {
        e.preventDefault()
        if (audioIsPlaying.value) audio.current?.pause()
        else if (audio.current?.paused) {
            // const allAudioElements = document.querySelectorAll('audio')
            // allAudioElements.forEach((el: HTMLAudioElement) => {
            //     // Pause every other <audio /> element in the DOM.
            //     if (el.id !== id) el.pause()
            //     console.log(`Pausing Audio with ID, ${el.id}`)
            // })
            // console.log(`Now playing: Track ${current}(${id})`)
            audio.current?.play()
            onPlay?.(number)
        }
    }

    const setAudioTime = (time: number) => audio.current!.currentTime = time

    React.useEffect(() => {
        if (previous !== undefined) {
            if (current !== number) {
                /**
                 * If the currently selected track ain't equal to the Track number,
                 * Pause the audio
                 */
                audio.current?.pause()
            } else {
                /**
                 * If the track the user just selected is equal to the 
                 * Track number as passed from the MusicPlaylist component,
                 * Play the current audio and update the current track head
                 */
                audio.current?.play()
            }
        }
    }, [current])

    React.useEffect(() => {
        if (audio.current) {
            audio.current.addEventListener('playing', () => audioIsPlaying.setTrue())
            audio.current.addEventListener('pause', () => audioIsPlaying.setFalse())
            audio.current.addEventListener('ended', () => {
                audioIsPlaying.setFalse()
                // Reset time
                audio.current!.currentTime = 0
            })
            audio.current.addEventListener('timeupdate', () => {
                progress.setValue(audio.current?.currentTime ?? 0)
            })
        }
    }, [])

    return (
        <Flex
            gap={4}
            color="primary"
            bg={number % 2 === 0 ? 'white' : '#FFF6EF'}
            px={5}
            py={2.5}
            w="full"
            rounded="full"
        >
            <HStack gap={2} w={['120px', '140px']}>
                { !hideNumber && (
                    <Text color="gray.500" fontWeight="bold" fontSize={['sm', 'md']}>
                        { number }
                    </Text>
                ) }
                <Text
                    noOfLines={1}
                    title={track.original_file_name}
                    fontWeight={500}
                    fontSize={['sm', 'md']}
                >
                    { track.original_file_name ?? 'Unknown track' }
                </Text>
            </HStack>

            <HStack gap={2} flex="1" align="center">
                <Box w="85%" mt={1.5}>
                    <Slider
                        aria-label={`Player for Track ${number}(${track})`}
                        defaultValue={0}
                        value={progress.value}
                        max={audio.current?.duration}
                        onChangeEnd={setAudioTime}
                    >
                        <SliderTrack bgColor="#D9D9D9">
                            <SliderFilledTrack bgColor="primary" />
                        </SliderTrack>

                        <SliderThumb boxSize={7} boxShadow="lg">
                            { current == number && <MdGraphicEq /> }
                        </SliderThumb>
                    </Slider>
                </Box>

                <IconButton
                    aria-label="Play / Pause button"
                    onClick={togglePlay}
                    icon={
                        audioIsPlaying.value
                        ? <BsPauseCircle />
                        : <BsPlayCircle />
                    }
                    fontSize="3xl"
                    bg="transparent"
                    color="primary"
                    position="relative"
                    zIndex="overlay"
                />
            </HStack>

            <audio id={id} ref={audio} src={track.url} style={{ display: 'none' }} />
        </Flex>
    )
}

export default MusicPlayer