import { shouldForwardProp, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";



const StyleDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const AnimationSection = ({ children, delay = 0 }) => {
  return (
    <StyleDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyleDiv>
  )
}
