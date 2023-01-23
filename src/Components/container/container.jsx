import React from 'react'

import "../../Styles/css/main.css"

export default function container(props) {
    const { children } = props;
    return (
        <div className="container">
            { children }
        </div>
  )
}