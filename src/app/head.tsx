import React from 'react';
// import Script from 'next/script'

const Head: React.FC = () => {
  return (
    <head>
      <title>private media</title>
      <meta name="description" content="A private social media" />
      <link rel="canonical" href="https://social.dnnr.dev/" />
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3T376Z4QFC"/> */}
      {/* <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3T376Z4QFC');
        `}
      </Script> */}
    </head>
  );
}

export default Head;