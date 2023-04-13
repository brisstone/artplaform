import * as React from 'react';
import { Box, SimpleGrid, Stack, Text, Image } from '@chakra-ui/react';
import { Reorder, motion } from 'framer-motion';
import { HotAuction } from 'services/Auction.service';
import { formatPrice, maskName } from 'utils/formatters';

const rowFontSizes = ['4xl', '3xl', '2xl']

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

export interface LeaseAuctionBidsProps {
    bids: Array<any>;
    auction: HotAuction;
    ended?: boolean;
    almostEnded?: boolean;
    onReorder: (newOrder: any[]) => any;
}

const LeaseAuctionBids: React.FC<LeaseAuctionBidsProps> = ({
    auction, bids = [], ended, almostEnded, onReorder
}) => {
    return (
        <Stack pos='relative' mx="auto">
            <SimpleGrid
                as={motion.div}
                initial={{ y: -56 }}
                animate={{ y: 0 }}
                columns={2}
                color="warm-primary"
            >
                <Text fontSize="lg">
                    { ended ? 'Winner' : 'Name' }
                </Text>
                <Text fontSize="lg">
                    { ended ? 'Winning Bid' : 'Bid' }
                </Text>
            </SimpleGrid>

            {
                bids.length > 0 && (
                    <Box
                        _before={{
                            content: '" "',
                            width: 33,
                            height: 44,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            marginLeft: -12,
                            marginTop: "52px",
                            backgroundImage: 'url("/icons/award.svg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '90%'
                        }}
                    />
                )
            }

            <Box
                as={Reorder.Group}
                axis="y"
                values={bids ?? []}
                onReorder={onReorder}
                variants={motionContainer}
                initial="hidden"
                animate="show"
                pos="relative"
                listStyleType="none"
                maxHeight={['auto', 'auto', '65vh']}
                className="with-special-scrollbar dark"
                _after={{
                    // content: '""',
                    // position: 'absolute',
                    // left: 0,
                    // right: 0,
                    // top: 0,
                    // bottom: 0
                }}
            >
                {
                    bids?.slice(
                        0,
                        ended ? 1 : (
                            almostEnded ? 3 : bids.length
                        )
                    ).map((bid, index) => (
                        <Reorder.Item
                            key={bid._id}
                            value={bid}
                            // style={{ y }}
                            variants={motionItem}
                        >
                            <SimpleGrid
                                position="relative"
                                columns={2}
                                fontSize={rowFontSizes[index] ?? 'xl'}
                                fontWeight={index > 2 ? 400 : 'bold'}
                                mb={3}
                            >
                                <Text className={index === 0 ? 'golden-gradient-text' : ''}>
                                    {
                                        maskName(bid.user_id?.firstname, bid.user_id?.lastname)
                                    }
                                </Text>

                                <Text className={index === 0 ? 'golden-gradient-text' : ''}>
                                    { formatPrice(bid.amount) }
                                </Text>
                            </SimpleGrid>
                        </Reorder.Item>
                    ))
                }
            </Box>
        </Stack>
    )
}

export default LeaseAuctionBids