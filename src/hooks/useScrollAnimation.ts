import { useEffect, useState, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

// Lightweight animation classes
export const fadeUp = (isVisible: boolean, delay: number = 0) => 
  `transition-all duration-700 ease-out ${
    isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  }` + (delay ? ` delay-[${delay}ms]` : '');

export const fadeIn = (isVisible: boolean, delay: number = 0) => 
  `transition-opacity duration-700 ease-out ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }` + (delay ? ` delay-[${delay}ms]` : '');

export const slideLeft = (isVisible: boolean) => 
  `transition-all duration-700 ease-out ${
    isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8'
  }`;

export const slideRight = (isVisible: boolean) => 
  `transition-all duration-700 ease-out ${
    isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8'
  }`;

export const scaleIn = (isVisible: boolean) => 
  `transition-all duration-500 ease-out ${
    isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95'
  }`;
