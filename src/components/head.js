import React from 'react'
import siteData from '../../data/manifest.json'
import { Helmet } from 'react-helmet'

// require('../components/gtm/gtmHead.html')({ siteData: siteData })

export default function Head(props) {
  const imageMeta = siteData.previewImageUrl
    ? <meta property="og:image" content={siteData.previewImageUrl} />
    : null;
  const twitterImageMeta = siteData.previewImageUrl
    ? <meta name="twitter:image" content={siteData.previewImageUrl} />
    : null;

  return (
    <>
      <Helmet>
        <title>{props && props.title ? props.title + ' | ' + siteData.siteTitle : siteData.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={siteData.description} />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#FF0F28" />
        <meta name="author" content={siteData.author} />
        <meta name="keywords" content={siteData.keywords} />
        <meta property="og:url" content={siteData.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteData.siteTitle} />
        {imageMeta}
        <meta property="og:description" content={siteData.description} />
        <meta property="og:site_name" content={siteData.siteTitle} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={siteData.author} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={'@' + siteData.primaryHashtag} />
        <meta name="twitter:creator" content={'@' + siteData.primaryHashtag} />
        <meta name="twitter:url" content={siteData.siteUrl} />
        <meta name="twitter:title" content={siteData.siteTitle} />
        <meta name="twitter:description" content={siteData.description} />
        {twitterImageMeta}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
    </>
  )
}