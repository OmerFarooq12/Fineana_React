import React from 'react'
import { Link } from 'react-router-dom'

export default function OffersItems(props) {
  return (
    <div className="col-md-6  ">
    <div className="box ">
      <div className="img-box">
        <img src={props.Image} alt="" />
      </div>
      <div className="detail-box">
        <h5>
         {props.Title}
        </h5>
        <h6>
          <span>{props.Percentage}</span> Off
        </h6>
        <Link to="/">
          Order Now 
        </Link>
      </div>
    </div>
  </div>
  )
}
