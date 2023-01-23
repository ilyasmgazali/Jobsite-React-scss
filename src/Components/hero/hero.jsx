import React from 'react'

//import "../../Styles/main.css"
import "../../Styles/css/main.css"

import HamburgerImage from "../../Images/Hamburger.svg"

export default function hero() {
  return (

    <div className="hero hero--bgimg">
<div className="hero__wrap">
  <h1>Connecting candidates to their dream jobs</h1>
  <div className="form">
    <div className="form__group">
      <label className="form__label form__label--light">What</label>
      <input className="form__field" type="text" placeholder="Job title, skill or company"/>
    </div>

    <div className="form__group">
      <label className="form__label form__label--light">Where</label>
      <input className="form__field" type="text" placeholder="Town, city or postcode"/>
    </div>

    <div className="form__group">
      <input className="form__btn" type="submit" value="Search"/>
    </div>
  </div>
</div>
</div>

  )
}
