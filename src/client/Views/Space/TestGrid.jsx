import React from 'react'
import Gallery from 'react-grid-gallery'

const TestGrid = (props) => {
  return (
    <Gallery images={props.images} enableImageSelection={false} />
  )
}

export default TestGrid;