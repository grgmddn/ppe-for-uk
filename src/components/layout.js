import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

//styles
import '../assets/styles/main.scss';

//components
import PageHeader from './pageHeader'
import PageFooter from './pageFooter'

export default function Layout({ children }) {
  return (
    <main className='o-site'>
      <CookieConsent
        location="top"
        acceptOnScroll={false}
        buttonText="I accept"
        cookieName="cookie_consent_accepted"
        expires={150}
        containerClasses="o-section c-banner c-banner--narrow c-banner--temp"
        contentClasses="o-block"
        disableButtonStyles={true}
        buttonClasses="o-button o-button--fill o-button--small"
        buttonWrapperClasses="c-banner__accept"
        disableStyles={true}
      >
        <div className="o-block__inner">
          <div className="o-block__container o-block__container--6">
            <div className="o-title o-title--small c-banner__title">
              <div className="o-inner">
                <h2 className="o-title__headline c-banner__headline">We use cookies</h2>
                <p className="o-title__byline c-banner__byline">By navigating this website, you agree to our <a className="o-inlineLink c-banner__inlineLink" href="#">cookie policy</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </CookieConsent>
      <div className="o-site__inner">
        <PageHeader />
        {children}
        <PageFooter />
      </div>
    </main>
  )
}