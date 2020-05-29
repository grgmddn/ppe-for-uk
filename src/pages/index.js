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
        <section className="c-masthead c-masthead--lead">
          <div className="c-masthead__overlay">

            <div className="o-block">
              <div className="o-block__inner">
                <div className="o-block__container o-block__container--8">
                  <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                    <div className="o-inner">
                      <h2 className="o-title__headline c-masthead__headline">Help get NHS staff the protective equipment they need to fight Covid-19</h2>
                      <p className="o-title__byline c-masthead__byline">Together we can get desperately needed supplies to doctors, nurses and surgeons on the frontlines.</p>
                      <div className="c-masthead__buttons">
                        <AnchorLink className="o-button o-button--fill o-button--red o-button--inline" id="read-more" data-event-id="read-more" data-label="" to="/#donate">How can I help?</AnchorLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-block__container o-block__container--4">
                  <div className="o-inner">
                    <Image alt="Some of our closest friends treating Covid-19 patients. Please help us protect them." filename="k.jpg" class="o-asset u-mp-2" />
                  </div>
                  <div className="o-sp__2"></div>
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
                        <h3 className="o-title__headline c-tourItem__headline">It's dangerous, stressful work caring for our nation under Covid-19. Imagine doing it without proper protective equipment.</h3>
                      </header>
                      <div className="o-sp__2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--5">
                    <ul className="c-list c-list--boxes c-list--pink">
                      <li className="c-list__item">
                        <div className="c-list__itemInner o-inner">
                          <div className="c-list__itemBody">
                            <div className="o-title o-title--small c-blockQuote">
                              <blockquote className="c-blockQuote__title">
                                <p className="o-title__headline c-blockQuote__headline">"After finishing at the Nightingale I'm being put on the team dealing with patients who have tested positive or have just come out of hospital. But they are only giving us surgical (paper) masks."</p>
                              </blockquote>
                              <cite className="c-blockQuote__name">Nurse on <span className="c-blockQuote__role">Covid-19 'RED' Ward</span></cite>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="o-inner u-visuallyHiddenMobile">
                      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">&#39;Scottish <a href="https://twitter.com/hashtag/carehomes?src=hash&amp;ref_src=twsrc%5Etfw">#carehomes</a> need <a href="https://twitter.com/hashtag/PPE?src=hash&amp;ref_src=twsrc%5Etfw">#PPE</a> now&#39;, demands Church of Scotland charity | ⁦<a href="https://twitter.com/CrossReach?ref_src=twsrc%5Etfw">@CrossReach</a>⁩ ⁦<a href="https://twitter.com/TheScotsman?ref_src=twsrc%5Etfw">@TheScotsman</a>⁩ <a href="https://t.co/h2BO032vIY">https://t.co/h2BO032vIY</a></p>&mdash; Scottish Care (@scottishcare) <a href="https://twitter.com/scottishcare/status/1245265348632477696?ref_src=twsrc%5Etfw">April 1, 2020</a></blockquote>
                      <div className="o-sp__2"></div>
                    </div>
                    <ul className="c-list c-list--boxes c-list--pink u-visuallyHiddenMobile">
                      <li className="c-list__item">
                        <div className="c-list__itemInner o-inner">
                          <div className="c-list__itemBody">
                            <div className="o-title o-title--small c-blockQuote">
                              <blockquote className="c-blockQuote__title">
                                <p className="o-title__headline c-blockQuote__headline">"Weeks into this crisis, there are colleagues in all settings – hospitals, community or care homes – who have not been provided with personal protective equipment"</p>
                              </blockquote>
                              <cite className="c-blockQuote__name">Dame Donna Kinnair, Chief Executive, <span className="c-blockQuote__role">Royal College of Nursing</span></cite>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="o-block__container o-block__container--5">
                    <div className="o-inner">
                      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Over 100 nurses have been forced to seek advice regarding refusing to treat patients amid a lack of adequate personal protective equipment, <a href="https://twitter.com/theRCN?ref_src=twsrc%5Etfw">@theRCN</a> has revealed. <a href="https://t.co/eoTPeJnGi6">https://t.co/eoTPeJnGi6</a> <a href="https://t.co/lf3JQbatFJ">pic.twitter.com/lf3JQbatFJ</a></p>&mdash; NursingNotes (@NursingNotesUK) <a href="https://twitter.com/NursingNotesUK/status/1258014487946371077?ref_src=twsrc%5Etfw">May 6, 2020</a></blockquote>
                      <div className="o-sp__2"></div>
                    </div>
                    <ul className="c-list c-list--boxes c-list--pink">
                      <li className="c-list__item">
                        <div className="c-list__itemInner o-inner">
                          <div className="c-list__itemBody">
                            <div className="o-title o-title--small c-blockQuote">
                              <blockquote className="c-blockQuote__title">
                                <p className="o-title__headline c-blockQuote__headline">"We're running out of aprons and masks and we don't know where else they're coming from"</p>
                              </blockquote>
                              <cite className="c-blockQuote__name">Jackie Applebee, <span className="c-blockQuote__role">Doctors in Unite</span></cite>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="o-inner u-visuallyHiddenMobile">
                      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">With photos: Exhausted nurses at overwhelmed London hospital wore garbage bags to protect themselves from coronavirus <a href="https://t.co/em0jMpsVu8">https://t.co/em0jMpsVu8</a></p>&mdash; William Booth (@BoothWilliam) <a href="https://twitter.com/BoothWilliam/status/1241371935377948672?ref_src=twsrc%5Etfw">March 21, 2020</a></blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-sp__4"></div>

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <div className="o-title o-title u-visuallyHiddenMobile">
                        <h4 className="o-title__headline">#PPEforNHS is giving you the power to get Personal Protective Equipment into the hands of frontline health & social care workers</h4>
                        <p className="o-title__byline">You donate PPE. We get it to the nation's carehome, ambulance, surgery and hospital staff who need it most. Frontline workers are no longer forced to go unprotected.</p>
                      </div>
                      <div className="o-title o-title o-title--small u-visuallyHiddenTablet">
                        <h4 className="o-title__headline">#PPEforNHS is giving you the power to get Personal Protective Equipment into the hands of frontline health & social care workers</h4>
                        <p className="o-title__byline">You donate PPE. We get it to the nation's carehome, ambulance, surgery and hospital staff who need it most. Frontline workers are no longer forced to go unprotected.</p>
                      </div>
                      <div className="o-sp__2"></div>
                      <AnchorLink to="/#donate" className="o-button o-button--fill o-button--red o-button--inline" data-event-id="donate" data-label="opening" style={{margin: '0 1rem'}}>Donate PPE</AnchorLink>
                      <AnchorLink to="/#how-it-works" className="o-button o-button--red o-button--inline" data-event-id="" data-label="" style={{margin: '0 1rem'}}>See how it works</AnchorLink>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>



          <section className="o-section c-tour__item c-tourItem c-tourItem--pink" id="donate">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--6">
                    <header className="o-title o-title--centered c-tourItem__title">
                      <div className="o-inner">
                        <h3 className="o-title__headline">Help buy the protective equipment that will save lives</h3>
                        <p className="o-title__byline">Every penny you donate goes directly towards getting PPE to frontline health & social care workers. <AnchorLink to="/#how-it-works" className="o-inlineLink">See how it works</AnchorLink>.</p>
                      </div>
                    </header>
                  </div>
                  <div className="o-block__container o-block__container--12">
                    <ul className="c-list c-list--boxes c-list--boxesx3 c-list--boxesImage c-list--white">
                    {productsData.map((item, index) => {
                        return (
                          <li key={index} target="_blank" className="c-list__item c-list__item--button">
                            <a className="c-list__itemAnchor" style={{position: 'absolute', display: 'block', width: '100%', height: '100%'}} href={siteData.externalLinks.donate + item.price} target="_blank"><span aria-hidden="true" className="u-srOnly u-srOnlyFocusable">{item.wording}</span>
                            </a>
                            <div className="o-inner c-list__itemInner">
                              <Image class="o-asset c-list__itemImage" alt="product illustration placeholder" filename={item.image.url} />
                              <div className="c-list__itemBody o-title o-title--small o-title--centered">
                                <h4 className="c-list__itemTitle o-title__headline">{item.wording}</h4>
                                <a aria-hidden="true" className="c-list__itemLink" href={siteData.externalLinks.donate + item.price} target="_blank" tabIndex="-1" style={{'color': '#FF0F28'}}>Donate {item.price > 0 ? '£' + item.price : 'any amount'}</a>
                              </div>
                            </div>
                          </li>
                        )
                      })}

                    </ul>
                    
                    <div className="o-sp__2"></div>
                  </div>
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <div className="o-title o-title--small">
                        <h4 className="o-title__headline">All donations are processed by Crowdfunder</h4>
                        <p className="o-title__byline"><a href="https://www.crowdfunder.co.uk/" target="_blank" className="o-inlineLink">Crowdfunder</a> is a UK-based crowdfunding platform registered with the <a href="https://www.fundraisingregulator.org.uk/directory/crowdfunder-ltd" target="_blank" className="o-inlineLink">Fundraising Regulator</a>. You can <a href={siteData.externalLinks.crowdfund} target="_blank" className="o-inlineLink">view our verified fundraiser here</a> or read more about how Crowdfunder processed our verification <a href="https://intercom.help/crowdfunder/en/articles/2462038-how-do-i-know-a-project-creator-is-who-they-say-they-are" target="_blank" className="o-inlineLink">here</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem" id="how-it-works">
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
                    <ol className="c-list c-list--boxes c-list--boxesx3 c-list--image c-list--pink">
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <Image class="c-list__itemImage" filename="ppe-1.jpeg" />
                          
                          <div className="c-list__itemBody o-title o-title--small">
                            <h4 className="o-title__headline c-list__itemTitle">Choose items to donate</h4>
                            <p className="o-title__byline">Any amount you can donate helps provide life-protecting equipment to doctors, nurses and key healthcare workers treating Covid-19 patients or working in the community.</p>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <Image class="c-list__itemImage" filename="cargo-1.jpeg" />
                          
                          <div className="c-list__itemBody o-title o-title--small">
                            <h4 className="o-title__headline c-list__itemTitle">We place bulk orders</h4>
                            <p className="o-title__byline">We are acquiring high quality FFP2, FFP3, Surgical (IIR) Masks and other PPE to donate to frontline workers. We have already successfully connected the charities Crisis and Pathway with the same suppliers.</p>
                          </div>
                        </div>
                      </li>
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <Image class="c-list__itemImage" filename="k-2.jpeg" />

                          <div className="c-list__itemBody o-title o-title--small">
                            <h4 className="o-title__headline c-list__itemTitle">Your PPE gets delivered to the frontlines</h4>
                            <p className="o-title__byline">See where your protective equipment is going <AnchorLink to="/#locations" className="o-inlineLink">here</AnchorLink>. With your help, we can protect thousands more frontline health and social care workers!</p>
                          </div>
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
                        <p className="o-title__byline">Every penny raised is going directly towards getting PPE to frontline health and social care workers.</p>
                      </div>
                      <div className="o-sp__2"></div>
                      <AnchorLink to="/#donate" className="o-button o-button--fill o-button--red" data-event-id="donate" data-label="how-it-works">Donate PPE</AnchorLink>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section o-section--pushBottom c-tour__item c-tourItem c-tourItem--grey" id="locations">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Where your PPE is going</h3>
                      </header>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-block">
                <div className="o-block__inner">
                  <div className="o-block__container">
                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--white">
                      <li className="c-list__item">
                        <div className="o-inner c-list__itemInner">
                          <div className="o-title o-title--small c-list__itemBody">
                            <h4 className="o-title__headline c-list__itemTitle">Woodside Nursing and Residential Care Home</h4>
                            <p className="o-title__byline">4,000 pieces of PPE on the way 🚚</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="o-section c-tour__item c-tourItem c-tourItem--pink">
            <div className="c-tourItem__inner">

              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Worried about scams? So are we.</h3>
                        <p className="o-title__byline">We've heard reports of scammers looking to capitalise on the fear and uncertainty during this time. We are not a scam.</p>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--5">
                    <div className="o-inner">
                      <div className="c-list c-list--bullets">
                          <ul className="c-list__items">
                            <li className="c-list__item"><p>Every member of the #PPEforNHS team is volunteering their time. We stand to gain nothing other than the knowledge that we are helping those who need it most.</p></li>
                            <li className="c-list__item"><p>100% of money raised is for purchasing and delivering PPE to the frontline.</p></li>
                            <li className="c-list__item">
                              <p>Our fundraiser is verified by <a href="https://www.crowdfunder.co.uk/" target="_blank" className="o-inlineLink">Crowdfunder</a>, a UK-based crowdfunding platform registered with the <a href="https://www.fundraisingregulator.org.uk/directory/crowdfunder-ltd" target="_blank" className="o-inlineLink">Fundraising Regulator</a>.</p>
                            </li>
                            <li className="c-list__item">
                              <p>You can <a href={siteData.externalLinks.crowdfund} target="_blank" className="o-inlineLink">view our verified fundraiser here</a> or learn about the process Crowdfunder used to verify us <a href="https://intercom.help/crowdfunder/en/articles/2462038-how-do-i-know-a-project-creator-is-who-they-say-they-are" target="_blank" className="o-inlineLink">here</a>.</p></li>
                          </ul>
                        </div>
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
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <header className="o-title c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Other ways to get involved</h4>
                      </header>
                    </div>
                  </div>
                
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <div className="o-title o-title--small c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Get PPE</h4>
                        <p className="o-title__byline">Are you a NHS or other healthcare worker or procurer looking to fill equipment shortages? Contact us here to request equipment.</p>
                      </div>
                      <a className="o-button o-button--red o-button--fill o-button--inline" href="https://airtable.com/shrCp4xiDOA9em4TH?prefill_Issue=I%20need%20to%20source%20PPE" target="_blank" data-event-id="get-ppe" data-label="section_triage">Request equipment</a>
                        <div className="o-sp__2"></div>
                      </div>
                    </div>
                  <div className="o-block__container o-block__container--4">
                    <div className="o-inner">
                      <div className="o-title o-title--small c-tourItem__title">
                        <h4 className="o-title__headline c-tourItem__headline">Join us</h4>
                        <p className="o-title__byline">#PPEforNHS is powered by the passion, kindness and dedication of our team of volunteers. If this sounds like you, please submit your information below.</p>
                      </div>
                      <a className="o-button o-button--red o-button--inline" href="https://airtable.com/shrtCNiwmyonFzCXA" target="_blank" data-event-id="get-ppe" data-label="section_triage">Volunteer</a>
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

          <section className="o-section c-tour__item c-tourItem" id="faq">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8 u-centered">
                    <div className="o-inner">
                      <header className="o-title o-title--centered c-tourItem__title">
                        <h3 className="o-title__headline c-tourItem__headline">Got Questions?</h3>
                      </header>
                      <Link className="o-button o-button--red" to="/faq">Read our FAQs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <section className="o-section o-section--pink c-cta c-cta--centered" id="cta">
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
                    <AnchorLink className="o-button o-button--fill o-button--red" to="/#donate" target="_blank" data-event-id="donate" data-label="section_cta">Donate PPE</AnchorLink>
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