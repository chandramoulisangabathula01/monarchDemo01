'use client';

import Link from 'next/link';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

interface ConsentRevocationLinkProps {
  className?: string;
}

export function ConsentRevocationLink({ className }: ConsentRevocationLinkProps) {
  const { revokeConsent, isPending } = useCookieConsent();
  
  // Don't show the link if consent is already pending
  if (isPending) {
    return null;
  }
  
  return (
    <Link 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        revokeConsent();
      }}
      className={className || "text-[#e6ab65] hover:text-[#e6ab65]/80 transition-colors text-sm"}
    >
      Cookie Settings
    </Link>
  );
}