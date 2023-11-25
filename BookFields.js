import React from 'react'

export default function BookFields(props) {
  return (
    <div>
     <input type={props.Type} className="form-control" placeholder={props.Placeholder} />
    </div>
  )
}
