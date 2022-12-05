import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <Container>
    <Box p={8}>{children}</Box>
  </Container>
)

export default Layout
