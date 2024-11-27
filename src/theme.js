import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const theme = extendTheme({
  colors: {
    primary: {
      // lemon series
      50: "#F6D73C",
      100: "#F4CE14",
      200: "#DBB80A",
      300: "#AA8F08",
      // greyed green series
      700: "#648278",
      800: "#59736A",
      900: "#495E57",
      950: "#374843",
    },
    secondary: {
      100: "#EE9972",
      150: "#F1AD8E",
      200: "#FBDABB",
      250: "#fce5cf",
      300: "#fdf2e7",
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
      },
      'h1': {
        fontFamily: 'Markazi Text',
        fontWeight: 'medium',
        fontSize: '3.667rem',
        lineHeight: '100%',
      },
      'h2': {
        fontFamily: 'Markazi Text',
        fontWeight: 'normal',
        fontSize: '2.5rem',
        lineHeight: '100%'
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
      '.footer': {
        h3: {
          fontWeight: "medium",
          fontSize: "1.2rem",
          textTransform: 'none',
        },
        p: {
          fontWeight: "medium",
          fontSize: "1rem",
        },
      },
      '.message': {
        p: {
          fontWeight: 'normal',
          fontSize: '1rem',
        }
      },
    }
  },
  components: {
    Button: buttonTheme,
  },
});