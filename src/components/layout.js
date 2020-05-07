import React from 'react'

//styles
import '../styles/main.scss'

//components
import Head from '../components/head'
import PageHeader from '../components/pageHeader'
import Banner from '../components/banner'
import PageFooter from '../components/pageFooter'

export default function Layout({ children }) {
  return (
    <>
        <Head />
        <main className='o-site'>
            {/* <%= require('../components/gtm/gtmBody.html')({ siteData: siteData }) %> */}
            <Banner />
            <div className="o-site__inner">
                <PageHeader />
                {children}
                <PageFooter />
            </div>
        </main>
    </>
  )
}