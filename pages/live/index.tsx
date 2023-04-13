import React from 'react';
import type { NextPage } from "next";
import {
    Box, Center, Flex, Heading, Image, Link, SimpleGrid, Spinner, Stack, Text
} from '@chakra-ui/react';
import { AnimatePresence, motion, Reorder, useMotionValue } from "framer-motion";
import _ from 'lodash'
import useApi from 'hooks/useApi';
import AuctionService, { HotAuction } from 'services/Auction.service';
import NextLink from 'next/link';
import { formatDate, formatPrice, maskName } from 'utils/formatters';
import Seo from 'components/Seo';
import GradientDataField from 'components/GradientDataField';
import Countdown, { CountdownTimeDelta } from 'react-countdown';
import { CountdownTimerRenderer } from 'components/CountdownTimer';
import SocketService from 'services/Socket.service';
import CountUp from 'react-countup';
import useAudio from 'hooks/useAudio';
import Fireworks from 'components/Fireworks';
import SplitAuctionBids from 'components/SplitAuctionBids';
import LeaseAuctionBids from 'components/LeaseAuctionBids';

const gradient = 'linear-gradient(3.14deg, #000000 0.19%, #2D2D2D 94.3%), linear-gradient(107.56deg, #000000 0%, #000000 46.35%, rgba(0, 0, 0, 0) 100%);'
const baseZIndex = 1111111110

const motionContainer = {
    show: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.25
        }
    }
}

const motionItem = {
    hidden: {
        opacity: 0,
        y: 32
    },
    show: {
        opacity: 1,
        y: 0
    },
}

