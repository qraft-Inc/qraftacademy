import React from 'react'
import Script from 'next/script';

const GoogleAnalyticsScript = () => {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    return (
        <>   <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />

            <Script id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${gaId}');
                `,
                }}

            />
        </>
    )
}

export default GoogleAnalyticsScript