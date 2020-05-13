import React from 'react'
import siteData from '../../data/manifest.json'
import { Link } from 'gatsby'

export default function PageHeader() {
  return (
    <header className="c-pageHeader">
      <div className="o-block">
        <div className="o-block__inner">
          <div className="c-pageHeader__left">
            <div className="o-inner">
              <h1 className="o-brand c-pageHeader__brand"><Link to="/">#{siteData.primaryHashtag}</Link></h1>
            </div>
          </div>
          <div className="c-pageHeader__right u-visuallyHiddenMobile">
            <div className="o-inner">
              <a className="o-button o-button--small o-button--fill" href="https://www.crowdfunder.co.uk/ppefornhsuk" target="_blank" data-event-id="donate" data-label="header">Donate</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}