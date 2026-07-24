(() => {
  'use strict';

  const SELECTOR = '[data-feature-showcase][data-animate="true"]';

  /**
   * Initializes scroll reveal observer for a given section container
   * @param {HTMLElement} section 
   */
  const initSection = (section) => {
    if (!section) return;

    const items = section.querySelectorAll('[data-feature-reveal]');
    if (!items.length) return;

    // Fallback if IntersectionObserver is unsupported or reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    // Configure IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        
        // Add reveal class and unobserve
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Apply staggered animation delays
    items.forEach((item, index) => {
      const delay = Math.min(index * 80, 320);
      item.style.transitionDelay = `${delay}ms`;
      observer.observe(item);
    });
  };

  /**
   * Initialize all sections currently in DOM
   */
  const initAll = () => {
    document.querySelectorAll(SELECTOR).forEach(initSection);
  };

  // Run initial DOM setup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Shopify Theme Customizer Live Preview Event Listeners
  document.addEventListener('shopify:section:load', (event) => {
    const section = event.target.matches(SELECTOR) ? event.target : event.target.querySelector(SELECTOR);
    if (section) initSection(section);
  });
})();
