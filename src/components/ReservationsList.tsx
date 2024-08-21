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
import Sidebar from './Sidebar';

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

  /* Sidebar Toggle and Click Count for spamming limit*/
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [sortType, setSortType] = useState<SortType>({
    field: 'quantity',
    direction: 'asc',
  });

  // Memoized filtered/sorted data
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

  const handleSidebarToggle = () => {
    if (clickCount < 5) {
      setSidebarOpen((prevState) => !prevState);
      setClickCount((prevCount) => prevCount + 1);
    }

    if (clickCount === 4) {
      setTimeout(() => {
        setClickCount(0);
      }, 5000);
    }
  };

  return (
    <section className='w-full h-full flex flex-col items-center content-center my-6 md:my-10 lg:my-12'>
      {/* Burger */}
      <button
        className='lg:hidden block text-indigo-200 mb-2'
        onClick={handleSidebarToggle}
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          ></path>
        </svg>
      </button>

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        sortType={sortType}
        setSortType={setSortType}
      />

      <div className='hidden  md:p-4 md:container md:mx-auto lg:container  lg:flex items-center justify-between'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className='mt-10 text-xl xl:text-2xl font-semibold text-sky-300'>
        Restaurant Rervations List
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 sm:mx-4'>
        {filteredAndSortedData.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </section>
  );
}
