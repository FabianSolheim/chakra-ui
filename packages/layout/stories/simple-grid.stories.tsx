import * as React from "react"
import { Box, SimpleGrid } from "../src"

export default {
  title: "Components / Layout / SimpleGrid",
}

export const WithColumns = () => (
  <SimpleGrid columns={[2, null, 3]} spacing="40px">
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
  </SimpleGrid>
)

export const WithAutofit = () => (
  <SimpleGrid minChildWidth="300px" spacing="40px">
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
  </SimpleGrid>
)

export const WithColSpan = () => (
  <SimpleGrid
    columns={{ base: 2, md: 4 }}
    spacing={{ base: "24px", md: "40px" }}
  >
    <Box bg="green.500" colSpan={{ base: 1, md: 3 }}>
      Column 1
    </Box>
    <Box bg="pink.500" colSpan={{ base: 1, md: 1 }}>
      Column 2
    </Box>
  </SimpleGrid>
)
