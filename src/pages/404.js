import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

export default function NotFound() {
    return (
        <Layout>
            <section className="o-section c-masthead c-masthead--centered">
                <div className="c-masthead__overlay">

                    <div className="o-block">
                    <div className="o-block__container">
                        <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                        <div className="o-inner">
                            <h2 className="o-title__headline c-masthead__headline">Oops! Page not found.</h2>
                            <div className="c-masthead__buttons">
                            <Link className="o-button o-button--fill o-button--red o-button--masthead" href='/'>Go home</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}