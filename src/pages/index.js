import React, { Component } from 'react'
import Cookies from 'js-cookie';
import 'reset-css';
import { Link } from 'gatsby'

//data
import siteData from '../../data/manifest.json'
import productsData from '../../data/products.json'

//video
import esmeVideo from '../assets/video/esme.mp4'
import esmePoster from '../assets/video/esme-poster.png'
import introVideo from '../assets/video/introduction/version-1.mp4'
import introPoster from '../assets/video/introduction/version-1-poster.png'

//SVGs
import airtable from '../assets/images/sponsors/Airtable_Logo.svg'
import intercom from '../assets/images/sponsors/Intercom_Logo.svg'
import slack from '../assets/images/sponsors/Slack_Logo.svg'

//components
import Layout from '../components/layout'
import Share from '../components/share'
import Head from '../components/head'
import Image from '../components/image'

class Home extends Component {
  constructor() {
    super()

    this.setCookieConsent = this.setCookieConsent.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
    this.initVideo = this.initVideo.bind(this)

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

    if (document.getElementById('read-more')) {
      document.getElementById('read-more').addEventListener('click', event => {
        event.preventDefault();
        this.scrollTo(document.getElementById('donate'));
      });
    }

    if (document.getElementById('video')) {
      console.log('has video');
      this.initVideo();
    }
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

  initVideo() {
    const player = document.getElementById('video');
    const video = player.querySelector('.o-asset__source');
    player.classList.add('is-ready');
  
    function togglePlay() {
      const playState = video.paused ? 'play' : 'pause';
      video[playState]();
      player.classList.toggle('is-playing');
    }
  
    player.addEventListener('click', event => {
      event.preventDefault();
      togglePlay();
    });
  };

  render() {
    return (
      <Layout>
        <Head />
        <section className="c-masthead c-masthead--lead">
          <div className="c-masthead__overlay">

            <div className="o-block">
              <div className="o-block__inner">
                <div className="o-block__container o-block__container--8">
                  <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                    <div className="o-inner">
                      <h2 className="o-title__headline c-masthead__headline">Help get <span className="c-nhs">NHS</span> staff the protective equipment they need to fight COVID-19.</h2>
                      <p className="o-title__byline c-masthead__byline">Together we can get desperately needed supplies to doctors, nurses and surgeons on the frontlines.</p>
                      <div className="c-masthead__buttons">
                        <a className="o-button o-button--fill o-button--red o-button--inline" href="#donate" id="read-more" data-event-id="read-more">How can I help?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-block__container o-block__container--4">
                  <div className="o-sp__2"></div>
                  <Image alt="Some of our closest friends treating covid-19 patients. Please help us protect them." filename='k.jpg' class="o-asset u-mp-2" />
                  <div className="o-sp__2"></div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="c-tour">

          <section className="o-section o-section--pushBottom c-tour__item c-tourItem">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--10">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">It's dangerous, stressful work caring for our nation.<br />Imagine doing it without proper protection against COVID-19.</h3>
                        <p className="o-title__byline u-visuallyHidden">Something.</p>
                      </header>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--10">
                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--pink">
                      <li className="c-list__item">
                          <div className="c-list__itemInner o-inner">
                            <div className="o-title o-title--small c-blockQuote">
                              <blockquote className="c-blockQuote__title">
                                <p className="o-title__headline c-blockQuote__headline">"We're running out of aprons and masks and we don't know where else they're coming from"</p>
                              </blockquote>
                              <cite className="c-blockQuote__name">Jackie Applebee, <span className="c-blockQuote__role">Doctors in Unite</span></cite>
                            </div>
                          </div>

                      </li>
                      <li className="c-list__item">
                          <div className="c-list__itemInner o-inner">
                            <div className="o-title o-title--small c-blockQuote">
                              <blockquote className="c-blockQuote__title">
                                <p className="o-title__headline c-blockQuote__headline">"After finishing at the Nightingale I'm being put on the team dealing with patients that have tested positive or have just come out of hospital. But they are only giving us surgical (paper) masks."</p>
                              </blockquote>
                              <cite className="c-blockQuote__name">Nurse on <span className="c-blockQuote__role">COVID-19 'RED' Ward</span></cite>
                            </div>

                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="o-sp__2"></div>

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--7 u-centered">
                    <div className="o-inner">
                      <div className="o-title o-title--small">
                        <h4 className="o-title__headline">You have the power to get desperately needed protective equipment into the hands of frontline health & social care workers. Now.</h4>
                        <p className="o-title__byline"></p>
                      </div>
                      <div className="o-sp__2"></div>
                      <a className="o-button o-button--fill o-button--red" href="#donate" data-event-id="donate" data-label="opening">Help donate protective equipment</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>



          <section className="o-section c-tour__item c-tourItem c-tourItem--grey" id="donate">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--6">
                    <header className="o-title o-title--centered c-tourItem__title">
                      <div className="o-inner">
                        <h3 className="o-title__headline">Help donate the protective equipment that will save lives</h3>
                        <p className="o-title__byline">Every penny you donate goes directly towards getting PPE to frontline health & social care workers. <a href="#how-it-works" className="o-inlineLink">Read how it works &rarr;</a></p>
                      </div>
                    </header>
                  </div>
                  <div className="o-block__container o-block__container--12">
                    <ul className="c-list c-list--boxes c-list--boxesx3 c-list--boxesImage c-list--white">
                    {productsData.map(item => {
                        return (
                          <li key={item.name} target="_blank" className="c-list__item">
                            <a href={siteData.externalLinks.donate + item.price} className="o-inner c-list__itemInner" data-event-id="donate" data-label={item.price}>
                              <div className="c-list__itemBody o-title o-title--centered">
                                <h4 className="c-list__itemTitle o-title__headline">{item.wording}</h4>
                                <p className="c-list__itemTitle o-title__byline">{item.price > 0 ? '£' + item.price : 'Amount of your choice'}</p>
                              </div>
                            </a>
                          </li>
                        )
                      })}

                    </ul>
                    
                    <div className="o-sp__2"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="o-section o-section--pushBottom c-tour__item c-tourItem" id="how-it-works">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">How it works</h3>
                      </header>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <ol className="c-list c-list--boxes c-list--boxesx3 c-list--pink">
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <h4 className="c-list__itemTitle">Choose an item to donate</h4>
                          <p>Your donation will provide life-protecting equipment to doctors, nurses and key healthcare workers treating COVID-19 patients</p>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <h4 className="c-list__itemTitle">We'll place a bulk order on your behalf</h4>
                          <p>We have already successfully connected the charities Crisis and Pathway with the same suppliers.</p>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <h4 className="c-list__itemTitle">Your equipment will be delivered within days</h4>
                          <p>With your help, we can protect thousands more NHS staff</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="o-sp__2"></div>

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container u-centered">
                    <div className="o-inner">
                      <div className="o-title o-title--small">
                        <h4 className="o-title__headline">Your donation has the power to help save lives.</h4>
                        <p className="o-title__byline">Every penny raised is going directly towards getting PPE to frontline health workers.</p>
                      </div>
                      <div className="o-sp__2"></div>
                      <a className="o-button o-button--fill o-button--red" href="#donate" data-event-id="donate" data-label="how-it-works">Help donate protective equipment</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem c-tourItem--grey">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Worried about scams? So are we.</h3>
                        <p className="o-title__byline">We've heard of scammers looking to capitalise on the fear and uncertainty during this time. We are not a scam.</p>
                        <p className="o-title__byline">Every member of the #PPEforNHS team is volunteering their time. 100% of money raised is for purchasing and delivering PPE to the frontline.</p>
                      </header>
                      <div className="o-sp__2"></div>
                      <Link className="o-button o-button--red" to="/scams">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem" id="what-is-this-campaign">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--4 u-centered">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Get PPE</h4>
                        <p className="o-title__byline">Are you a NHS or other healthcare worker or procurer looking to fill equipment shortages? Contact us here to request equipment.</p>
                      </header>
                      <a className="o-button o-button--red o-button--inline" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request equipment</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem c-tourItem--grey" id="who-we-are">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <header className="o-title o-title--centered c-tourItem__title">
                      <div className="o-inner">
                        <h3 className="o-title__headline">About us</h3>
                        <p className="o-title__byline">What started out as a small group helping health & social care workers find protective equipment has quickly grown into a team on a mission to end the protective equipment crisis.</p>
                      </div>
                    </header>
                  </div>
                  <div className="o-block__container o-block__container--12">
                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--boxesImage c-list--white">
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner u-centered">
                          <figure className="o-asset o-asset--circle c-list__itemImage">
                            <Image alt="Xinjie Ma, co-founder of rct studio" filename='xinjie.jpg' class="o-asset__source" />
                          </figure>
                          <div className="c-list__itemBody o-title o-title--small">
                            <h4 className="c-list__itemTitle o-title__headline">Xinjie Ma</h4>
                            <p className="o-title__byline">Co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                            <p>"When representatives of the charities Crisis and Pathway reached out to me desperately seeking suppliers of protective equipment for an NHS trust, I knew I had to do more to help."</p>
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
                            <p>"My mum is a Nurse Practitioner who has dedicated a life of service to the NHS. I have friends working in ICUs across the country. The thought that they may lack the protective equipment that they need to be safe from infection is crushing. Every one of us must do everything we can to help."</p>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item u-centered">
                        <div className="o-inner c-list__itemInner">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                            <Image alt="Dr. Tara H Verity, GP" filename='tara.png' class="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">Dr. Tara H. Verity,<br /> MB BChir, MRCGP, DCH, DRCOG</h4>
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

          <section className="o-section c-tour__item c-tourItem" id="faq">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Got Questions?</h3>
                      </header>
                      <Link className="o-button o-button--fill o-button--red" to="/faq">Read our FAQs</Link>
                    </div>
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
                      <h2 className="o-title__headline c-cta__headline">Let's protect our nation's <span className="c-nhs">NHS</span> staff.</h2>
                    </div>
                  </div>
                </div>

                <div className="c-cta__section">
                  <div className="o-inner">
                    <div className="o-title o-title--small">
                      <p className="o-title__headline">Your donation has the power to help save lives.</p>
                      <p className="o-title__byline">Every frontline NHS worker deserves to be properly protected against COVID-19.</p>
                    </div>
                    <div className="o-sp__2"></div>
                    <a className="o-button o-button--fill o-button--red" href={siteData.externalLinks.crowdfund} target="_blank" data-event-id="donate" data-label="section_cta">Go to donation page</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Share location='section_footer' />
      </Layout>
    )
  }
}

export default Home;