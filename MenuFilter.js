import React from 'react'

export default function MenuFilter(props) {
  return (
    <li className={props.classes ? 'active ':''} data-filter={props.filter}>{props.Name}</li>
  )
}
