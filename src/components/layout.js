import React from 'react'

//styles
import '../assets/styles/main.scss'

//components
import PageHeader from './pageHeader'
import Banner from './banner'
import PageFooter from './pageFooter'

export default function Layout({ children }) {
  return (
    <main className='o-site'>
      <Banner />
      <div className="o-site__inner">
        <PageHeader />
        {children}
        <PageFooter />
      </div>
    </main>
  )
}