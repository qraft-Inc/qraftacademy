import Script from 'next/script'; // Moved this import above React
import React from 'react';

const GoogleAnalyticsScript = () => {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    
    if (!gaId) {
        // Replaced console.warn with a comment or you can use a logging library
        return null;
    }

    return (
        <>
            <Script
                id="google-analytics" // This prop is now sorted alphabetically
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
                id="google-analytics-inline"
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
    );
}

export default GoogleAnalyticsScript;
