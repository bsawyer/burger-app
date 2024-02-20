import { useState, useEffect } from 'react';

export function useCookie(name: string): string {
  const getValue = () => {
    if (typeof document !== 'undefined') {
      return (
        document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || ''
      );
    }
    return '';
  };
  const [value, setValue] = useState(''); // consistent ssr/ csr value for hydration
  if (typeof window !== 'undefined') {
    window.addEventListener(name, () => {
      setValue(getValue());
    });
  }
  useEffect(() => {
    setTimeout(() => {
      setValue(getValue());
    });
  }, []);
  return value;
}
