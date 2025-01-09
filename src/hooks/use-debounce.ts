import { useEffect, useState } from "react";

export const UseDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return debouncedValue;
};

/**
 * hook personalizado que desfaz o retorno de um valor por um atraso especificado.
 *
 * @template T - The type of the value to debounce.
 * @param {T} value - The value to debounce.
 * @param {number} [delay=500] - The delay in milliseconds to debounce the value. Defaults to 500ms if not provided.
 * @returns {T} - The debounced value.
 *
 * @example
 * const debouncedSearchTerm = UseDebounce(searchTerm, 300);
 */
