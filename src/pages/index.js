import React, { Component } from 'react'
import Cookies from 'js-cookie';
import 'reset-css';

//styles
import '../styles/main.scss'

//data and assets
import JSONData from '../../data/manifest.json'
import arshib0ld from '../images/challenge/arshib0ld.jpg'
import mannyprime from '../images/challenge/mannyprime.jpg'
import friends from '../images/k.jpg'
import xinjie from '../images/team/xinjie.jpeg'
import george from '../images/team/george.jpeg'
import tara from '../images/team/tara.png'
import video from '../assets/video/esme.mp4'

//components
import Head from '../components/head'
import PageHeader from '../components/pageHeader'
import Banner from '../components/banner'
import PageFooter from '../components/pageFooter'
import Share from '../components/share'

// <%= require('../components/gtm/gtmBody.html')({ siteData: siteData }) %>

class Home extends Component {
  constructor() {
    super()

    this.setCookieConsent = this.setCookieConsent.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
    this.readMoreClick = this.readMoreClick.bind(this)

    const buildDate = new Date()
    this.runTime = buildDate
    this.weekday = buildDate.toLocaleString('en-US', { weekday: 'long' })
    this.date = buildDate.getDate()
    this.month = buildDate.toLocaleString('en-US', { month: 'long' })
    this.year = buildDate.getFullYear()
  }

  componentDidMount() {
    console.log(`Application started on ${this.runTime}`)
    this.setCookieConsent()
  }

  setCookieConsent() {
    let key = 'cookie_consent_accepted';
    let cookieConsentBanner = document.getElementById('cookieConsent')
    let cookieConsentAcceptButton = document.getElementById('cookieConsentAccept')
  
    if (cookieConsentBanner && cookieConsentAcceptButton) {
  
      if (Cookies.get(key)) {
  
        cookieConsentBanner.classList.add('is-hidden')
  
      } else {
  
        cookieConsentBanner.classList.remove('is-hidden')
  
        cookieConsentAcceptButton.addEventListener('click', () => {
  
          Cookies.set(key, true, { expires: 180 })
  
          if (Cookies.get(key)) {
            cookieConsentBanner.classList.add('is-hidden')
          } else {
            console.warn('Unable set cookies.')
          }
        });
  
      }
  
    } else {
      console.warn('No cookie consent banner!')
    }
  };

  scrollTo(element) {

    let offset = document.getElementsByClassName('c-pageHeader')[0].offsetHeight;
    let count = (element.getBoundingClientRect().top + window.scrollY) - offset;
  
    return window.scroll({
      top: count,
      left: 0,
      behavior: 'smooth'
    });
  };

  readMoreClick(e) {
    e.preventDefault();
    this.scrollTo(document.getElementById('what-is-this-campaign'))
  }

