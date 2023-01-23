import React from 'react'

export default function listings_filter(props) {
  const {children} = props  
  return (
    <div className="listing">
        {children}
    </div>
  )
}
