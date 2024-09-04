import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Footer from './Components/Layout/Footer/Footer'
import NotFoundPage from '@/Pages/NotFoundPage/NotFoundPage'


const notFound = () => {
  return (
    <>
      <Navbar />
      <NotFoundPage />
      <Footer/>
    </>
  )
}

export default notFound