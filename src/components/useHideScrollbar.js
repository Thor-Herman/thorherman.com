import React, { useEffect } from 'react';

const useHideScrollbar = () => {
  useEffect(() => {
    // Remove outer scrollbar
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
};

export default useHideScrollbar;
