import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-slide-down">
      <div className="bg-white/90 backdrop-blur-xl bg-opacity-90 px-8 py-4 rounded-2xl shadow-2xl shadow-primary/30 flex items-center gap-3 border border-white/20">
        <svg className="w-6 h-6 flex-shrink-0 text-[#572B7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-semibold text-lg text-[#572B7E]">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
