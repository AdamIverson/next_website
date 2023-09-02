"use client"

import React from 'react'
import { Box, Button } from '@mui/system'
import Link from 'next/link'


function Navbar() {
  return (
    <Box>
        <Link href="/">
          Go Home
        </Link>
        <Link href="/Developer">
          Developer Portfolio
        </Link>
        <Link href="/Photographer">
          Photography Portfolio
        </Link>
    </Box>
  )
}

export default Navbar;