import React from 'react'
import DatePicker from '../components/DatePicker'
import Header from '../components/Header'
import Hero from '../components/Hero'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <DatePicker />
        <Hero />
    </div>
  )
}

export default Home