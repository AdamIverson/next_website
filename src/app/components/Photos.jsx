import React from 'react'
import { Box } from '@mui/system'
import './photos.css'
import jsonData from '../public/jsonData'

function Photos() {
  console.log("photos json", jsonData )
  return (
    <Box id="photoViewer">Photos</Box>
  )
}

export default Photos