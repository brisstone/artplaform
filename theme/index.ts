import { extendTheme } from "@chakra-ui/react"
import Button from "./Button"
import TabList from "./TabList"

export default extendTheme({
    fonts: {
      body: "Inter, system-ui, sans-serif",
      heading: "'DM Sans', Georgia, serif"
    },
    semanticTokens: {
      colors: {
        primary: {
          default: '#BF702A',
          _dark: '#BF702A',
          light: '#FBF7F3'
        },
        lightprimary: '#FBF7F3',
        secondary: {
          default: 'black',
          _dark: 'white',
        },
        error: 'red.500',
        success: 'green.500',
        dark: {
          default: '#3C3C3C',
          light: '#6B6968',
        },
        gray: '#D9D9D9',
        lightgray: '#F3F4F6',
        yellow: '#FFD24D',
        'warm-primary': '#FFD24D'
      },
    },
    colors: {
      brand: {
        default: '#BF702A',
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
      dark: {
        900: "#fff",
      },
    },

    components: {
      Button,
      TabList,
    }
})