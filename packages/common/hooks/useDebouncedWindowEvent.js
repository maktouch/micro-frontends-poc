import { useEffect, useState } from 'react';

const debounce = (delay, fn) => {
  let timerId;

  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};

export const useDebouncedWindowEvent = (event, cb, debounceTime) => {
  useEffect(() => {
    let callback = cb;

    if (debounceTime) {
      callback = debounce(debounceTime, cb);
    }

    window.addEventListener(event, callback);

    return () => window.removeEventListener('resize', callback);
  }, []);
};
