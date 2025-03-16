'use client';

import { ReactNode, useEffect } from 'react';
import { CookieBanner } from './CookieBanner';
import Script from 'next/script';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

interface ConsentManagerProps {
  children?: ReactNode;
  privacyPolicyUrl: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}

export function ConsentManager({
  children,
  privacyPolicyUrl,
  googleAnalyticsId,
  googleTagManagerId,
}: ConsentManagerProps) {
  const { hasConsented, isLoaded } = useCookieConsent();

  // Add console logging to track consent status
  useEffect(() => {
    if (isLoaded) {
      const timestamp = new Date().toISOString();
      if (hasConsented) {
        console.log(`%c[${timestamp}] COOKIE CONSENT: ACCEPTED ✅`, 'color: green; font-weight: bold');
        console.log('%cGoogle Analytics is ACTIVATED', 'color: green');
        if (googleAnalyticsId) {
          console.log(`%cGoogle Analytics ID: ${googleAnalyticsId}`, 'color: green');
        } else {
          console.log('%cNo Google Analytics ID provided in ConsentManager', 'color: orange');
        }
        if (googleTagManagerId) {
          console.log(`%cGoogle Tag Manager ID: ${googleTagManagerId}`, 'color: green');
        }
      } else {
        console.log(`%c[${timestamp}] COOKIE CONSENT: NOT GIVEN ❌`, 'color: red; font-weight: bold');
        console.log('%cGoogle Analytics is BLOCKED', 'color: red');
        console.log('%cUser must accept cookies to enable analytics tracking', 'color: gray');
      }
    }
  }, [isLoaded, hasConsented, googleAnalyticsId, googleTagManagerId]);

  return (
    <>
      {/* Only load analytics scripts if consent is given */}
      {isLoaded && hasConsented && googleAnalyticsId && (
        <>
          {/* Google Analytics GA4 */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
            onLoad={() => {
              console.log('%cGoogle Analytics script loaded successfully', 'color: green; font-weight: bold');
            }}
            onError={() => {
              console.error('%cFailed to load Google Analytics script', 'color: red; font-weight: bold');
            }}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
              console.log('%cGoogle Analytics initialized with ID: ${googleAnalyticsId}', 'color: green');
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager - only load if consent is given */}
      {isLoaded && hasConsented && googleTagManagerId && (
        <>
          <Script id="gtm-script" strategy="afterInteractive" 
            onLoad={() => {
              console.log('%cGoogle Tag Manager script loaded successfully', 'color: green; font-weight: bold');
            }}
            onError={() => {
              console.error('%cFailed to load Google Tag Manager script', 'color: red; font-weight: bold');
            }}
          >
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
              console.log('%cGoogle Tag Manager initialized with ID: ${googleTagManagerId}', 'color: green');
            `}
          </Script>
        </>
      )}

      {/* Cookie consent banner */}
      <CookieBanner privacyPolicyUrl={privacyPolicyUrl} />

      {/* Render children */}
      {children}
    </>
  );
}