import React, { Component } from 'react'

export default class search extends Component {
  render() {
    return (
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
    )
  }
}
