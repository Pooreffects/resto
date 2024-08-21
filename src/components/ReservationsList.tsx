import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  FilterOptions,
  Reservation,
  SortType,
} from '../interfaces/reservationTypes';
import { fetchReservations } from '../api/reservationApi';
import ReservationCard from './ReservationCard';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Sort from './Sort';
import {
  searchReservations,
  filterReservations,
  sortReservations,
} from '../utils/reservationsUtils';

export default function ReservationsList() {
  // Fetch reservations data
  const { data, isLoading, error } = useQuery<Reservation[], Error>({
    queryKey: ['reservations'],
    queryFn: fetchReservations,
  });

  // Local state for search and filter options
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    dateFilter: { start: '', end: '' },
    statusFilter: null,
    shiftFilter: null,
    areaFilter: null,
  });
  const [sortType, setSortType] = useState<SortType>({
    field: 'quantity',
    direction: 'asc',
  });

  // Memoized and filtered/sorted data
  const filteredAndSortedData = useMemo(() => {
    if (!data) return [];

    // Apply search, filter, and sort
    let processedData = searchReservations(data, searchTerm);
    processedData = filterReservations(
      processedData,
      filterOptions.dateFilter.start
        ? new Date(filterOptions.dateFilter.start)
        : null,
      filterOptions.statusFilter,
      filterOptions.shiftFilter,
      filterOptions.areaFilter
    );
    processedData = sortReservations(processedData, sortType.field);

    return sortType.direction === 'asc'
      ? processedData
      : processedData.reverse();
  }, [data, searchTerm, filterOptions, sortType]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className='w-full h-full flex flex-col items-center content-center p-6'>
      <h2 className='text-xl font-semibold my-8 text-sky-300'>Restaurant Rervations List</h2>
      <div className='w-full flex items-center justify-between'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16'>
        {filteredAndSortedData.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </section>
  );
}
