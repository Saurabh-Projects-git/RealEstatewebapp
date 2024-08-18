import React from "react"
import Back from "../data/Common/Back"
import PriceCard from "../home/price/PriceCard"
import pricing from '../../Assets/pricing.jpg'
import '../home/price/Price.css'

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={pricing} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing