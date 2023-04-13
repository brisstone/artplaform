import React from 'react'
import Script from 'next/script'

const GoogleTag: React.FC = () => (
    <>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
            id="google-tag-manager-script"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-2E4P8CL9XD"
        ></Script>
        <Script id="google-analytics-initializer" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-2E4P8CL9XD");
        `}
        </Script>

        {/* <Script id="get-the-app-button-tracking" strategy="afterInteractive">
            {`
                document.addEventListener('click', function(e) {
                    if (e.target.closest('button').innerText?.includes('Get the App')) {
                        console.log('Get the App!!!')
                        gtag('event', 'conversion', {
                            'send_to': 'AW-11110459513/is-LCPm9iZMYEPnQ8LEp'
                        });
                  }
                })
            `}
        </Script> */}
    </>
)

export default GoogleTag