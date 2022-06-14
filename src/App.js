import React from 'react'

import { About, Footer, Header, Experience } from './container';

import { Navbar } from './components'

import './App.scss'

const App = () => {
  return (
    <div className="app">
        <Navbar/> 
        <Header/>
        <About/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default App