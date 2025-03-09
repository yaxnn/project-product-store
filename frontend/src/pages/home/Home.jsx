import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
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