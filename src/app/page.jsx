import Credit from '@/components/Credit'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Residence from '@/components/Residence'
import Services from '@/components/Services'
import Subscription from '@/components/Subscription'
import Testimonials from '@/components/Testimonials'
import TopDestination from '@/components/TopDestination'
import Travel from '@/components/Travel'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <TopDestination/>
    <Services/>
    <Travel/>
    <Testimonials/>
    <Subscription/>
    <Footer/>
    <Credit/>
    </>
  )
}

export default page