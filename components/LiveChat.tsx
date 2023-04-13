import React from 'react'
import Script from 'next/script'

const LiveChat: React.FC = () => (
    <Script id="zsiqchat" strategy="afterInteractive">
        {`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
                widgetcode:
                "29dd62e16d105f4918dcbf0e81f931c359e4e62c3d3d45195edc6ed3dc7ea54d1b5fef0951f147d94965b0c80199bebc",
                values: {},
                ready: function () {}
            };
            var d = document;
            s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zoho.com/widget";
            t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
        `}
    </Script>
)

export default LiveChat