import React from 'react'
import Header from '../components/Header'
import DisplayFilter from '../components/DisplayFilter'
import Movie from '../components/Movie'

function Home() {
  return (
    <div  className="min-h-screen bg-blue-50 pt-6">
  <Header />
        <DisplayFilter />
        <Movie/>
    </div>
  )
}

export default Home