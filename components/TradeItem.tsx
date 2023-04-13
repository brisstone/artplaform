// This component exists because data from the API is not consistent

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Box,
  Image,
  Heading,
  Link,
  Text,
  Flex,
  Avatar,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdTimer } from "react-icons/md";
import { LiveTrade } from "../d";
import dayjs from "dayjs";
import Countdown, { CountdownRenderProps } from "react-countdown";

type ItemProps = {
  item: LiveTrade;
  link?: string;
};

const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <span>ended</span>;
  } else {
    return (
      <span>
        {hours}h {minutes}m {seconds}s
      </span>
    );
  }
};

function Item({ item, link = "/" }: ItemProps) {
  return (
    <Box>
      <Box position="relative">
        <NextLink href={`${link}/${item?.listingId}`}>
          <Box
            h={[80, 60, 60, 80]}
            backgroundImage={`url(${
              item?.art_image || "/placeholder-image.png"
            })`}
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius={"3xl"}
            w="full"
            cursor={"pointer"}
          ></Box>
        </NextLink>

        <Tag
          size={"md"}
          variant="subtle"
          borderRadius={"full"}
          position={"absolute"}
          bottom={2}
          right={3}
        >
          <TagLeftIcon boxSize="15px" color={"orange.400"} as={MdTimer} />
          <TagLabel color={"gray.500"}>
            <Countdown date={item?.lease_duration_left} renderer={renderer} />
            {/* {dayjs(item?.end_time).format("HH MM SS")} */}
          </TagLabel>
        </Tag>
      </Box>

      <Box pb={2} borderBottomStyle="dashed" borderBottomWidth={1} mb={2}>
        <Heading fontSize={"large"} mb={2} mt={5}>
          <NextLink href={`${link}/${item?.listingId}`} passHref>
            <Link>{item?.name}</Link>
          </NextLink>
        </Heading>
        <Text textTransform={"uppercase"} color="orange">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item?.value)}
        </Text>
      </Box>
      
      <Flex alignItems={"center"} justify="space-between">
        <Flex gap={3} alignItems={"center"}>
          <Avatar size={"sm"} name={item?.artist_name} />
          <Text color="#6B6968" fontSize={[12, 12, 12, 14]}>
            {item?.artist_name}, {dayjs(item?.creation_year).format("YYYY")}
          </Text>
        </Flex>

        <Tag variant={"outline"} fontSize={[12, 12, 12, 14]}>
          {item?.total_units?.toLocaleString()} Units
        </Tag>
      </Flex>
    </Box>
  );
}

export default Item;
