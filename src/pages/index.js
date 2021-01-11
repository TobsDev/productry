import React, { Component } from 'react'
import Header from '../layout/header/header'
import Hero from '../components/hero/hero'
import Features from '../components/features/features'
import Downloads from '../components/downloads/download'
import FAQS from '../components/faqs/faqs'
import Newsletter from '../components/newsletter/newsletter'
import Footer from '../layout/footer/footer'
import '../scss/main.scss'


class IndexPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return ( 
      <div className = "indexPage" id="indexPage">
        <Header />
        <Hero />
        <Features />
        <Downloads />
        <FAQS />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default IndexPage