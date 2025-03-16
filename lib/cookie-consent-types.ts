/**
 * Types for the cookie consent solution
 */

// Possible consent statuses
export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

// Structure for storing consent in localStorage
export interface CookieConsentState {
  status: ConsentStatus;
  updatedAt: string; // ISO date string
  isFirstVisit: boolean;
}

// Default/initial state when no consent has been given yet
export const DEFAULT_CONSENT_STATE: CookieConsentState = {
  status: 'pending',
  updatedAt: new Date().toISOString(),
  isFirstVisit: true,
};

// Configuration options for the consent manager
export interface ConsentManagerConfig {
  privacyPolicyUrl: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}