const LiveAuctionsPage: NextPage = () => {
    const THRESHOLD = 59
    const { isLoaded, data } = useApi<HotAuction>(AuctionService.getOngoingLeaseAuction)
    const [bids, setBids] = React.useState<any[]>()
    const [newBid, setNewBid] = React.useState<any>()
    const [almostDone, setAlmostDone] = React.useState(false)
    const [ended, setEnded] = React.useState(false)
    const [highestBidNotificationActive, setHighestBidNotificationActive] = React.useState(false)
    const highestBid = React.useMemo(() => (
        bids?.[0]?.amount ?? 0
    ), [bids])
    const y = useMotionValue(0)
    const newBidAudio = useAudio('/sounds/bubble-pop-up-alert-notification.mp3')
    const isSplitAuction = React.useMemo(
        () => (data?.trade_mode_alias ?? 'Split') === 'Split', [data]
    )

    const watchCountdown = React.useCallback(({
        days, hours, minutes, seconds
    }: CountdownTimeDelta) => {
        const onlySecondsRemaining = days === 0 && hours === 0 && minutes === 0
        setAlmostDone(onlySecondsRemaining && seconds <= THRESHOLD)
    }, [])

    React.useEffect(() => {
        if (isLoaded && data?.auction_id) {
            setEnded(new Date() > new Date(data.auction_end_time))
            AuctionService.getOngoingLeaseAuctionBids(data.auction_id)
                          .then(({ data }) => setBids(data.bids))

            SocketService.on(`BID_ON_AUCTION_${data.auction_id}`, async (response: any) => {
                if (!ended) {
                    try {
                        setNewBid(JSON.parse(response))
                    } catch (e) {}
                }
            })

            SocketService.on(`AUCTION_CLOSED_${data.auction_id}`, () => setEnded(true))
        }
    }, [isLoaded, data])
    
    React.useEffect(() => {
        if (newBid) {
            const allBids = bids?.slice(0) ?? []
            if (!isSplitAuction && newBid.bid.amount > highestBid) {
                setHighestBidNotificationActive(true)
            } else {
                newBidAudio?.play()
            }
            allBids.push(newBid.bid)
            setBids(_.sortBy(allBids, ['amount']).reverse())
            setNewBid(null)
        }
    }, [newBid, bids, highestBid])

    const formatAmount = React.useCallback(formatPrice, [])

    return (
        <>
            <Seo
                title={isLoaded ? `Live Auction for ${data.artwork_name}` : 'Loading Ongoing Auction ...'}
                description={data?.artwork_story}
            />

            { !isSplitAuction && ended && <Fireworks active={ended} /> }

            <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                position="fixed"
                left={0} right={0}
                top={0} bottom={0}
                h="100vh"
                overflowY="auto"
                zIndex={baseZIndex}
                background={gradient}
                fontFamily="heading"
            >
                <Image
                    src="/main-wavy-lines.png"
                    position="absolute"
                    top={0}
                    bottom={0}
                    maxH="95%"
                    opacity={0.5}
                />

                <Image
                    src="/secondary-wavy-lines.png"
                    position="absolute"
                    top={0}
                    right={0}
                    opacity={0.5}
                />

                {
                    isLoaded ? (
                        <Center pos="relative" h="full" maxW="1560px" mx="auto" p={[6, 12]}>
                            <NextLink href="/" passHref>
                                <Link pos="absolute" top={4} right={4}>
                                    <Image
                                        src="/artsplit-logo-white.svg"
                                        alt="ArtSplit white logo"
                                        height={16}
                                    />
                                </Link>
                            </NextLink>

                            {
                                !!data?.auction_id ? (
                                    <SimpleGrid columns={2} mt={6} w="full" color="white" gap={16}>
                                        <Stack spacing={12}>
                                            <Box
                                                as={motion.div}
                                                initial={{ y: -120 }}
                                                animate={{ y: 0 }}
                                                overflow="hidden"
                                            >
                                                <Image src={data.art_image} maxH="480px" border="4px" />
                                            </Box>

                                            <Box
                                                as={motion.ul}
                                                variants={motionContainer}
                                                initial="hidden"
                                                animate="show"
                                                listStyleType="none"
                                            >
                                                <motion.li variants={motionItem}>
                                                    <NextLink href={`/discover/${data.artist_id}`} passHref>
                                                        <Link textTransform="uppercase" fontSize={['sm', 'sm', 'md']}>
                                                            { data.artist_name }
                                                        </Link>
                                                    </NextLink>
                                                </motion.li>
                                                
                                                <motion.li variants={motionItem}>
                                                    <Heading
                                                        color="warm-primary"
                                                        fontSize={['3xl', '3xl', '3xl', '4xl']}
                                                        fontWeight={400}
                                                        lineHeight="normal"
                                                        maxW={560}
                                                    >
                                                        { data.artwork_name },

                                                        <Text
                                                            mb={[1.5, 1.5, 1]}
                                                            fontSize={['md', 'md', 'xl', '2xl']}
                                                            fontWeight={500}
                                                            ml={3}
                                                            display="inline-block"
                                                            color="white"
                                                        >
                                                            { formatDate(data.artwork_creation_year, true) }
                                                        </Text>
                                                    </Heading>
                                                </motion.li>

                                                <motion.li variants={motionItem}>
                                                    <Flex gap={6} mt={8}>
                                                        {
                                                            !(almostDone || ended) && (
                                                                <GradientDataField label="Auction ending in" w={280}>
                                                                    <Countdown
                                                                        date={data.auction_end_time}
                                                                        renderer={
                                                                            (renderProps) => CountdownTimerRenderer(renderProps, ' : ')
                                                                        }
                                                                        onComplete={() => setEnded(true)}
                                                                        onTick={watchCountdown}
                                                                    />
                                                                </GradientDataField>
                                                            )
                                                        }

                                                        {/* <GradientDataField label="Highest Bid" maxW="max-content">
                                                            <CountUp
                                                                start={bids?.[1]?.amount ?? 0}
                                                                end={highestBid}
                                                                formattingFn={formatAmount}
                                                            />
                                                        </GradientDataField> */}
                                                    </Flex>
                                                </motion.li>
                                            </Box>
                                        </Stack>

                                        <Box>
                                            {
                                                isSplitAuction ? (
                                                    <SplitAuctionBids
                                                        auction={data}
                                                        bids={bids ?? []}
                                                        onReorder={setBids}
                                                        ended={ended}
                                                        almostEnded={almostDone}
                                                    />
                                                ) : (
                                                    <LeaseAuctionBids
                                                        auction={data}
                                                        bids={bids ?? []}
                                                        onReorder={setBids}
                                                        ended={ended}
                                                        almostEnded={almostDone}
                                                    />
                                                )
                                            }

                                            {
                                                !isSplitAuction && (almostDone || ended) && (
                                                    <motion.div initial={{ y: 120 }} animate={{ y: 0 }}>
                                                        <GradientDataField 
                                                            label={ended ? 'Auction ended' : 'Auction ending in'}
                                                            mt={12} w="max-content"
                                                        >
                                                            <Text fontSize={['3xl', '4xl', '5xl']} color="warm-primary">
                                                                {
                                                                    ended ? (
                                                                        <Text>
                                                                            00h : 00m : 00s
                                                                        </Text>
                                                                    ) : (
                                                                        <Countdown
                                                                            date={data.auction_end_time}
                                                                            onComplete={() => setEnded(true)}
                                                                            renderer={
                                                                                (renderProps) => CountdownTimerRenderer(renderProps, ' : ')
                                                                            }
                                                                        />
                                                                    )
                                                                }
                                                            </Text>
                                                        </GradientDataField>
                                                    </motion.div>
                                                )
                                            }
                                        </Box>
                                    </SimpleGrid>
                                ) : (
                                    <Center h="full" color="white" flexDir="column">
                                        <Heading mb={2}>
                                            No Ongoing Auction
                                        </Heading>
                                        <Text color="gray.400">
                                            Sorry, there's currently no Active Auction
                                        </Text>
                                    </Center>
                                )
                            }
                        </Center>
                    ) : (
                        <Center flexDir="column" h="full">
                            <Spinner size="xl" color="white" />
                            <Text color="white" mt={6}>
                                Loading Ongoing Auction
                            </Text>
                        </Center>
                    )
                }
            </Box>

            <NewHighestBidNotification
                open={highestBidNotificationActive}
                onClose={() => setHighestBidNotificationActive(false)}
            />
        </>
    )
}

