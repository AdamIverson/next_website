import React from 'react'
import { Box } from '@mui/system'
import { Image } from 'mui-image'
import './photos.css'
import jsonData from '../public/jsonData'

function Photos() {
  return (
    <Box>
      <Box id="photoViewer">
        {jsonData.map((item) => {
          return (
            <Box>
              <Image
                key={item.id}
                className="photo"
                src={item.url}
              >
              </Image>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Photos