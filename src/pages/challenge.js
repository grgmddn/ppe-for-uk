import React from 'react'

//components
import Layout from '../components/layout'
import Head from '../components/head'

//data and assets
import siteData from '../../data/manifest.json'
import largebodiesofwater2 from '../images/challenge/largebodiesofwater2.jpg'
import mannyprime from '../images/challenge/mannyprime.jpg'
import mannyprime2 from '../images/challenge/IMG_3484.png'
import han_taylorr from '../images/challenge/han_taylorr.jpg'
import tsiresydomingos from '../images/challenge/IMG_3494.png'
import friends from '../images/k.jpg'

export default function Challenge() {
    return (
        <Layout>
            <Head title='DIY PPE Challenge' />
            <section className="o-section c-masthead c-masthead--centered c-masthead--pink">
                <div className="c-masthead__overlay">
                    <div className="o-block o-block--centered">
                        <div className="o-block__inner">
                            <div className="o-block__container o-block__container--9">
                                <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                                    <div className="o-inner">
                                        <h2 className="o-title__headline c-masthead__headline">Make your own DIY #PPEforNHS and help save lives!</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="o-section c-cta c-cta--challenge">
                <div className="c-cta__section c-cta__section--lead">
                    <div className="o-block o-block--centered o-block--verticalCentered c-imageBanner">
                        <div className="o-block__inner">
                            <div className="o-block__container o-block__container--2 c-imageBanner__item">
                                <div className="o-inner">
                                    <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                                        <img alt="@beigelstirrer with DIY PPE via @PPEforNHS Instagram" src={largebodiesofwater2} className="o-asset__source" />
                                    </a>
                                </div>
                            </div>
                            <div className="o-block__container o-block__container--2 c-imageBanner__item">
                                <div className="o-inner">
                                    <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                                        <img alt="@manny.prime with PPE via @PPEforNHS Instagram" src={mannyprime} className="o-asset__source" />
                                    </a>
                                </div>
                            </div>
                            <div className="o-block__container o-block__container--3 c-imageBanner__item">
                                <div className="o-inner">
                                    <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                                        <img alt="@manny.prime with PPE via @PPEforNHS Instagram" src={mannyprime2} className="o-asset__source" />
                                    </a>
                                </div>
                            </div>
                            <div className="o-block__container o-block__container--2 c-imageBanner__item u-visuallyHiddenMobile">
                                <div className="o-inner">
                                    <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                                        <img alt="@han_taylorr with PPE via @PPEforNHS Instagram" src={han_taylorr} className="o-asset__source" />
                                    </a>
                                </div>
                            </div>
                            <div className="o-block__container o-block__container--2 c-imageBanner__item u-visuallyHiddenMobile">
                                <div className="o-inner">
                                    <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                                        <img alt="@tsiresydomingos with PPE via @PPEforNHS Instagram" src={tsiresydomingos} className="o-asset__source" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="c-tour">
                <section className="o-section c-tour__item c-tourItem c-tourItem--red" id="challenge-steps">
                    <div className="c-tourItem__inner">
                        <div className="o-block">
                            <div className="o-block__inner">
                                <header className="o-title o-title--centered c-tourItem__title">
                                    <div className="o-inner">
                                        <h3 className="o-title__headline c-tourItem__headline">How to join in</h3>
                                    </div>
                                </header>
                            </div>
                        </div>

                        <div className="o-block">
                            <div className="o-block__inner">
                                <div className="o-block__container">
                                    <ol className="c-list c-list--boxes">
                                        <li className="c-list__item o-inner">
                                            <h4 className="c-list__itemTitle">Build your DIY protection</h4>
                                            <p>Grab anything around the house and get building your own 'protective equipment'. The more creative the better!</p>
                                        </li>
                                        <li className="c-list__item o-inner">
                                            <h4 className="c-list__itemTitle">Share, tag & nominate</h4>
                                            <p>Share your creation on Twitter or Instagram and nominate 5 friends to one-up you. Don't forget to tag us @PPEforNHS to be featured!</p>
                                        </li>
                                        <li className="c-list__item o-inner">
                                            <h4 className="c-list__itemTitle">Donate to protect NHS workers</h4>
                                            <p>Donate £5 and help protect a frontline worker for 2 days.</p>
                                        </li>
                                    </ol>
                                    <div className="o-sp__2"></div>
                                </div>
                                <div className="o-block__container u-centered">
                                    <div className="o-inner">
                                        <p className="o-note">No social media? No problem. <a href="https://airtable.com/shrKg1W55hKYItIDo" target="_blank" className="o-inlineLink" data-event-id="contact" data-label="challenge_contact">Send us your creation here</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="o-section c-cta" id="cta">
                <div className="o-block o-block--centered o-block--verticalCentered">
                    <div className="o-block__inner">
                        <div className="o-block__container o-block__container--5">
                            <div className="c-cta__section c-cta__section--lead">
                                <div className="o-title c-cta__title">
                                    <div className="o-inner">
                                        <h2 className="o-title__headline c-cta__headline">Your donation will help get Personal Protective Equipment to those who need it most.</h2>
                                        <div className="o-sp__2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="c-cta__section">
                                <div className="o-inner">
                                    <a className="o-button o-button--fill o-button--red o-button--inline" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="challenge_cta">Make a secure donation now</a>
                                </div>
                            </div>
                        </div>
                        <div className="o-block__container o-block__container--3">
                            <div className="c-cta__section">
                                <div className="o-inner">
                                    <figure className="o-asset o-asset--shadow">
                                        <img alt="Some of our closest friends treating covid-19 patients. Please help us protect them." src={friends} className="o-asset__source" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}