import React, {
    useState,
    useMemo,
    useCallback
} from 'react';
import {
  Heading,
  Flex,
  Text,
  Image,
  Box,
  Button,
  IconButton,
  Avatar
} from "@chakra-ui/react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import AuctionService from 'services/Auction.service';
import CountdownTimer from './CountdownTimer';
import useApi from 'hooks/useApi';
import useAppDownloader from 'hooks/useAppDownloader';
import { formatPrice } from 'utils/formatters';

const imagePathTracer = {
    content: '" "',
    position: 'absolute',
    left: -5,
    bottom: -5,
    width: '100%',
    height: '95%',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderTopRadius: 275,
    borderBottomRadius: 12,
}

const GlowingCircle: React.FC = () => (
    <Flex
        position="absolute"
        left={0}
        right={0}
        bottom={['30%', '15%', '15%', '20%', '10%']}
        justifyContent="center"
        alignItems="center"
    >
        <Image
            src="/glowing-circle.png"
            alt="Glowing dot"
            width={[500, 500, 500, 600, 400]}
        />
    </Flex>
)

const DataItem: React.FC<{
    title: string,
    children: React.ReactNode
}> = ({ title, children }) => {
    return (
        <Box>
            <Text color="orange.500" fontSize={['sm', 'sm', 'md', 'md']}>
                { title }
            </Text>
            <Text fontSize={['md', 'md', 'lg', 'lg']} color="white" fontWeight={500}>
                { children }
            </Text>
        </Box>
    )
}

const Artist = (props: any) => (
    <Flex gap={4} alignItems={"center"} {...props}>
        <Avatar
            src={props.image}
            name={props.name}
            size="md"
            border="2px solid #FFFFFF"
        />

        <Box>
            <Text color="#FFFFFF" fontSize="md" fontWeight={300}>
                {props.name}
            </Text>
            <Text color="#BF702A" fontSize={"sm"}>
                {props.art_name}
            </Text>
        </Box>
    </Flex>
);

