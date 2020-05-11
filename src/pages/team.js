import React from 'react'

//components
import Layout from '../components/layout'
import Share from '../components/share'
import Head from '../components/head'

//data and assets
import teamData from '../../data/team.json'
import siteData from '../../data/manifest.json'
import xinjie from '../assets/images/team/xinjie.jpg'
import george from '../assets/images/team/george.png'
import tara from '../assets/images/team/tara.png'

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
                                                            <div id={member.photo} alt={member.name} className="o-asset__source team-member" />
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

                <section className="o-section c-tour__item c-tourItem c-tourItem--grey" id="volunteers">
                    <div className="c-tourItem__inner">
                        <div className="o-block o-block--centered">
                            <div className="o-block__inner">
                                <div className="o-block__container o-block__container--6">
                                    <div className="o-title o-title c-masthead__title">
                                        <div className="o-inner">
                                            <h2 className="o-title__headline">Join us</h2>
                                            <p className="o-title__byline">Our open roles are the most urgent people that we need to help us get PPE into the frontlines as quickly as possible.</p>
                                            <p className="o-title__byline">To apply to volunteer, please complete the form below and we will be in touch with you soon. Don't see your role? We are actively seeking out passionate individuals who can help bolster the campaign, so please do complete the form below.</p>
                                            <div className="o-sp__2"></div>
                                            <a className="o-button o-button--fill o-button--red" href="https://airtable.com/shrtCNiwmyonFzCXA" target="_blank" data-event-id="join" data-label="team_volunteer">Apply to Volunteer</a>
                                        </div>
                                    </div>
                                    <div className="o-sp__4"></div>
                                </div>
                                <div className="o-block__container o-block__container--6">
                                    <div className="o-inner">
                                        <div className="c-list c-list--bullets c-list--floating">
                                            <div className="o-inner">
                                                <div className="o-title o-title--small o-note c-list__title">
                                                    <h4 className="o-title__headline">Our most urgent roles</h4>
                                                </div>
                                                <ul className="c-list__items">
                                                    <li className="o-title o-title--small c-list__item">
                                                        <h5 className="o-title__headline c-list__itemTitle">Operations: Supply Chain Lead 📦</h5>
                                                        <p>We're looking for an experienced supply chain management professional.</p>
                                                    </li>
                                                    <li className="o-title o-title--small c-list__item">
                                                        <h5 className="o-title__headline c-list__itemTitle">Operations: Supply Chain 🤙</h5>
                                                        <p>We are looking for Chinese (Mandarin) speakers to help stay in constant contact with factories & suppliers in China, keeping our operations team and NHS colleagues up-to-date.</p>
                                                    </li>
                                                    <li className="o-title o-title--small c-list__item">
                                                        <h5 className="o-title__headline c-list__itemTitle">Operations: QA (China) 🥽</h5>
                                                        <p>We need Chinese (Mandarin) speakers to work with busy suppliers in ensuring the quality of equipment before it leaves the factory.</p>
                                                    </li>
                                                    <li className="o-title o-title--small c-list__item">
                                                        <h5 className="o-title__headline c-list__itemTitle">Marketing: Outreach 📢</h5>
                                                        <p>We need volunteers to help reach out to a broad range of individuals and organisations.</p>
                                                    </li>
                                                    <li className="o-title o-title--small c-list__item">
                                                        <h5 className="o-title__headline c-list__itemTitle">Marketing: Content Writers 👩‍💻</h5>
                                                        <p>Our marketing team is looking for experienced copywriters to help us create blog content and hone our messaging.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="o-section c-tour__item c-tourItem" id="leadership">
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
                                    <ul className="c-list c-list--boxes c-list--boxesx2 c-list--boxesImage c-list--white">
                                        <li className="c-list__item o-inner u-centered">
                                            <figure className="o-asset o-asset--circle c-list__itemImage">
                                                <img alt="Xinjie Ma, co-founder of rct studio" src={xinjie} className="o-asset__source" />
                                            </figure>
                                            <div className="c-list__itemBody o-title o-title--small">
                                                <h4 className="c-list__itemTitle o-title__headline">Xinjie Ma</h4>
                                                <p className="o-title__byline">Co-founder @<a className="o-inlineLink" href="https://rct.studio?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">rctstudio</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>. <a className="o-inlineLink" href="http://www.forbeschina.com/entrepreneur/44597" target="_blank">China</a> & <a className="o-inlineLink" href="https://www.forbes.com/profile/rct-studio/" target="_blank">Asia</a> @Forbes30Under30.</p>
                                            </div>
                                        </li>
                                        <li className="c-list__item o-inner u-centered">
                                            <figure className="o-asset o-asset--circle c-list__itemImage">
                                                <img alt="George Madden, founder of pilot" src={george} className="o-asset__source" />
                                            </figure>
                                            <div className="c-list__itemBody o-title o-title--small">
                                                <h4 className="c-list__itemTitle o-title__headline">George Madden</h4>
                                                <p className="o-title__byline">Founder @<a className="o-inlineLink" href="https://pricetracker.pilot.money?utm_medium=referral&utm_source=ppefornhs.com" target="_blank">pilot</a>, studied @<a className="o-inlineLink" href="https://www.arts.ac.uk/" target="_blank">ArtsLondon</a>, served @<a className="o-inlineLink" href="https://www.army.mod.uk/who-we-are/corps-regiments-and-units/infantry/london-regiment/" target="_blank">BritishArmyReserve</a>.</p>
                                            </div>
                                        </li>
                                        <li className="c-list__item o-inner u-centered">
                                            <figure className="o-asset o-asset--circle c-list__itemImage">
                                                <img alt="Dr. Tara H Verity, GP" src={tara} className="o-asset__source" />
                                            </figure>
                                            <div className="c-list__itemBody o-title o-title--small">
                                                <h4 className="c-list__itemTitle o-title__headline">Dr. Tara H. Verity, MB BChir, MRCGP, DCH, DRCOG</h4>
                                                <p className="o-title__byline">General Practitioner (GP) @<a className="o-inlineLink" href="https://www.caddingtonsurgery.co.uk/" target="_blank">Caddington Surgery</a>. Qualified 1991 @<a className="o-inlineLink" href="https://www.medschl.cam.ac.uk/" target="_blank">Cambridge</a>, worked in hospitals and General Practice in inner London.</p>
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
                                    <a className="o-button o-button--fill o-button--red" href={siteData.externalLinks.donate} target="_blank" data-event-id="donate" data-label="team_cta">Make a secure donation</a>
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