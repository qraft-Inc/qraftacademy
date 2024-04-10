import React from 'react'
import Script from 'next/script';

const GoogleAnalyticsScript = () => {
    const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    return (
        <>   <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
        />

            <Script id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${ga_id}');
                `,
                }}

            />
        </>
    )
}

export default GoogleAnalyticsScript