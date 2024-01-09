import React from 'react'

import Hero from '../components/hero'
import Features from '../components/Features'

import useFetchAndDispatchAllMovies from '../hooks/useFetchAndDispatchAllMovies'

const HomePage = () => {

  useFetchAndDispatchAllMovies()

  return (
    <div >
      <Hero />
      <Features />
    </div>
  )
}

export default HomePage