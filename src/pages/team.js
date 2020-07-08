import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

//data
import teamData from '../../data/team.json'
import siteData from '../../data/manifest.json'

//components
import Layout from '../components/layout'
import Share from '../components/share'
import Head from '../components/head'
import Image from '../components/image'

export default function Team() {
  return (
    <Layout>
      <Head title='Team' />
      <section className="o-section c-masthead c-masthead--">
        <div className="c-masthead__overlay">

          <div className="o-block o-block--centered">
            <div className="o-block__inner">
              <div className="o-block__container">
                <div className="o-title o-title--large o-title--centered c-masthead__title">
                  <div className="o-inner">
                    <h2 className="o-title__headline c-masthead__headline">Meet the team</h2>

                    <div className="c-avatars">
                      {teamData.members.map(member => {
                        return (
                          <a key={member.name} href={member.link ? member.link : '#'} target="_blank" className="c-avatars__item u-centered" style={{display: 'inline-block'}}>
                            <figure className="o-asset o-asset--circle">
                              <Image filename={member.photo} alt={member.name} class="o-asset__source team-member" />
                            </figure>
                            <span style={{display: 'block'}}>{member.name}</span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="c-tour">
        <section className="o-section o-section--grey c-tour__item c-tourItem" id="leadership">
          <div className="c-tourItem__inner">
            <div className="o-block o-block--centered">
              <div className="o-block__inner">
                <div className="o-block__container o-block__container--8">
                  <header className="o-title o-title--centered c-tourItem__title">
                    <div className="o-inner">
                      <h3 className="o-title__headline">Leadership</h3>
                    </div>
                  </header>
                </div>
                <div className="o-block__container o-block__container--12">
                  <ul className="c-list c-list--boxes c-list--boxesx3 c-list--boxesImage c-list--white">
                    <li className="c-list__item">
                      <div className="o-inner c-list__itemInner u-centered">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                          <Image alt="Xinjie Ma, co-founder of rct studio" filename='xinjie.jpg' class="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">Xinjie Ma</h4>
                          <p className="o-title__byline">Co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                        </div>
                      </div>
                    </li>
                    <li className="c-list__item">
                      <div className="o-inner c-list__itemInner u-centered">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                          <Image alt="George Madden, founder of pilot" filename='george.png' class="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">George Madden</h4>
                          <p className="o-title__byline">Founder @<a className="o-inlineLink" href="https://pricetracker.pilot.money?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">pilot</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>, served @<a className="o-inlineLink" href="https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/london-regiment/" target="_blank">BritishArmyReserve</a>.</p>
                        </div>
                      </div>
                    </li>
                    <li className="c-list__item">
                      <div className="o-inner c-list__itemInner u-centered">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                          <Image alt="Dr. Tara H Verity, GP" filename='tara.png' class="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">Dr. Tara H. Verity, MB BChir, MRCGP, DCH, DRCOG</h4>
                          <p className="o-title__byline">General Practitioner (GP) @<a className="o-inlineLink" href="https://www.caddingtonsurgery.co.uk/" target="_blank">Caddington Surgery</a>. Qualified 1991 @<a className="o-inlineLink" href="https://www.medschl.cam.ac.uk/" target="_blank">Cambridge</a>, worked in hospitals and General Practice in inner London.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="o-section c-cta c-cta--centered" id="cta">
        <div className="o-block o-block--centered">
          <div className="o-block__inner">
            <div className="o-block__container">
              <div className="c-cta__section c-cta__section--lead">
                <div className="o-title o-title--large c-cta__title">
                  <div className="o-inner">
                    <h2 className="o-title__headline c-cta__headline">Let's protect our nation's NHS staff.</h2>
                  </div>
                </div>
              </div>

              <div className="c-cta__section">
                <div className="o-inner">
                  <div className="o-title o-title--small">
                    <p className="o-title__headline">Your donation has the power to help save lives.</p>
                    <p className="o-title__byline">Every frontline NHS worker deserves to be properly protected against Covid-19.</p>
                  </div>
                  <div className="o-sp__2"></div>
                  <AnchorLink className="o-button o-button--fill o-button--red" to="/#donate">Donate PPE</AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Share location='team_footer' />
    </Layout>
  )
}