import React from 'react'
import { Box } from '@mui/system'
import { Image } from 'mui-image'
import './photos.css'
import jsonData from '../public/jsonData'

function Photos() {
  return (
    <Box>
      <h1>Photos</h1>
      <Image></Image>
      <Box id="photoViewer">
        {jsonData.map((item) => {
          return (
            <Image 
              key={item.id} 
              className="photo"
              src="http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/prime-hatclub-2022-1_orig.jpg"
              >
              {/* <Box>
                {item.id}
              </Box>
              <Box>
                {item.name}
              </Box> */}
            </Image>
          )
        })}
      </Box>
    </Box>
  )
}

export default Photos