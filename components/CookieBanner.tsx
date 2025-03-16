'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/hooks/use-cookie-consent';
import { cn } from '@/lib/utils';

interface CookieBannerProps {
  privacyPolicyUrl: string;
}

export function CookieBanner({ privacyPolicyUrl }: CookieBannerProps) {
  const {
    consentState,
    isLoaded,
    acceptAll,
    rejectAll,
    isPending,
  } = useCookieConsent();

  // Only show banner after client-side hydration and if consent is pending
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR or if consent is already given
  if (!isMounted || !isLoaded || !isPending) {
    return null;
  }

  return (
    <AnimatePresence>
      {isPending && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <div className="bg-[#711f50] rounded-lg shadow-lg p-4 md:p-6 border border-[#e6ab65]/20">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#e6ab65] mb-2">Cookie Consent</h3>
                  <p className="text-white/90 text-sm md:text-base">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    <Link 
                      href={privacyPolicyUrl} 
                      className="text-[#e6ab65] underline hover:text-[#e6ab65]/80 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-0">
                  <button
                    onClick={rejectAll}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                      "bg-gray-200 text-[#711f50] hover:bg-white"
                    )}
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                      "bg-[#e6ab65] text-[#711f50] hover:bg-[#e6ab65]/90"
                    )}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}