import React from 'react'
import OffersItems from './OffersItems'

export default function OfferSection() {
  return (
    
  <section className="offer_section layout_padding-bottom">
  <div className="offer_container">
    <div className="container ">
      <div className="row">
        <OffersItems Image="images/o1.jpg" Title="Tasty Thursdays" Percentage="20%" />
        <OffersItems Image="images/o2.jpg" Title="Pizza Days" Percentage="15%" />
      </div>
    </div>
  </div>
</section>
    )
}
