import React from 'react';
import { ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-[#F5F5F0] font-sans px-6 sm:px-12 selection:bg-[#C5A059] selection:text-[#050505]">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-light text-[#F5F5F0] tracking-tighter">
          404
        </h1>
        <p className="font-sans text-lg sm:text-xl text-[#A1A1A1] font-light leading-relaxed">
          The requested portfolio or page could not be located in our private archives.
        </p>
        <div className="pt-8">
          <a href="/" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A059] text-[#050505] font-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#d6b26d] transition-all duration-300">
            <span>RETURN TO ADVISORY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
