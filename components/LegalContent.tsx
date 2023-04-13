import {
    Box,
    Heading,
    OrderedList,
    ListProps
} from "@chakra-ui/react"

export interface LegalContentProps {
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

const LegalContent: React.FC<LegalContentProps & ListProps> = (props) => {
    const {
        title,
        children,
        ...listProps
    } = props

    return (
        <Box maxW={920} mx="auto" px={5}>
            <Box w="full" bgColor="lightprimary" rounded="2xl" p={{ base: 6, lg: 12 }}>
                <Heading mb={{ base: 6, md: 12 }}>
                    { title }
                </Heading>

                <Box>
                    <OrderedList {...listProps}>
                        { children }
                    </OrderedList>
                </Box>
            </Box>
        </Box>
    )
}

export default LegalContent