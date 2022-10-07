import React from 'react'
import Header from '../components/Header'
import Textarea from '../components/Textarea'
import GoAdd from '../hooks/GoAdd'

function Home() {
  return (
    <div>
      <Header/>
      <div>
        <p>"</p>
        <Textarea/>
        <p>"</p>
      </div>
      <GoAdd/>
    </div>
  )
}

export default Home