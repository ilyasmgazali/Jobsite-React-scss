import React from 'react'

import {
  TechSmall,
  
  EngSmall,
  EngBig,

  Health,
} from '../images';


export default function sector() {
  return (
    
    <div className="sector">
      <h2>Choose your sector</h2>
      <p>jobs across multiple sectors. See the latest roles now</p>
      
      <div className="sector__types">
        {/**  <!-- SECTOR 1 --> */} 
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcSet={TechSmall} media="(min-width: 767px)"/>
            <source srcSet={TechSmall}/>
            <img src={TechSmall} alt=""/>
          </picture>
          <div className="sector__name">Technology</div>
          <ul className="sector__list">
            <li><a href=".">Accountancy jobs <span>5, 757</span></a></li>
            <li><a href=".">Acturial jobs <span>5, 757</span></a></li>
            <li><a href=".">Admin, Secretarial jobs <span>5, 757</span></a></li>
          </ul>
        </div>
        {/**  <!-- SECTOR 2 --> */} 
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcSet={EngBig}media="(min-width: 767px)"/>
            <source srcSet={EngSmall}/>
            <img src={EngSmall}alt=""/>
          </picture>
          <div className="sector__name">Engineering</div>
          <ul className="sector__list">
            <li><a href=".">Accountancy jobs <span>5, 757</span></a></li>
            <li><a href=".">Acturial jobs <span>5, 757</span></a></li>
            <li><a href=".">Admin, Secretarial jobs <span>5, 757</span></a></li>
          </ul>
        </div>

        {/**  <!-- SECTOR 3 --> --> */}
        <div className="sector__wrap" >
          <picture className="sector__picture">
            <source srcSet={Health} media="(min-width: 767px)"/>
            <source srcSet={Health}/>
            <img src={Health} alt=""/>
          </picture>
          <div className="sector__name">Technology</div>
          <ul className="sector__list">
            <li><a href=".">Accountancy jobs <span>5, 757</span></a></li>
            <li><a href=".">Acturial jobs <span>5, 757</span></a></li>
            <li><a href=".">Admin, Secretarial jobs <span>5, 757</span></a></li>
          </ul>
        </div>
        {/**  <!-- MOBILE VIEW - RESPONSIVE ONLY --> */}
        <a href=".">
          <div className="sector__browse">Browse all sectors</div>
        </a>
        <ul className="sector__mlist">
          <li><a href=".">Accountancy jobs <span>5, 757</span></a></li>
          <li><a href=".">Acturial jobs <span>5, 757</span></a></li>
          <li><a href=".">Admin, Secretarial jobs <span>5, 757</span></a></li>
        </ul>
      </div>

    </div>
  )
}
