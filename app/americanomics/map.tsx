import React from 'react'

const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="map_macro_provinces.html"
        className="w-full h-full"
        style={{ border: 'none' }}
        title="Korea Coffee map"
      />
    </div>
  )
}

export default Map
