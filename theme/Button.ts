import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
    baseStyle: defineStyle({
        borderRadius: 'full',
        fontWeight: 400,
    }),

    sizes: {
        md: {
          fontSize: 'sm',
          p: 4
        },
        lg: {
          fontSize: 'sm',
          p: 7
        },
    },

    variants: {
      outline: {
        border: '1px solid',
        borderColor: 'primary',
        color: 'white',
      },

      solid: {
        bg: 'primary',
        color: 'white',
      },
    },

    defaultProps: {

    }
})