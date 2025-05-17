import React from 'react'
import Script from 'next/script';

const GoogleAnalyticsScript = () => {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    
    if (!gaId) {
        console.warn('Google Analytics ID not found. Skipping GA script injection.');
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script 
                id="google-analytics"
                strategy="afterInteractive"
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
