'use client';

import { useEffect, useState } from 'react';
import { 
  CookieConsentState, 
  ConsentStatus, 
  DEFAULT_CONSENT_STATE 
} from '@/lib/cookie-consent-types';

const CONSENT_STORAGE_KEY = 'monarch-painters-cookie-consent';

export function useCookieConsent() {
  const [consentState, setConsentState] = useState<CookieConsentState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load consent state from localStorage on initial render
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    try {
      const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      
      if (storedConsent) {
        // Parse stored consent
        const parsedConsent = JSON.parse(storedConsent) as CookieConsentState;
        setConsentState(parsedConsent);
      } else {
        // No stored consent, use default state
        setConsentState(DEFAULT_CONSENT_STATE);
      }
    } catch (error) {
      console.error('Error loading cookie consent from localStorage:', error);
      setConsentState(DEFAULT_CONSENT_STATE);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save consent state to localStorage whenever it changes
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined' || !consentState) return;

    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentState));

      // If consent is accepted, initialize analytics
      if (consentState.status === 'accepted') {
        initializeAnalytics();
      }
    } catch (error) {
      console.error('Error saving cookie consent to localStorage:', error);
    }
  }, [consentState, isLoaded]);

  // Update consent status
  const updateConsentStatus = (status: ConsentStatus) => {
    if (!consentState) return;

    setConsentState({
      ...consentState,
      status,
      updatedAt: new Date().toISOString(),
      isFirstVisit: false,
    });
  };

  // Accept all cookies
  const acceptAll = () => updateConsentStatus('accepted');

  // Reject all cookies
  const rejectAll = () => updateConsentStatus('rejected');

  // Revoke consent (reset to pending)
  const revokeConsent = () => {
    setConsentState({
      ...DEFAULT_CONSENT_STATE,
      isFirstVisit: false,
    });
  };

  // Initialize analytics (Google Analytics, etc.)
  const initializeAnalytics = () => {
    // This would be implemented based on the specific analytics services used
    // For example, initializing Google Analytics or Google Tag Manager
    if (typeof window === 'undefined') return;

    // Example for Google Analytics (GA4)
    if (window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  return {
    consentState,
    isLoaded,
    acceptAll,
    rejectAll,
    revokeConsent,
    hasConsented: consentState?.status === 'accepted',
    hasRejected: consentState?.status === 'rejected',
    isPending: !consentState || consentState.status === 'pending',
    isFirstVisit: consentState?.isFirstVisit ?? true,
  };
}

// Add type definition for window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}