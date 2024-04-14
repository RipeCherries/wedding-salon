import { useState, useMemo } from 'react';

export default function useFilter() {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    hasDiscount: false,
    sizes: [],
    colors: [],
    styles: [],
    minVeilsLength: '',
    maxVeilsLength: '',
  });

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const memoizedFilters = useMemo(() => filters, [filters]);

  return { filters: memoizedFilters, updateFilter };
}
