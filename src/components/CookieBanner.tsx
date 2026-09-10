import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-md border-t border-[#C5A059]/20 p-4 sm:p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#A1A1A1] text-xs sm:text-sm font-light leading-relaxed max-w-4xl text-center sm:text-left">
          Charter Premium uses functional cookies to ensure secure and seamless navigation of our portfolio. We do not use intrusive third-party tracking. By continuing to explore our platform, you consent to our <a href="/privacy" className="text-[#C5A059] hover:underline">Privacy Policy</a>.
        </p>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap px-6 py-2.5 border border-[#C5A059] text-[#C5A059] text-[10px] font-sans uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#050505] transition-colors"
        >
          ACKNOWLEDGE
        </button>
      </div>
    </div>
  );
};
export default CookieBanner;
