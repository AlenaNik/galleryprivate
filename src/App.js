import React, { Component } from 'react'
import './App.css'
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import GalleryMain from './components/layout/Main/GalleryMain';
import Footer from './components/layout/Footer/Footer';

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
