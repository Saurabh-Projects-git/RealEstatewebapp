import React from "react"
import Back from "../data/Common/Back"
import RecentCard from "../home/recent/RecentCard"
import '../home/recent/Recent.css'
import about from '../../Assets/about.jpg'

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={about} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog