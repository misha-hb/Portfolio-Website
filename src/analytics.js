
export function trackEvent(action, params = {}) {
  if (window && window.gtag) {
    window.gtag('event', action, params);
  } 
}
