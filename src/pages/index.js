import React, { Component } from 'react'
import Cookies from 'js-cookie';
import 'reset-css';

//data and assets
import siteData from '../../data/manifest.json'
import arshib0ld from '../assets/images/challenge/arshib0ld.jpg'
import mannyprime from '../assets/images/challenge/mannyprime.jpg'
import friends from '../assets/images/k.jpg'
import xinjie from '../assets/images/team/xinjie.jpg'
import george from '../assets/images/team/george.png'
import esmeVideo from '../assets/video/esme.mp4'
import esmePoster from '../assets/video/esme-poster.png'
import introVideo from '../assets/video/introduction/version-1.mp4'
import introPoster from '../assets/video/introduction/version-1-poster.png'
import airtable from '../assets/images/sponsors/Airtable_Logo.svg'
import intercom from '../assets/images/sponsors/Intercom_Logo.svg'
import slack from '../assets/images/sponsors/Slack_Logo.svg'

//components
import Layout from '../components/layout'
import Share from '../components/share'
import Head from '../components/head'

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
        this.scrollTo(document.getElementById('what-is-this-campaign'));
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
        <section className="o-section--pushBottom c-masthead c-masthead--centered c-masthead--lead">
          <div className="c-masthead__overlay">

            <div className="o-block o-block--centered">
              <div className="o-block__inner">
                <div className="o-block__container">
                  <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                    <div className="o-inner">
                      <h2 className="o-title__headline c-masthead__headline">Help get <span className="c-nhs">NHS</span> staff the protective equipment they need to fight COVID-19.</h2>
                      <p className="o-title__byline c-masthead__byline">#PPEForNHS is a not-for-profit campaign supplying the UK's frontline healthcare workers with Personal Protective Equipment.</p>
                      <div className="c-masthead__buttons">
                        <a className="o-button o-button--fill o-button--red o-button--inline" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_masthead">Donate</a>
                        <a className="o-button o-button--red o-button--inline" href="#why-this-campaign" id="read-more" data-event-id="read-more">How can I help?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="o-section o-section--pullTop">
          <div className="o-block o-block--centered">
            <div className="o-block__inner">
              <div className="o-block__container o-block__container--5 c-imageBanner__item">
                <div className="o-inner">
                  <figure className="u-centered o-asset o-asset--video o-asset--shadow" id="video">
                    <a href="#" className="o-asset__overlay" data-event-id="play-video" data-label="masthead_video">Play video</a>
                    <video loop poster={introPoster} className="o-asset__source">
                      <source src={introVideo} type="video/mp4" className="o-asset__source" />
                    </video>
                    <figcaption className="o-note u-visuallyHidden">Our founders, Xinjie Ma & George Madden, describe the #PPEforNHS mission to deliver the Protective Equipment to the NHS that will help save lives.</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="c-tour">

          <section className="o-section c-tour__item c-tourItem" id="what-is-this-campaign">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--trio">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <header className="o-title o-title--small c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Support us</h4>
                        <p className="o-title__byline">Your donation to the #PPEforNHS campaign helps frontline healthcare workers across the UK get the protection they deserve.</p>
                      </header>
                      <a className="o-button o-button--fill o-button--red o-button--inline" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_triage">Make a secure donation</a>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <header className="o-title o-title--small c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Get PPE</h4>
                        <p className="o-title__byline">Are you a NHS or other healthcare worker or procurer looking to fill equipment shortages? Contact us here to request equipment.</p>
                      </header>
                      <a className="o-button o-button--red o-button--inline" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request equipment</a>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <header className="o-title o-title--small c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Join us</h4>
                        <p className="o-title__byline">This project is powered by the passion, kindness and dedication of our team of volunteers. If this sounds like you, please submit your information below.</p>
                      </header>
                      <a className="o-button o-button--red o-button--inline" href="https://airtable.com/shrtCNiwmyonFzCXA" target="_blank" data-event-id="join" data-label="section_triage">Volunteer</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section o-section--pushBottom c-tour__item c-tourItem c-tourItem--grey">
            <div className="c-tourItem__inner">

              <div className="o-block">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <header className="o-title o-title--large c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline"><span className="c-nhs">NHS</span> staff lack vital protective equipment for the fight against COVID-19.<br />With your help, we are changing that.</h3>
                        <p className="o-title__byline u-visuallyHidden">#PPEForNHS is a not-for-profit campaign supplying the UK's frontline healthcare workers with Personal Protective Equipment.</p>
                      </header>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--3">
                    <div className="o-inner">
                      <img alt="Some of our closest friends treating covid-19 patients. Please help us protect them." src={friends} className="o-asset u-mp-2" />
                      <div className="o-sp__2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <ol className="c-list c-list--boxes c-list--boxesx3 c-list--white">
                      <li className="c-list__item o-inner">
                        <h4 className="c-list__itemTitle">Inadequate protective equipment is putting lives at risk</h4>
                        <p>Doctors, nurses and key healthcare workers are treating COVID-19 patients without access to the Personal Protective Equipment needed to keep them safe from infection.</p>
                      </li>
                      <li className="c-list__item o-inner">
                        <h4 className="c-list__itemTitle">We are working with reputable suppliers to get equipment to frontline workers within days</h4>
                        <p>We are actively connecting desperate frontline staff with the equipment they need to treat their patients safely.</p>
                      </li>
                      <li className="c-list__item o-inner">
                        <h4 className="c-list__itemTitle">You can help protect thousands more NHS staff</h4>
                        <p>Your donation will allow us to purchase the masks, gloves, gowns and respirators NHS staff need. Every frontline NHS worker deserves to be properly protected against COVID-19.</p>
                      </li>
                    </ol>
                    <div className="o-sp__2"></div>
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
                      <a className="o-button o-button--fill o-button--red" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_why">Make a secure donation</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section o-section--pullTop c-cta c-cta--challenge">
            <div className="c-cta__section c-cta__section--lead">

              <div className="o-block o-block--centered u-visuallyHiddenTablet">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <div className="o-title o-title--centered c-cta__title">
                        <h2 className="o-title__headline c-cta__headline">Join the DIY #PPEforNHS Challenge and help save lives! 🥽</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block o-block--centered o-block--verticalCentered c-imageBanner">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--2 c-imageBanner__item">
                    <div className="o-inner">
                      <img alt="@arshib0ld with DIY plastic wrapper PPE via @PPEforNHS Instagram" src={arshib0ld} className="o-asset o-asset--shadow" />
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--3 c-imageBanner__item">
                    <div className="o-inner">
                      <video autoPlay={true} loop muted className="o-asset o-asset--shadow" poster={esmePoster}>
                        <source src={esmeVideo} type="" className="o-asset__source" />
                      </video>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--2 c-imageBanner__item">
                    <div className="o-inner">
                      <img alt="@manny.prime with PPE via @PPEforNHS Instagram" src={mannyprime} className="o-asset o-asset--shadow" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="c-cta__section">

              <div className="o-block o-block--centered u-visuallyHiddenMobile">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--6">
                    <div className="o-inner">
                      <div className="o-title o-title--centered c-cta__title">
                        <p className="o-title__headline c-cta__headline">Join the DIY #PPEforNHS Challenge and help save lives! 🥽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="c-cta__section">

              <div className="o-block o-block--centered u-centered">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <div className="o-inner">
                      <a className="o-button o-button--fill o-button--red o-button--inline" href="/challenge" data-event-id="challenge" data-label="section_challenge">Find out more &rarr;</a>
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
                        <h3 className="o-title__headline">A growing team of volunteers</h3>
                        <p className="o-title__byline">What started out as a small group helping health & social care workers find protective equipment has quickly grown into a team on a mission to end the protective equipment crisis.</p>
                      </div>
                    </header>
                  </div>
                  <div className="o-block__container o-block__container--12">
                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--boxesImage c-list--white">
                      <li className="c-list__item o-inner">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                          <img alt="Xinjie Ma, co-founder of rct studio" src={xinjie} className="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">Xinjie Ma</h4>
                          <p className="o-title__byline">Co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                          <p>When a group of doctors and nurses reached out to me desperately seeking suppliers of protective equipment for their NHS trust, I knew I had to do more to help.</p>
                        </div>
                      </li>
                      <li className="c-list__item o-inner">
                        <figure className="o-asset o-asset--circle c-list__itemImage">
                          <img alt="George Madden, founder of pilot" src={george} className="o-asset__source" />
                        </figure>
                        <div className="c-list__itemBody o-title o-title--small">
                          <h4 className="c-list__itemTitle o-title__headline">George Madden</h4>
                          <p className="o-title__byline">Founder @<a className="o-inlineLink" href="https://pricetracker.pilot.money?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">pilot</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>, served @<a className="o-inlineLink" href="https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/london-regiment/" target="_blank">BritishArmyReserve</a>.</p>
                          <p>My mum is a Nurse Practitioner who has dedicated a life of service to the NHS. I have friends working in ICUs across the country. The thought that they may lack the protective equipment that they need to be safe from infection is crushing. Every one of us must do everything we can to help.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="o-sp__2"></div>
                  </div>
                </div>
              </div>
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <div className="o-inner u-centered">
                      <a className="o-button o-button--red" href="/team">Meet the team</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem" id="supporters">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--4">
                    <header className="o-title c-tourItem__title">
                      <div className="o-inner">
                        <h3 className="o-title__headline">Some of our supporters</h3>
                      </div>
                    </header>
                  </div>
                  <div className="o-block__container o-block__container--2">
                    <div className="o-inner">
                      <a href="https://airtable.com/" target="_blank" className="o-asset o-asset--logo">
                        <img alt="Airtable" src={airtable} className="o-asset__source" />
                      </a>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--2">
                    <div className="o-inner">
                      <a href="https://slack.com/" target="_blank" className="o-asset o-asset--logo">
                        <img alt="Slack" src={slack} className="o-asset__source" />
                      </a>
                    </div>
                  </div>
                  <div className="o-block__container o-block__container--2">
                    <div className="o-inner">
                      <a href="https://intercom.com/" target="_blank" className="o-asset o-asset--logo">
                        <img alt="Intercom" src={intercom} className="o-asset__source" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem c-tourItem--faq" id="faq">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
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
                    <a className="o-button o-button--fill o-button--red" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="section_cta">Make a secure donation</a>
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