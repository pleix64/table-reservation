import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#F4CE14",
      900: "#495E57",
    },
    secondary: {
      100: "#EE9972",
      200: "#FBDABB",
      500: "#EDEFEE",
      900: "#333333",
    },
  },
  fonts: {
    heading: 'Markazi Text',
    body: 'Karla',
  },
  styles: {
    global: {
      p: {
        fontFamily: 'Karla',
        fontWeight: 'medium',
        fontSize: '1.2rem',
        //fontSize: '1rem',
      },
      'h1': {
        fontFamily: 'Markazi Text',
        fontWeight: 'medium',
        //fontSize: '5.333rem',
        fontSize: '3.667rem',
      },
      'h2': {
        fontFamily: 'Markazi Text',
        fontWeight: 'normal',
        //fontSize: '3.333rem',
        fontSize: '2.5rem',
      },
      'h3': {
        fontFamily: 'Karla',
        fontWeight: 'extrabold',
        fontSize: '1.667rem',
        textTransform: 'uppercase',
      },
      '.button': {
        p: {
          fontFamily: 'Karla',
          fontWeight: 'bold',
          fontSize: '1.333rem',
        }
      },
      '.section': {
        p: {
          fontWeight: 'extrabold',
          fontSize: '1.333rem',
        }
      },
      '.card': {
        p: {
          color: 'primary.900',
          fontWeight: 'normal',
          fontSize: '1.333rem',
          lineHeight: 1.5,
          maxWidth: '65rem',
        },
        'h3': {
          fontFamily: 'Karla',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textTransform: 'capitalize',
        },
      },
    }
  }
});

/*
const textStyles = defineTextStyles({
    body: {
      description: "The body text style - used in paragraphs",
      value: {
        fontFamily: "Tahoma",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24",
        letterSpacing: "0",
        textDecoration: "None",
        textTransform: "None",
      },
    },
  });
*/