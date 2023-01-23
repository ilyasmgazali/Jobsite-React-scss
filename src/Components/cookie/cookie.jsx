import React from 'react'

import {
  Cookie,
} from '../images';

export default function cookie() {
  return (
    <div className="cookie">
    <p>
      Jobplus uses cookies. By continuing you are agreeing to
      our use of cookies. <a href=".">Learn more</a>.
    </p>
    <img src={Cookie} alt=""/>
  </div>
  )
}
