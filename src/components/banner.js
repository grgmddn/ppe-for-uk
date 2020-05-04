import React from 'react'

export default function Banner() {
  return (
    <section className="o-section c-banner c-banner--narrow c-banner--temp is-hidden" id="cookieConsent">
      <div className="o-block">
        <div className="o-block__container o-block__container--6">
          <div className="o-title o-title--small c-banner__title">
            <div className="o-inner">
              <h2 className="o-title__headline c-banner__headline">We use cookies</h2>
              <p className="o-title__byline c-banner__byline">By navigating this website, you agree to our <a className="o-inlineLink c-banner__inlineLink" href="#">cookie policy</a>.</p>
            </div>
          </div>
        </div>
        <a href="#" className="o-svg c-banner__close" id="cookieConsentAccept">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="o-svg__asset c-banner__closeIcon">
          <path className="g" d="M15.6451 0.367084C15.1718 -0.106181 14.4073 -0.106181 13.934 0.367084L8 6.28897L2.06598 0.354949C1.59272 -0.118316 0.828214 -0.118316 0.354949 0.354949C-0.118316 0.828214 -0.118316 1.59272 0.354949 2.06598L6.28897 8L0.354949 13.934C-0.118316 14.4073 -0.118316 15.1718 0.354949 15.6451C0.828214 16.1183 1.59272 16.1183 2.06598 15.6451L8 9.71104L13.934 15.6451C14.4073 16.1183 15.1718 16.1183 15.6451 15.6451C16.1183 15.1718 16.1183 14.4073 15.6451 13.934L9.71104 8L15.6451 2.06598C16.1062 1.60485 16.1062 0.828214 15.6451 0.367084V0.367084Z"/>
          </svg>
        </a>
      </div>
    </section>
  )
}