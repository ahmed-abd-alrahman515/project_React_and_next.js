export const initAnimateOnScroll = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((element) => {
      element.removeAttribute('data-animate');
      element.removeAttribute('data-animate-delay');
    });
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animationName = element.getAttribute('data-animate');
        const delay = element.getAttribute('data-animate-delay');

        if (animationName) {
          if (delay) {
            element.style.animationDelay = delay;
          }

          element.classList.add('animate__animated', `animate__${animationName}`);

          element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', `animate__${animationName}`);
          }, { once: true });

          observer.unobserve(element);
        }
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('[data-animate]');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
};