  render() {
    return (
      <>
        <Head />
        <main className='o-site'>
          <Banner />
          <div className="o-site__inner">
            <PageHeader />
            <section className="o-section c-masthead c-masthead--centered">
              <div className="c-masthead__overlay">
                  
                  <div className="o-block">
                    <div className="o-block__container">
                      <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                        <div className="o-inner">
                          <h2 className="o-title__headline c-masthead__headline">Help get <span className="c-nhs">NHS</span> staff the protective equipment they need in the fight against COVID-19.</h2>
                          <div className="c-masthead__buttons">
                            <a className="o-button o-button--fill o-button--red o-button--masthead" href={JSONData.externalLinks.crowdfund} target="_blank" data-event-id="donate" data-label="section_masthead">Donate</a>
                            <a className="o-button o-button--red o-button--masthead" href="#why-this-campaign" id="read-more" data-event-id="read-more" onClick={e => this.readMoreClick(e)}>Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </section>

            <section className="o-section c-cta c-cta--challenge">
              <div className="c-cta__section c-cta__section--lead">
                <div className="o-block o-block--centered u-visuallyHiddenTablet">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <div className="o-title o-title--centered c-cta__title">
                        <h2 className="o-title__headline c-cta__headline">Join the DIY #PPEforNHS Challenge and help save lives! 🥽</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-block o-block--centered o-block--verticalCentered c-imageBanner">
                  <div className="o-block__container o-block__container--3 c-imageBanner__item">
                    <div className="o-inner">
                      <img alt="@arshib0ld with DIY plastic wrapper PPE via @PPEforNHS Instagram" src={arshib0ld} className="o-asset" />
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--4 c-imageBanner__item">
                    <div className="o-inner">
                      <video autoPlay={true} loop muted poster="" className="o-asset">
                        <source src={video} type="" className="o-video__source" />
                      </video>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--3 c-imageBanner__item">
                    <div className="o-inner">
                      <img alt="@manny.prime with PPE via @PPEforNHS Instagram" src={mannyprime} className="o-asset" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-cta__section">
                <div className="o-block o-block--centered u-visuallyHiddenMobile">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <div className="o-title o-title--centered c-cta__title">
                        <p className="o-title__headline c-cta__headline">Join the DIY #PPEforNHS Challenge and help save lives! 🥽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-cta__section">
                <div className="o-block o-block--centered u-centered">
                  <div className="o-block__container">
                    <div className="o-inner">
                      <a className="o-button o-button--fill o-button--red" href="https://www.instagram.com/p/B_hccp9nFLY/" target="_blank" data-event-id="challenge" data-label="section_cta">Find out more &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="c-tour">

              <section className="o-section c-tour__item c-tourItem c-tourItem--pink" id="what-is-this-campaign">
                <div className="c-tourItem__inner">
                  <div className="o-block o-block--centered">
                    <div className="o-block__container o-block__container--7">
                      <div className="o-inner">
                        <header className="o-title o-title--large o-title-- c-tourItem__title">
                          <h3 className="o-title__headline c-tourItem__headline"><span className="c-nhs">NHS</span> staff lack vital protective equipment for the fight against COVID-19. We are changing that.</h3>
                          <p className="o-title__byline">#PPEForNHS is a non-profit, citizen-led campaign collecting donations from the public to supply Personal Protective Equipment to the UK's frontline healthcare workers.</p>
                        </header>
                      </div>
                    </div>
                    <div className="o-block__container o-block__container--5">
                      <div className="o-inner">
                        <img alt="Some of our closest friends treating covid-19 patients. Please help us protect them." src={friends} className="o-asset u-mp-2" />
                        <div className="o-sp__2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="o-sp__2"></div>

                  <div className="o-block o-block--trio">
                    <div className="o-block__container o-block__container--4">
                      <div className="o-inner">
                        <header className="o-title o-title--small c-tourItem__title">
                          <h4 className="o-title__headline c-tourItem__headline">Support us</h4>
                          <p className="o-title__byline">Your donation to the #PPEforNHS campaign helps frontline healthcare workers across the UK get the protection they deserve.</p>
                        </header>
                        <a className="o-button o-button--fill o-button--red" href={JSONData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_triage">Donate now</a>
                      </div>
                    </div>
                    <div className="o-block__container o-block__container--4">
                      <div className="o-inner">
                        <header className="o-title o-title--small c-tourItem__title">
                          <h4 className="o-title__headline c-tourItem__headline">Get PPE</h4>
                          <p className="o-title__byline">Are you a NHS or other healthcare worker or procurer looking to fill equipment shortages? Contact us here to request equipment.</p>
                        </header>
                        <a className="o-button o-button--red" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request equipment</a>
                      </div>
                    </div>
                    <div className="o-block__container o-block__container--4">
                      <div className="o-inner">
                        <header className="o-title o-title--small c-tourItem__title">
                          <h4 className="o-title__headline c-tourItem__headline">Join us</h4>
                          <p className="o-title__byline">This project is powered by the passion, kindness and dedication of our team of volunteers. If this sounds like you, please submit your information below.</p>
                        </header>
                        <a className="o-button o-button--red" href="https://airtable.com/shrtCNiwmyonFzCXA" target="_blank" data-event-id="join" data-label="section_triage">Volunteer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="o-section c-tour__item c-tourItem c-tourItem" id="why-this-campaign">
                <div className="c-tourItem__inner">
                  <header className="o-title o-title--centered c-tourItem__title">
                    <div className="o-block">
                      <div className="o-inner">
                        <h3 className="o-title__headline c-tourItem__headline">Why did we start #PPEforNHS?</h3>
                      </div>
                    </div>
                  </header>
                  <div className="o-block">
                    <div className="o-block__container">
                      <div className="o-inner">
                        <ol className="c-list c-list--boxes">
                          <li className="c-list__item">
                            <h4 className="c-list__itemTitle">Frontline NHS staff are going unprotected</h4>
                            <p>Doctors, nurses and key healthcare workers are being asked to treat COVID-19 patients without access to the Personal Protective Equipment needed to keep them safe from infection.</p>
                          </li>
                          <li className="c-list__item">
                            <h4 className="c-list__itemTitle">We have direct links with factories that can deliver vital protective equipment</h4>
                            <p>Our extensive network built over years of commerce between the UK and China is already helping us connect desperate individual frontline staff with equipment.</p>
                          </li>
                          <li className="c-list__item">
                            <h4 className="c-list__itemTitle">You can help protect thousands more NHS staff</h4>
                            <p>Your donation will allow us to purchase the masks, gloves, gowns and respirators NHS staff need. Every frontline NHS worker deserves to be properly protected against COVID-19.</p>
                          </li>
                        </ol>
                      </div>
                      <div className="o-sp__2"></div>
                    </div>
                  </div>
                  <div className="o-block o-block--centered">
                    <div className="o-block__container u-centered">
                      <div className="o-inner">
                        <a className="o-button o-button--fill o-button--red" href={JSONData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_why">Donate now</a>
                        <Share share_class='c-share' title='Share the message' location='section_why' />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="o-section c-tour__item c-tourItem c-tourItem--grey" id="news">
                <div className="c-tourItem__inner">
                  <header className="o-title o-title--centered o-title--small c-tourItem__title">
                    <h3 className="o-note o-title__headline">In the headlines</h3>
                  </header>
                  <div className="o-title c-tourItem__title">
                    <div className="o-block o-block--centered">
                      <div className="o-block__container--8">
                        <div className="o-inner">
                          <div className="o-title c-blockQuote">
                            <blockquote className="c-blockQuote__title">
                              <p className="o-title__headline c-blockQuote__headline">"We're running out of aprons and masks and we don't know where else they're coming from"</p>
                            </blockquote>
                            <cite className="c-blockQuote__name">Jackie Applebee, <span className="c-blockQuote__role">Doctors in Unite</span> <span className="c-blockQuote__source">Read more in the <a href="https://www.ft.com/content/18bf272b-0b3c-433c-a484-7f653c82ff1b" className="o-inlineLink" target="_blank">Financial Times</a>.</span></cite>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="o-block o-block--centered">
                      <div className="o-block__container--8">
                        <div className="o-inner">
                          <div className="o-title c-blockQuote">
                            <blockquote className="c-blockQuote__title">
                              <p className="o-title__headline c-blockQuote__headline">"Weeks into this crisis, there are colleagues in all settings – hospitals, community or care homes – who have not been provided with personal protective equipment"</p>
                            </blockquote>
                            <cite className="c-blockQuote__name">Dame Donna Kinnair, Chief Executive, <span className="c-blockQuote__role">Royal College of Nursing</span> <span className="c-blockQuote__source">Read more in <a className="o-inlineLink" href="https://www.telegraph.co.uk/news/2020/03/30/nurses-caring-coronavirus-patients-no-protection-warns-union/" target="_blank">The Telegraph</a>.</span></cite>
                          </div>
                        </div>
                      </div>
                      <div className="o-block__container u-centered">
                        <div className="o-inner">
                          <a className="o-button o-button--red" href={JSONData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_news">Donate now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="o-section c-tour__item c-tourItem" id="who-we-are">
                <div className="c-tourItem__inner">
                  <div className="o-block o-block--centered">
                    <div className="o-block__container">
                        <header className="o-title o-title--centered o-title--small c-tourItem__title">
                          <div className="o-inner">
                            <h3 className="o-note o-title__headline u-visuallyHiddenMobile">Who are we?</h3>
                          </div>
                        </header>
                    </div>
                    <div className="o-block__container o-block__container--6">
                      <div className="o-title c-tourItem__title">
                        <div className="o-inner">
                          <p className="o-title__headline c-tourItem__headline">We are a group of concerned citizens with deep roots in both the UK and China. <span className="o-em">We've seen what happens when healthcare workers aren't adequately protected against COVID-19.</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="o-block__container o-block__container--6">

                      <div className="o-title">
                        <div className="o-inner">
                          <p className="o-title__byline">When a group of doctors and nurses reached out to us desperately seeking suppliers of protective equipment, we knew we had to do more to help.</p>
                          <p className="o-title__byline">We come from a range of industries and backgrounds including healthcare, technology, business and design and are actively seeking help from passionate individuals who can bolster the campaign for <a className="o-inlineLink o-inlineLink--red" href="https://twitter.com/PPEforNHS" target="_blank">#PPEforNHS</a>. Please see the FAQ for more details, or get in touch with us <a className="o-inlineLink" href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank">here</a>.</p>
                        </div>
                      </div>

                    </div>
                    <div className="o-block__container o-block__container--12">

                      <div className="o-sp__2"></div>

                      <div className="c-list c-list--image">
                        <div className="o-title o-title--small c-list__title u-visuallyHidden">
                          <h4 className="o-title__headline">Our members include:</h4>
                        </div>
                        <ul className="o-block c-list__items">
                          <li className="o-block__container o-block__container--4 o-title o-title--small c-list__item">
                            <div className="o-inner">
                              <img alt="Xinjie Ma, founder at rct studio" className="c-list__itemImage" src={xinjie} />
                              <h5 className="o-title__headline c-list__itemTitle">Xinjie Ma</h5>
                              <p>Xinjie is co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                            </div>
                          </li>
                          <li className="o-block__container o-block__container--4 o-title o-title--small c-list__item">
                            <div className="o-inner">
                              <img alt="George Madden, founder at pilot" className="c-list__itemImage" src={george} />
                              <h5 className="o-title__headline c-list__itemTitle">George Madden</h5>
                              <p>George is founder @<a className="o-inlineLink" href="https://pricetracker.pilot.money?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">pilot</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>, served @<a className="o-inlineLink" href="https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/london-regiment/" target="_blank">BritishArmyReserve</a>.</p>
                            </div>
                          </li>
                          <li className="o-block__container o-block__container--4 o-title o-title--small c-list__item">
                            <div className="o-inner">
                              <img alt="Dr. Tara H Verity, GP" className="c-list__itemImage" src={tara} />
                              <h5 className="o-title__headline c-list__itemTitle">Dr. Tara H. Verity, MB BChir, MRCGP, DCH, DRCOG</h5>
                              <p>Tara is a General Practitioner (GP) at <a className="o-inlineLink" href="https://www.caddingtonsurgery.co.uk/" target="_blank">Caddington Surgery</a>. Qualified 1991 @<a className="o-inlineLink" href="https://www.medschl.cam.ac.uk/" target="_blank">Cambridge</a>, worked in hospitals and General Practice in inner London.</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="o-sp__2"></div>

                    </div>
                  </div>
                  <div className="o-block o-block--centered">
                    <div className="o-block__container">
                      <div className="o-inner u-centered">
                        <a className="o-button o-button--red" href={JSONData.externalLinks.crowdfund} target="_blank" data-event-id="donate" data-label="about">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="o-section c-tour__item c-tourItem c-tourItem--faq" id="faq">
                <div className="c-tourItem__inner">
                  <div className="o-block o-block--centered">
                    <div className="o-block__container o-block__container--8">
                      <div className="c-list c-list--faq">
                        <div className="o-inner">
                          <header className="o-title c-tourItem__title c-list__title">
                            <h3 className="o-title__headline c-tourItem__headline">Frequently Asked Questions</h3>
                            <span className="o-note">Updated {this.weekday} {this.date} {this.month}, {this.year}</span>
                          </header>
                          <ul className="c-list__items">
                            <li className="c-list__item">
                              <div className="o-title o-title--small">
                                <h4 className="o-title__headline">How can I donate?</h4>
                                <p className="o-title__byline">Click <a className="o-inlineLink" href="https://www.crowdfunder.co.uk/ppefornhsuk" target="_blank">here</a> or on any of the 'donate' buttons to visit our Crowdfunder page.</p>
                              </div>
                            </li>
                            <li className="c-list__item">
                              <div className="o-title o-title--small">
                                <h4 className="o-title__headline">Why should I donate to you?</h4>
                                <p className="o-title__byline">We have unparalleled connections to manufacturers in China - we are actively connecting individual cases with suppliers - and unlike like big charities, every penny raised will go directly towards purchasing PPE.</p>
                              </div>
                            </li>
                            <li className="c-list__item">
                              <div className="o-title o-title--small">
                                <h4 className="o-title__headline">What will you do with any leftover money?</h4>
                                <p className="o-title__byline">Every pound and every penny we raise will go directly towards purchasing the equipment needed and getting it to frontline staff. If for any reason we are unable to achieve our goals we will donate the money to charities supporting NHS staff in other ways.</p>
                              </div>
                            </li>
                            <li className="c-list__item">
                              <div className="o-title o-title--small">
                                <h4 className="o-title__headline">Are there other ways to get involved?</h4>
                                <p className="o-title__byline">Absolutely! We are looking for people to help us create content, spread the message, and ultimately raise money. Get in touch with us <a className="o-inlineLink" href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank">here</a>.</p>
                              </div>
                            </li>
                            <li className="c-list__item">
                              <div className="o-title o-title--small">
                                <h4 className="o-title__headline">What equipment can you supply?</h4>
                                <p className="o-title__byline">We have access to certified suppliers of respirator and surgical masks, gowns, gloves, coveralls, eye protection and other essential protective equipment. If you are NHS staff, please <a className="o-inlineLink" href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank">contact us for more information</a>.</p>
                              </div>
                            </li>
                            <li className="c-list__item">
                                <div className="o-title o-title--small">
                                  <h4 className="o-title__headline">Can I get protective equipment from you for myself, family and friends?</h4>
                                  <p className="o-title__byline">Right now the need is greatest for frontline NHS staff - too many of whom are are treating patients without adequate protection. For that reason all of the stock we order will be directed towards them, and not private individuals or households.</p>
                                  <p className="o-title__byline">Please support and protect NHS staff by staying at home and following <a className="o-inlineLink" href="https://www.gov.uk/coronavirus" target="_blank" >government advice</a>.</p>
                                </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            <section className="o-section c-cta c-cta--centered" id="cta">
              <div className="o-block o-block--centered">
                <div className="o-block__container">
                  <div className="c-cta__section c-cta__section--lead">
                    <div className="o-title o-title--large c-cta__title">
                      <div className="o-inner">
                        <h2 className="o-title__headline c-cta__headline">Let's protect our nation's <span className="c-nhs">NHS</span> staff.</h2>
                      </div>
                    </div>
                  </div>
                  <div className="c-cta__section">
                    <div className="o-inner">
                      <a className="o-button o-button--fill o-button--red" href={JSONData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_cta">Donate now</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="o-section o-section--grey">
              <div className="o-block">
                <div className="o-block__container">
                  <Share share_class='c-share c-share--banner' title='Help share the message' location='section_footer' />
                </div>
              </div>
            </div>
            <PageFooter />
          </div>
        </main>
      </>
    )
  }
}

export default Home;