import React from 'react'
import BookFields from './BookFields'

export default function BookSection() {
  return (
    <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action="">
                <BookFields Type="text" Placeholder="Your Name"/>
                <BookFields Type="text" Placeholder="Phone Number"/>
                <BookFields Type="email" Placeholder="Your Email"/>
              <div>
                <select className="form-control nice-select wide">
                  <option value="" disabled >
                    How many persons?
                  </option>
                  <option value="">
                    2
                  </option>
                  <option value="">
                    3
                  </option>
                  <option value="">
                    4
                  </option>
                  <option value="">
                    5
                  </option>
                </select>
              </div>
              <div>
                <input type="date" className="form-control" />
              </div>
              <div className="btn_box">
                <button>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
