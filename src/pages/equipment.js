import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

//data
import siteData from '../../data/manifest.json'

//components
import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/image'
import Share from '../components/share'

export default function Equipment() {
  return (
    <Layout>
      <Head title='Type IIR Fuild resitant surgical masks' />
      <section className="o-section o-section--pushBottom c-masthead c-masthead--centered">
        <div className="c-masthead__overlay">
          <div className="o-block o-block--centered">
            <div className="o-block__inner">
              <div className="o-block__container o-block__container--9">
                <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                  <div className="o-inner">
                    <h2 className="o-title__headline c-masthead__headline">Our equipment</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Share location='challenge_footer' />
    </Layout>
  )
}