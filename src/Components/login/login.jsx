import React from 'react'

export default function login() {
  return (
    <div className="form form--page">
    <div className="form__group form__group--page">
      <label className="form__label">Email</label>
      <input className="form__field" type="text" placeholder="Email"/>
    </div>

    <div className="form__group form__group--page">
      <label className="form__label">Password</label>
      <input className="form__field" type="text" placeholder="Password"/>
    </div>

    <div className="form__group form__group--page">
      <input className="form__btn" type="submit" value="Login"/>
    </div>

    <footer>Dont have an account? <a href="/register">Register</a></footer>
  </div>
  )
}
