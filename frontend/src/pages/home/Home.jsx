import React from 'react'
import Banner from '../home/Banner.jsx'
import TopSellers from '../home/TopSellers.jsx'
import Recommended from '../home/Recommended.jsx'
import News from '../home/News.jsx'


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