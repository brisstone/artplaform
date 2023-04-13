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

type ArticleItemProps = {
  item: string;
  link?: string;
};

function ArticleItem({ item, link = "/" }: ArticleItemProps) {
  return (
    <Col
      key={item}
      xs={12}
      sm={4}
      md={4}
      lg={3}
      style={{ marginBottom: "3rem" }}
    >
      <div style={{ position: "relative" }}>
        <NextLink href={link}>
          <Image
            src={item}
            alt="article"
            borderRadius={"xl"}
            h={[80, 60, 60, 80]}
            w="full"
            cursor={"pointer"}
          />
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
          <TagLabel color={"gray.500"}>1hr 15m 20s</TagLabel>
        </Tag>
      </div>

      <Box pb={2} borderBottomStyle="dashed" borderBottomWidth={1} mb={2}>
        <Heading fontSize={"large"} mb={2} mt={5}>
          <NextLink href={link} passHref>
            <Link>Dreams in Reality</Link>
          </NextLink>
        </Heading>
        <Text textTransform={"uppercase"} color="orange">
          $1,500.00
        </Text>
      </Box>
      <Flex alignItems={"center"} justify="space-between">
        <Flex gap={3} alignItems={"center"}>
          <Avatar src="/el-anatsui-potrait.png" size={"sm"} name="el-anatsui" />
          <Text color="#6B6968" fontSize={[12, 12, 12, 14]}>
            El Anatsui, 1996
          </Text>
        </Flex>

        <Tag variant={"outline"} fontSize={[12, 12, 12, 14]}>
          25 Units
        </Tag>
      </Flex>
    </Col>
  );
}

export default ArticleItem;
