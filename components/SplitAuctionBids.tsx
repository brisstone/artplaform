import * as React from 'react';
import { Box, Button, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Reorder, motion } from 'framer-motion';
import { HotAuction } from 'services/Auction.service';
import { formatNumber, formatPrice, maskName } from 'utils/formatters';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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

export interface SplitAuctionBidsProps {
    bids: Array<any>;
    auction: HotAuction;
    ended?: boolean;
    almostEnded?: boolean;
    onReorder: (newOrder: any[]) => any;
}

const SplitAuctionBids: React.FC<SplitAuctionBidsProps> = ({
    auction, bids = [], ended, almostEnded, onReorder
}) => {
    const pageSize = 12
    const [page, setPage] = React.useState(1)
    const pages = Math.ceil(bids.length / pageSize)

    const back = () => {
        if (page > 1) setPage(page - 1)
    }

    const next = () => {
        if (page < pages) setPage(page + 1)
    }

    return (
        <Stack mx="auto">
            <SimpleGrid
                as={motion.div}
                initial={{ y: -56 }}
                animate={{ y: 0 }}
                columns={4}
                spacing={8}
                color="warm-primary"
            >
                <Text>
                    Name
                </Text>
                <Text>
                    No. of Splits
                </Text>
                <Text>
                    Amount Per Split
                </Text>
                <Text>
                    Bid
                </Text>
            </SimpleGrid>

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
                height={['auto', 'auto', '60vh']}
                _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
            >
                {
                    bids?.slice(
                        ((page - 1) * pageSize),
                        ((page - 1) * pageSize) + pageSize
                    ).map((bid, index) => (
                        <Reorder.Item
                            key={bid._id}
                            value={bid}
                            // style={{ y }}
                            variants={motionItem}
                        >
                            <SimpleGrid
                                position="relative"
                                columns={4}
                                spacing={8}
                                fontSize="2xl"
                                mb={3}
                            >
                                <Text>
                                    {
                                        maskName(bid.user_id?.firstname, bid.user_id?.lastname)
                                    }
                                </Text>

                                <Text>
                                    { formatNumber(bid.quantity) }
                                </Text>

                                <Text>
                                    { formatPrice(bid.amount) }
                                </Text>

                                <Text>
                                    { formatPrice(bid.quantity * bid.amount) }
                                </Text>
                            </SimpleGrid>
                        </Reorder.Item>
                    ))
                }
            </Box>

            {
                pages > 0 && (
                    <Flex alignItems="center" justifyContent="flex-end" gap={1.5} mt={4} pr={16}>
                        <Button onClick={back} variant="outline" borderColor="yellow" rounded="lg">
                            <ChevronLeftIcon fontSize={20} />
                        </Button>

                        {
                            new Array(pages).fill('x').map((_, i) => (
                                <Button
                                    onClick={() => setPage(i + 1)}
                                    key={`page-${i}`}
                                    variant="ghost"
                                    color={page === i + 1 ? 'yellow' : 'white'}
                                    fontWeight={page === i + 1 ? 'bold' : 'normal'}
                                >
                                    { i + 1 }
                                </Button>
                            ))
                        }

                        <Button onClick={next} variant="outline" borderColor="yellow" rounded="lg">
                            <ChevronRightIcon fontSize={20} />
                        </Button>
                    </Flex>
                )
            }
        </Stack>
    )
}

export default SplitAuctionBids