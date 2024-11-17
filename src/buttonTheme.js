import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
    bg: "primary.100",
    color: "black",
    _hover: {
        bg: "primary.200",
        transform: "scale(1.02)",
        boxShadow: "md",
    },
    _active: {
        bg: "primary.300",
        transform: "scale(1.0)",
        boxShadow: "xs",
    }
});

const brandSecondary = defineStyle({
    bg: "secondary.100",
    color: "black",
    _hover: {
        bg: "secondary.150",
        transform: "scale(1.02)",
        boxShadow: "md",
        _disabled: {
            bg: "secondary.150",
            opacity: "0.2",
        },
    },
    _active: {
        bg: "secondary.200",
        transform: "scale(1.0)",
        boxShadow: "xs",
    },
});

export const buttonTheme = defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        fontFamily: 'Karla',
        fontWeight: 'bold',
    },
    // Styles for the size variations
    sizes: {
        md: {
            fontSize: '1.2rem',
        }
    },
    // Styles for the visual style variations
    variants: { brandPrimary, brandSecondary },
    // The default `size` or `variant` values
    defaultProps: {
        size: 'md',
    },
});

// '.button': {
//         p: {
//           fontFamily: 'Karla',
//           fontWeight: 'bold',
//           fontSize: '1.333rem',
//         }
//       },