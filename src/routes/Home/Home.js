import React, { Component } from 'react'
import Hero from '../../components/hero/Hero'
import AccountHero from '../../components/hero/AccountHero'
import Carousel from '../../components/carousel/Carousel'


export default class Home extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Hero />
        <AccountHero />
        <Carousel />
      </div>
    )
  }
}
