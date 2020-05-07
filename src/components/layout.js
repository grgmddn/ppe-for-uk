import React from 'react'

import Head from '../components/head'
import PageHeader from '../components/pageHeader'
import Banner from '../components/banner'
import PageFooter from '../components/pageFooter'

export default function Layout({ children }) {
  return (
    <>
        <Head />
        <main className='o-site'>
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