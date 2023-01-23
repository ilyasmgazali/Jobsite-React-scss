import React from 'react'

export default function hero_simple(props) {
    const {title} = props
  return (
    <div class="hero">
        <div class="hero__wrap">
            <h2>{title}</h2>
        </div>
    </div>    
  )
}
