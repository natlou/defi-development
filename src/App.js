import React from 'react'

import { About, Contact, Header, Experience } from './container';

import { Navbar } from './components'

import './App.scss'

const App = () => {
  return (
    <div className="app">
        <Navbar/> 
        <Header/>
        <About/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default App