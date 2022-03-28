import React from 'react'
import Card from '../components/Card'
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
      <div className='home__section'>
        <Card src='https://images.unsplash.com/photo-1559336305-613022155766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
        <Card />
        <Card />
      </div>
      <div className='home__section'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home