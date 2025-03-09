import React from 'react'
import Banner from './Banner.jsx'
import TopSellers from './TopSellers.jsx'
import Recommended from './Recommended.jsx'
import News from './News.jsx'


const Home = () => {
  return (
    <>
    <Banner/>
    <TopSellers />
    <Recommended/>
    <News/>
    
    </>
  )
}

export default Home