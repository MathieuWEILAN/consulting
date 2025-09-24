"use client";

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Préchargement des ressources critiques
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/assets/img/green-homepage.png',
        '/assets/img/engagement.jpg',
        '/assets/img/analyse.jpg'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimisation des polices
    const optimizeFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.gstatic.com';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Exécution des optimisations
    if (typeof window !== 'undefined') {
      // Délai pour ne pas bloquer le rendu initial
      setTimeout(() => {
        preloadCriticalResources();
        optimizeFonts();
      }, 100);
    }
  }, []);

  return null; // Composant invisible
};

export default PerformanceOptimizer;