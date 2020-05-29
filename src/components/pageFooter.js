import React from 'react';
import { Link } from 'gatsby';
import siteData from '../../data/manifest.json'

export default function PageFooter() {
  return (
    <footer className="c-pageFooter">
      <div className="o-block">
        <div className="o-block__inner">
          <div className="o-block__container o-block__container--1">
            <div className="o-inner">
              <h3 className="o-brand o-brand--noText c-navigation__headline"><Link to="/">#{siteData.primaryHashtag}</Link></h3>
            </div>
          </div>
          <div className="o-block__container o-block__container--4">
            <div className="o-inner">
              <nav role="navigation" className="c-pageFooter__nav">
                <ul className="c-navigation c-navigation--footer">
                  <li className="c-navigation__item">
                    <Link to="/faq" className="c-navigation__button-wrapper" activeClassName="is-active">FAQs</Link>
                  </li>
                  <li className="c-navigation__item">
                    <Link to="/team" className="c-navigation__button-wrapper" activeClassName="is-active">Team</Link>
                  </li>
                  <li className="c-navigation__item">
                    <Link to="/challenge" className="c-navigation__button-wrapper" activeClassName="is-active">Challenge</Link>
                  </li>
                  <li className="c-navigation__item">
                    <a href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank" className="c-navigation__button-wrapper">Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="o-block__container o-block__container--4">
            <div className="o-inner">&nbsp;</div>
          </div>
        </div>
      </div>
    </footer>
  )
}