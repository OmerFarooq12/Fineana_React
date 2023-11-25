import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodImage(props) {
  return (
    <div className= {props.classes}>
    <div className="box">
      <div>
        <div className="img-box">
          <img src={props.images} alt="" />
        </div>
        <div className="detail-box">
          <h5>
          {props.Name}
          </h5>
          <p>
          {props.description}
          </p>
          <div className="options">
            <h6>
             {props.Price}
            </h6>
            <Link to="/">
          
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
