import React from 'react'
import FoodImage from './FoodImage'
import MenuFilter from './MenuFilter'
import { Link } from 'react-router-dom'

export default function FoodSection() {
  return (

    <section className="food_section mt-5 layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul className="filters_menu">
        <MenuFilter classes="active" Name="All" filter="*" />
        <MenuFilter Name="Burger" filter="burger" />
        <MenuFilter  Name="Pizza" filter="pizza" />
        <MenuFilter  Name="Pasta" filter="pasta" />
        <MenuFilter Name="Fries" filter="fries" />
      </ul>

      <div className="filters-content">
        <div className="row grid">
        <FoodImage Name="Delicious Pizza" classes="col-sm-6 col-lg-4 all pizza" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$20" images="images/f1.png"/>
        <FoodImage Name=" Delicious Burger" classes="col-sm-6 col-lg-4 all burger" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$15" images="images/f2.png"/>
        <FoodImage Name="Delicious Pizza" classes="col-sm-6 col-lg-4 all pizza" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$20" images="images/f3.png"/>
        <FoodImage Name="Delicious Pasta" classes="col-sm-6 col-lg-4 all pasta" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$18" images="images/f4.png"/>
        <FoodImage Name="French Fries" classes="col-sm-6 col-lg-4 all fries" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$10" images="images/f5.png"/>
        <FoodImage Name="Delicious Pizza" classes="col-sm-6 col-lg-4 all pizza" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$15" images="images/f6.png"/>
        <FoodImage Name="Tasty Burger" classes="col-sm-6 col-lg-4 all burger" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$12" images="images/f7.png"/>
        <FoodImage Name="Tasty Burger" classes="col-sm-6 col-lg-4 all burger" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$10" images="images/f8.png"/>
        <FoodImage Name="Delicious Pasta" classes="col-sm-6 col-lg-4 all pasta" description="   Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" Price="$14" images="images/f9.png"/>
        </div>
      </div>
      <div className="btn-box">
        <Link to="/">
          View More
        </Link>
      </div>
    </div>
  </section>
  )
}
