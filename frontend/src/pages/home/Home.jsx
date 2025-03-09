import React from 'react'
import Banner from './Banner'
import TopSellers from '../home/TopSellers'
import Recommended from '../home/Recommended'
import News from '../home/News'


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