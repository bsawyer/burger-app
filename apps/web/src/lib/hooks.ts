import { useState, useEffect } from 'react';

export function useCookie(name: string): string {
  const getValue = () => {
    return (
      document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || ''
    );
  };
  const [value, setValue] = useState(''); // consistent ssr/ csr value for hydration
  useEffect(() => {
    window.addEventListener(name, () => {
      setValue(getValue());
    });
    setTimeout(() => {
      setValue(getValue());
    }, 0);
  }, []);
  return value;
}
