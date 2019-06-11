import React, { Component } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Main/>
       <Gallery/>
       <Footer/>
      </div>
    )
  }
}
