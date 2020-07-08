import React, { Component } from 'react'
import Cookies from 'js-cookie';
import 'reset-css';
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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

    console.log('scroll', element);

    //let offset = document.getElementsByClassName('c-pageHeader')[0].offsetHeight;
    /*let count = (element.getBoundingClientRect().top + window.scrollY) - 0;

    return window.scroll({
      top: count,
      left: 0,
      behavior: 'smooth'
    });*/
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
        <section className="o-section o-section--pushBottom c-masthead c-masthead--lead c-masthead--centered">
          <div className="c-masthead__overlay">

            <div className="o-block o-block--centered">
              <div className="o-block__inner">
                <div className="o-block__container o-block__container--12">
                  <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                    <div className="o-inner">
                      <h2 className="o-title__headline c-masthead__headline">PPE for NHS staff fighting Covid-19</h2>
                      <p className="o-title__byline c-masthead__byline">#PPEforNHS is getting desperately needed Personal Protective Equipment to doctors, nurses and surgeons on the frontlines.</p>
                      <div className="c-masthead__buttons">
                        <a className="o-button o-button--red o-button--fill o-button--inline" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request PPE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="o-section o-section--pullTop c-cta">
          <div className="c-cta__section c-cta__section--lead">
            <div className="o-block o-block--centered o-block--verticalCentered c-imageBanner">
              <div className="o-block__inner">
                <div className="o-block__container o-block__container--3 c-imageBanner__item">
                  <div className="o-inner">
                    <Image alt="Some of our closest friends treating Covid-19 patients. Please help us protect them." filename="k.jpg" class="o-asset o-asset--shadow" />
                  </div>
                </div>
                <div className="o-block__container o-block__container--3 c-imageBanner__item">
                  <div className="o-inner">
                    <Image alt="" filename="8ee0a921-f6d0-4bb8-97f3-78cf8059aa60-1.jpeg" class="o-asset o-asset--shadow" />
                  </div>
                </div>
                <div className="o-block__container o-block__container--6 c-imageBanner__item">
                  <div className="o-inner">
                    <Image alt="" filename="38a535d7-df4b-4780-b744-bc946374228a.jpeg" class="o-asset o-asset--shadow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="c-tour">

          <section className="o-section c-tour__item c-tourItem">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--10">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Thanks to your generous donations, we've delivered over 8,000 pieces of Personal Protective Equipment to frontline health and social care workers 👏👏</h3>
                        <p className="o-title__byline">Some of the places your equipment has been helping:</p>
                      </header>
                      <div className="o-sp__2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--grey">
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner u-centered">
                          <div className="o-title o-title--small c-list__itemBody">
                            <h4 className="o-title__headline c-list__itemTitle">Woodside Nursing and Residential Care Home</h4>
                            <p className="o-title__byline">1,000 Type IIR Masks delivered</p>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner u-centered">
                          <div className="o-title o-title--small c-list__itemBody">
                            <h4 className="o-title__headline c-list__itemTitle">Caddington GP Surgery</h4>
                            <p className="o-title__byline">2,000 Type IIR Masks delivered</p>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner u-centered">
                          <div className="o-title o-title--small c-list__itemBody">
                            <h4 className="o-title__headline c-list__itemTitle">Richmond Hill Special School</h4>
                            <p className="o-title__byline">1,000 Type IIR Masks delivered</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section o-section--grey c-tour__item c-tourItem" id="what-is-this-campaign">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">             
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner u-centered">
                      <div className="o-title o-title--centered c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Get PPE</h4>
                        <p className="o-title__byline">Are you a NHS or other healthcare worker or procurer looking to fill equipment shortages? Contact us here to request equipment.</p>
                      </div>
                      <a className="o-button o-button--red o-button--fill o-button--inline" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request equipment</a>
                    </div>
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
                      <Link className="o-button o-button--red o-button--inline" to="/faq">Read our FAQs</Link>
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
                          <div className="c-list__itemBody o-title o-title--small c-blockQuote">
                            <p className="c-blockQuote__headline">"When representatives of the charities Crisis and Pathway reached out to me desperately seeking suppliers of protective equipment for an NHS trust, I knew I had to do more to help."</p>

                            <cite style={{display: '-ms-flexbox', display: 'flex', 'msFlexAlign': 'end', 'alignItems': 'flex-start', 'justifyContent': 'center'}}>
                              <figure className="o-asset o-asset--circle o-asset--small c-list__itemImage">
                                <Image alt="Xinjie Ma, co-founder of rct studio" filename='xinjie.jpg' class="o-asset__source" />
                              </figure>
                              <span style={{'flex': 1, 'paddingLeft': '2rem', 'textAlign': 'left', 'width': '50%'}}>
                                <h4 className="c-list__itemTitle o-title__headline">Xinjie Ma</h4>
                                <p className="o-title__byline">Co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                              </span>
                            </cite>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner u-centered">
                          <blockquote className="c-list__itemBody o-title o-title--small c-blockQuote">
                            <p className="c-blockQuote__headline">"My mum is a Nurse Practitioner who has dedicated a life of service to the NHS. I have friends working in ICUs across the country. The thought that they may lack the protective equipment that they need to be safe from infection is crushing. Every one of us must do everything we can to help."</p>

                            <cite style={{display: '-ms-flexbox', display: 'flex', 'msFlexAlign': 'start', 'alignItems': 'flex-start', 'justifyContent': 'center'}}>
                              <figure className="o-asset o-asset--circle o-asset--small c-list__itemImage">
                                <Image alt="George Madden, founder of pilot" filename='george.png' class="o-asset__source" />
                              </figure>
                              <span style={{'flex': 1, 'paddingLeft': '2rem', 'textAlign': 'left', 'width': '50%'}}>
                                <h4 className="c-list__itemTitle o-title__headline">George Madden</h4>
                                <p className="o-title__byline">Founder @<a className="o-inlineLink" href="https://pricetracker.pilot.money?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">pilot</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>, served @<a className="o-inlineLink" href="https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/london-regiment/" target="_blank">BritishArmyReserve</a>.</p>
                              </span>
                            </cite>
                          </blockquote>
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
                  <div className="o-block__container u-centered">
                    <div className="o-inner">
                      <Link className="o-button o-button--red o-button--inline" to="/team">Meet the Team</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <Share location='section_footer' />
      </Layout>
    )
  }
}

export default Home;