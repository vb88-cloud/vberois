import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#FF6B00] hover:bg-[#FF8533] border-4 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#FFD600] shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 text-white" strokeWidth={3} />
    </button>
  );
}
