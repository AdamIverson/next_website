import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import About from './About/page'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  )
}
