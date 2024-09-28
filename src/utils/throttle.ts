import { useRef } from 'react';

const throttle = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: T) => {
    if (timer.current) return;
    timer.current = setTimeout(() => {
      callback(...args);
      timer.current = null;
    }, delay);
  };
};

export default throttle;
