"use client"

import React from 'react'
import { Box, List, ListItem, ListItemText } from '@mui/system'
import Photos from '../components/Photos'

function Photography() {
  return (
    <Box>
      <h1 className="title">photography</h1>
      <Box className="container">
        <Photos />
      </Box>
    </Box>
  )
}

export default Photography