import React, { Component } from 'react'
import './App.css'
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import GalleryMain from './components/layout/GalleryMain';
import Footer from './components/layout/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Main/>
       <GalleryMain/>
       <Footer/>
      </div>
    )
  }
}
