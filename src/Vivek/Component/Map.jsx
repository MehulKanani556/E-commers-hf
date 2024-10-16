import React from 'react'

const Map = ({ data, children }) => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {children(item)}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Map
