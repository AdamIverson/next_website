"use client"

import React from 'react'
import { Box, Button } from '@mui/system'
import Link from 'next/link'
import "../photos.css"


function Navbar() {
  return (
    <Box className="navbar">
        <Link className="link" href="/">
          home
        </Link>
        <Link className="link" href="/Resume">
          resume
        </Link>
        <Link className="link" href="/Developer">
          software development
        </Link>
        <Link className="link" href="/Photographer">
          photography
        </Link>
        <Link className="link" href="/Improv">
          improv
        </Link>
        <Link className="link" href="/Running">
          running
        </Link>
    </Box>
  )
}

export default Navbar;