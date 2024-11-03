import { createSystem, defaultBaseConfig, defineConfig, defineTextStyles } from "@chakra-ui/react"

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

const customConfig = defineConfig({
    theme: {
        // 👇🏻 Define your tokens here
        extend: {
            textStyles,
        }
      }
})

export const system = createSystem(defaultBaseConfig, customConfig)