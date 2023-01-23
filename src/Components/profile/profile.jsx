import React from 'react'

export default function profile() {
  return (
    <div className="form form--page">
    <div className="form__group form__group--page">
      <label className="form__label">Desire job title</label>
      <input className="form__field" type="text" placeholder="Desired job title"/>
    </div>

    <div className="form__group form__group--page">
      <label className="form__label">Min salary per annum</label>
      <input className="form__field" type="text" placeholder="Min salary per annum"/>
    </div>

    <div className="form__group form__group--page">
      <label className="form__label">Job type</label><br/>
      <p className="form__checkbox"> <input type="checkbox"/> Permanent </p>
      <p className="form__checkbox"> <input type="checkbox"/> Temporary </p>
      <p className="form__checkbox"> <input type="checkbox"/> Contract </p>
    </div>
    
    <div className="form__group form__group--page">
      <label className="form__label">Sector</label><br/>
      <select className="form__select">
        <option selected="selected">Choose a sector</option>
        <option>Technology</option>
        <option>Engineering</option>
        <option>Health</option>
      </select>
    </div>

    <div className="form__group form__group--page">
      <label className="form__label">Experience</label><br/>
      <textarea className="form__textarea"></textarea>
    </div>

    <div className="form__group form__group--page">
      <input className="form__btn" type="submit" value="Register"/>
    </div>

    <footer>Dont have an account? <a href="register.html">Register</a></footer>
  </div>
  )
}
