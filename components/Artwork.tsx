import * as React from 'react';
import {
    Box, Flex, Heading,
    Text, Avatar, Tag
} from '@chakra-ui/react';
import NextLink from 'next/link';
import CountdownTimer from './CountdownTimer';
import { formatNumber, formatPrice } from 'utils/formatters';

export interface ArtworkProps {
    market: string; // 'auction' | 'trade' | 'open-market';
    data: any;
}

const Artwork: React.FC<ArtworkProps> = (props) => {
    const { market, data } = props

    const value = React.useMemo(() => {
        if (market === 'open-market')
            return formatPrice(data.artwork_value)
        else if (market === 'trade')
            return formatPrice(data.market_price)
        else {
            return formatPrice(
                data.trade_mode_alias === 'Split'
                ? data.minimum_bid_amount
                : data.artwork_id?.value / 100000
            )
        }
    }, [market, data])

    const year = React.useMemo(() => 
        market === 'open-market'
        ? data.artwork_year?.split('-').shift()
        : data.creation_year ?? data.artwork_id?.creation_year
    , [market, data])

    const artwork = React.useMemo(() => ({
        id: market === 'auction' ? data._id : data.listing_id,
        name: data.artwork_name ?? data.artwork_id.name,
        type: data.trade_mode_alias,
        value,
        year,
        image: data.artwork_image ?? data.artwork_id?.art_image ?? data.picture_url,
        artist: data.artist_name ?? data.artist_id?.name ??'N/A',
        artistAvatar: data.artist_id?.profile_photo?.url,
        units: data.available_units ?? data.total_units ?? 0,
        startTime: data.auction_start_time ?? data.start_time,
        endTime: data.auction_end_time ?? data.end_time,
    }), [data, market])

    return (
        <NextLink href={`/explore/${market}/${artwork.id}`}>
            <Box cursor="pointer">
                <Box
                    position="relative"
                    w="full"
                    h={['380px', '380px', '420px', '420px']}
                    mb={3.5}
                    backgroundColor="gray.100"
                    backgroundImage={`url(${artwork.image})`}
                    backgroundSize={"cover"}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    borderRadius={"3xl"}
                >
                    {
                        market === 'auction' && (
                            <CountdownTimer
                                time={artwork.endTime}
                                position="absolute"
                                right={3}
                                bottom={3}
                            />
                        )
                    }
                </Box>

                <Box mb={2.5}>
                    <Heading fontSize="20px" mb={1} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                        { artwork.name }
                    </Heading>
                    <Text fontWeight={500} color="primary">
                        { artwork.value }
                    </Text>
                </Box>

                <Flex
                    justifyContent="space-between" alignItems="center"
                    borderTop="1px dashed" borderColor="gray"
                    py={2.5}
                >
                    <Flex gap={2} alignItems={"center"}>
                        <Avatar
                            size={"sm"}
                            name={artwork.artist}
                            src={artwork.artistAvatar}
                            border="2px solid"
                            style={{ borderColor: 'var(--chakra-colors-primary)' }}
                        />

                        <Text color="#6B6968" fontSize={[12, 12, 12, 14]} maxWidth="80%">
                            { artwork.artist }, {" "}
                            { new Date(artwork.year).getFullYear() }
                        </Text>
                    </Flex>

                    <Tag
                        variant="outline"
                        fontSize={[12, 12, 12, 14]}
                        px={3} py={1.5}
                        rounded="full"
                        color="dark"
                        textAlign="center"
                        outline="1px solid"
                        outlineColor="dark"
                        fontWeight={400}
                        boxShadow="none"
                    >
                        { formatNumber(artwork.units) } Unit{artwork.units > 1 ? 's' : ''}
                    </Tag>
                </Flex>
            </Box>
        </NextLink>
    )
}

export default Artwork