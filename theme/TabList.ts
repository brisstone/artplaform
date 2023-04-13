import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

export default defineMultiStyleConfig({
    baseStyle: definePartsStyle({
        tablist: {
            border: '1px solid',
            borderColor: 'gray'
        },
        tab: {
            fontFamily: 'heading',
        }, 
    }),

    variants: {
        'soft-rounded': definePartsStyle({
            tablist: {
                border: '1px solid',
                borderColor: 'gray'
            },

            tab: {
                backgroundColor: 'dark',
                color: 'white'
            }
        })
    }
})