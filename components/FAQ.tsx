import React, { useState } from 'react'
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { slugify } from 'utils/formatters'

const FAQ: React.FC<{ index: number, faq: any }> = ({ index, faq }) => {
    const [ isCollapsed, setIsCollapsed ] = useState(true)

    return (
        <AccordionItem id={`faq-${slugify(faq.q)}`} border={0} mb={[8, 10]}>
            <Heading>
                <AccordionButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    rounded="xl"
                    bgColor="#FBF7F3"
                    p={6}
                >
                    <Heading fontSize={['md', 'lg', 'xl']} fontWeight={400} flex={1} textAlign="left">
                        { faq?.q }
                    </Heading>

                    { isCollapsed ? <AddIcon /> : <MinusIcon /> }
                </AccordionButton>
            </Heading>

            <AccordionPanel pb={4} mt={2}>
                <Box
                    as="div"
                    dangerouslySetInnerHTML={{ __html: faq?.a }}
                    lineHeight={1.8}
                    fontSize={['sm', 'md']}
                />
            </AccordionPanel>
        </AccordionItem>
    )
}

export default FAQ