"use client";

import { useEffect, useState, useCallback } from 'react';

export const usePerformance = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Détection des préférences d'animation réduite
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };

      mediaQuery.addListener(handleChange);

      // Détection de connexion lente
      const connection = (navigator as any).connection;
      if (connection) {
        const slowConnections = ['slow-2g', '2g', '3g'];
        setIsSlowNetwork(slowConnections.includes(connection.effectiveType));
      }

      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const getOptimizedVariants = useCallback((variants: any) => {
    if (isReducedMotion || isSlowNetwork) {
      return {
        offscreen: { opacity: 0 },
        onscreen: {
          opacity: 1,
          transition: { duration: 0.1 }
        }
      };
    }
    return variants;
  }, [isReducedMotion, isSlowNetwork]);

  return {
    isReducedMotion,
    isSlowNetwork,
    getOptimizedVariants,
    shouldReduceAnimations: isReducedMotion || isSlowNetwork
  };
};