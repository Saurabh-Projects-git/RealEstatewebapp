
import React from "react"
import Back from "../data/Common/Back"
import '../home/Featured/Featured.css'
import FeaturedCard from "../home/Featured/FeaturedCard"
import services from '../../Assets/services.jpg'
const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services'  cover={services}  />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
