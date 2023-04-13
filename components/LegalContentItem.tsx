import { Box, Heading, ListItem } from "@chakra-ui/react";

export interface LegalContentItemProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}

const LegalContentItem: React.FC<LegalContentItemProps> = ({ title, children }) => {
    return (
        <ListItem mb={10}>
            <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500} mb={2}>
                { title }
            </Heading>
            <Box fontSize={{ base: 'sm', md: '15px' }} lineHeight={1.6}>
                { children }
            </Box>
        </ListItem>
    )
}

export default LegalContentItem