const HotAuctions: React.FC = () => {
    const {
        isLoaded,
        data: hotAuctions
    } = useApi(AuctionService.getHotAuctions, [], [])
    const [activeIndex, setActiveIndex] = useState(0);
    const auction = useMemo(() => hotAuctions?.[activeIndex], [
        activeIndex, hotAuctions
    ])
    const { download } = useAppDownloader()

    const nextIndex = useMemo(() => {
        const lastIndex = hotAuctions.length - 1
        return activeIndex < lastIndex ? activeIndex + 1 : 0
    }, [activeIndex, hotAuctions.length])

    return (isLoaded && hotAuctions.length)
            ? (
                <Box
                    as="section"
                    bg="#1E1E1E"
                    pt={[24, 24, 16, 16, 32]}
                    pb={[8, 8, 16, 16, 32]}
                >
                    <Box
                        position="relative"
                        maxWidth="1240px"
                        margin="auto"
                        px={['1.2rem', '1.2rem', '1.2rem', '2rem']}
                    >
                        <GlowingCircle />

                        <Box position="relative">
                            <Box
                                height={['auto', 'auto', 'auto', '560px']}
                                mb={[20, 20, 20, 20, 0]}
                                position="relative"
                            >
                                <Box
                                    as={Row}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="full"
                                >
                                    <Box
                                        as={Col}
                                        xs={12}
                                        xl={8}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent={[
                                            'center', 'center', 'center', 'center', 'flex-end'
                                        ]}
                                    >
                                        <Box
                                            w={[280, 380]}
                                            h={[360, 500]}
                                            position="relative"
                                            _before={imagePathTracer}
                                        >
                                            <Image
                                                src={auction?.art_image}
                                                alt={`auction-image-for-${auction?.artist_name}`}
                                                position="relative"
                                                width="full"
                                                height="full"
                                                objectFit="cover"
                                                objectPosition="center"
                                                borderTopRadius={275}
                                                borderBottomRadius={12}
                                            />

                                            <Image
                                                src="/invest-in-art-with-artsplit-white.svg"
                                                alt="Invest in art with artsplit [White]"
                                                className="rotate-forever"
                                                position="absolute"
                                                top={-5}
                                                right={[-4, -10]}
                                                width={[100, 150]}
                                            />

                                            <Button
                                                onClick={download}
                                                bg="white"
                                                textColor="#000"
                                                fontWeight={600}
                                                py={6}
                                                px={10}
                                                position="absolute"
                                                bottom={[-8, -8, -8, -8, -2]}
                                                left={[0, 0, 0, 0, 'unset']}
                                                right={[0, 0, 0, 0, -10]}
                                                maxWidth={[180, 180, 180, 180, 'auto']}
                                                mx="auto"
                                                zIndex={500}
                                            >
                                                Bid Now
                                            </Button>
                                        </Box>
                                    </Box>

                                    <Box
                                        as={Col}
                                        xs={11}
                                        md={10}
                                        xl={4}
                                        position={[
                                            'absolute', 'absolute', 'absolute', 'absolute', 'relative'
                                        ]}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent={[
                                            'flex-end', 'flex-end', 'flex-end', 'flex-end', 'space-between'
                                        ]}
                                    >
                                        <IconButton
                                            onClick={() => setActiveIndex(nextIndex)}
                                            variant="link"
                                            aria-label="Next auction"
                                            icon={<IoIosArrowForward />}
                                            width={14}
                                            height={14}
                                            rounded="50%"
                                            ml={[0, 0, 0, 10]}
                                            mr={[-6, 0, 0, 0, 0]}
                                            bgColor="rgba(255, 255, 255, 0.2)"
                                            border="1px solid rgba(200, 200, 200, 0.15)"
                                            backdropFilter="blur(20px)"
                                            color="#FFFFFF"
                                            zIndex={300}
                                        />

                                        <Box
                                            w={200}
                                            h={280}
                                            display={['none', 'none', 'none', 'none', 'block']}
                                            position="relative"
                                            _before={imagePathTracer}
                                        >
                                            <Image
                                                src={hotAuctions[nextIndex]?.art_image}
                                                alt={`artwork-for-${hotAuctions[nextIndex]?.artist_name}`}
                                                position="relative"
                                                width="full"
                                                height="full"
                                                objectFit="cover"
                                                objectPosition="center"
                                                borderTopRadius={275}
                                                borderBottomRadius={12}
                                                zIndex={20}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box
                                    as={Row}
                                    display={['none', 'none', 'none', 'none', 'initial']}
                                    position="absolute"
                                    left={0}
                                    top={0}
                                    width="full"
                                    height="full"
                                    mt={[0, 0, 0, 0, 24]}
                                >
                                    <Box as={Col} xs={12} lg={4} h="full" zIndex={200}>
                                        <Flex flexDir="column">
                                            <Text color="orange.500">
                                                {auction?.trade_mode_alias ?? 'Split'} Auction
                                            </Text>
                                            <Heading
                                                color="white"
                                                fontSize={['3xl', '3xl', '5xl']}
                                                fontWeight={400}
                                            >
                                                { auction?.artwork_name }
                                            </Heading>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Artwork name & Auction type for Mobile devices */}
                            <Box
                                display={['flex', 'flex', 'flex', 'flex', 'none']}
                                textAlign="center"
                                flexDir="column"
                                justifyContent="center"
                                alignItems="center"
                                zIndex={500}
                            >
                                <Text fontSize={['xs', 'xs', 'sm']} color="white" textTransform="uppercase">
                                    {auction?.trade_mode_alias ?? 'Split'} Auction
                                </Text>
                                <Heading color="white" fontSize={['3xl', '3xl', '5xl']} fontWeight={500} px={10} textAlign="center">
                                    { auction?.artwork_name }
                                </Heading>

                                <CountdownTimer
                                    time={auction?.auction_end_time}
                                    mt={4}
                                />
                            </Box>

                            <Flex alignItems={"center"} justify="space-between" mt={[10, 24, 24, 24, 24]}>
                                <Artist
                                    name={auction?.artist_name}
                                    image={""}
                                    art_name={auction?.artwork_name}
                                    display={['none', 'none', 'flex', 'flex']}
                                />

                                <CountdownTimer
                                    time={auction?.auction_end_time}
                                    display={['none', 'none', 'none', 'none', 'flex']}
                                    px={6}
                                    py={3}
                                />

                                <DataItem title="Starting Price">
                                    { formatPrice(auction?.minimum_bid_amount ?? 0) }
                                </DataItem>

                                <Box></Box>
                                {/* <DataItem title="Highest Bid">
                                    { formatPrice(auction?.bid_count ?? 0) }
                                </DataItem> */}

                                {/* <DataItem title="Duration">
                                    24 months
                                </DataItem> */}

                                {/* <DataItem title="Available Units">
                                    80,000
                                </DataItem> */}
                            </Flex>

                            {/* Artist name for mobile view only */}
                            <Box
                                mt={10}
                                display={['flex', 'flex', 'none', 'none', 'none']}
                                justifyContent="center"
                                alignItems="center"
                                borderTop="1px dashed rgba(255, 255, 255, 0.35)"
                                pt={8}
                            >
                                <Artist
                                    name={auction?.artist_name}
                                    image={""}
                                    art_name={auction?.artwork_name}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )
            : <></>
}

export default HotAuctions