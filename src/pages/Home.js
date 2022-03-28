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
        <Card src='https://images.unsplash.com/photo-1559336305-613022155766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Online Experiences'/>
        <Card src='https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80' title='Unique Stays'/>
        <Card src='https://images.unsplash.com/photo-1633602108759-40f528b59111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Entire Homes'/>
      </div>
      <div className='home__section'>
        <Card src='https://images.unsplash.com/photo-1474221550179-c492fb337327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Classic House'/>
        <Card src='https://images.unsplash.com/photo-1523688471150-efdd09f0f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' title='Forest Cabin'/>
        <Card src='https://images.unsplash.com/photo-1644135151632-05e0611d473d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80' title='Luxury Apartment'/>
      </div>
    </div>
  )
}

export default Home