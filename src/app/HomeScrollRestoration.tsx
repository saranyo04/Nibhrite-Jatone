'use client';

import { useEffect } from 'react';
import { HOME_SCROLL_RESTORE_KEY, HOME_SCROLL_RESTORE_PENDING_KEY } from '@/data/navigation-state';

const HOME_SCROLL_SAVE_INTERVAL_MS = 200;

export default function HomeScrollRestoration() {
  useEffect(() => {
    let frameId: number | null = null;
    let lastSavedAt = 0;

    const saveScrollPosition = () => {
      const now = Date.now();
      if (now - lastSavedAt < HOME_SCROLL_SAVE_INTERVAL_MS) return;
      lastSavedAt = now;

      try {
        sessionStorage.setItem(HOME_SCROLL_RESTORE_KEY, String(window.scrollY));
      } catch {
      }
    };

    try {
      const restorePending = sessionStorage.getItem(HOME_SCROLL_RESTORE_PENDING_KEY);
      const savedScrollY = sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY);
      if (restorePending !== null) {
        sessionStorage.removeItem(HOME_SCROLL_RESTORE_PENDING_KEY);
        sessionStorage.removeItem(HOME_SCROLL_RESTORE_KEY);
        const scrollY = Number(savedScrollY);
        if (Number.isFinite(scrollY)) {
          frameId = window.requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
          });
        }
      }
    } catch {
    }

    window.addEventListener('scroll', saveScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
