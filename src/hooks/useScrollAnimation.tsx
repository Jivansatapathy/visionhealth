import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    console.log('Setting up scroll animation observer');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Element observed:', entry.target, 'Is visible:', entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            console.log('Added in-view class to:', entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    console.log('Found animate-on-scroll elements:', animateElements.length);
    
    animateElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;