const NewHighestBidNotification: React.FC<{
    open: boolean;
    onClose: () => void
}> = ({ open=false, onClose }) => {
    const container = React.useRef(null)
    const audio = useAudio('/sounds/bell-notification.mp3')

    React.useEffect(() => {
        if (open) {
            audio?.play()
            setTimeout(onClose, 4000)
        }
    }, [open])

    return (
        <AnimatePresence>
            {
                open && (
                    <Box
                        as={motion.div}
                        initial={{ y: -120 }}
                        animate={{ y: 36 }}
                        exit={{ y: -120 }}
                        ref={container}
                        position="fixed"
                        zIndex={baseZIndex + 100}
                        left={0}
                        right={0}
                        top={0}
                    >
                        <Center
                            position="relative"
                            w={['full', 'full', 'full', '640px']}
                            h={120}
                            mx="auto"
                            bgColor="#262626"
                            flexDir="column"
                        >
                            <Box
                                position="absolute"
                                top="100%"
                                width="320px"
                                height="40px"
                                background="#FCCE9C"
                                filter="blur(67.957px)"
                                zIndex={-1}
                            />

                            <Heading color="white" fontSize="3xl" className='golden-gradient-text'>
                                We Have a New Highest Bid
                            </Heading>

                            <Box
                                w="full"
                                h={5}
                                position="absolute"
                                top="100%"
                                bgImage="url('/golden-strip.png')"
                                bgPos="center"
                            />
                        </Center>
                    </Box>
                )
            }
        </AnimatePresence>
    )
}

export default LiveAuctionsPage