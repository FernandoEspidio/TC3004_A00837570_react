import { useState } from 'react';

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  const setCustomValue = (value) => setCount(value);

  return {
    count,
    increment,
    decrement,
    reset,
    setCustomValue
  };
};