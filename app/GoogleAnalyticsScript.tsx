import Script from "next/script";

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS"></Script>
            {/* default strategy */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-XXXXXXX');`}
            </Script>
        </>
    );
}

export default GoogleAnalyticsScript;