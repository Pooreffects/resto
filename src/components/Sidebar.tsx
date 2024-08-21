import Filters from './Filters';
import SearchBar from './SearchBar';
import Sort from './Sort';
import { FilterOptions, SortType } from '../interfaces/reservationTypes';
import { useEffect, useRef } from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  sortType: SortType;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  searchTerm,
  setSearchTerm,
  filterOptions,
  setFilterOptions,
  sortType,
  setSortType,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    }
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 md:hidden transition-transform duration-400 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        ref={sidebarRef}
        className='absolute top-0 right-0 w-80 px-8 bg-slate-800 p-4 shadow-lg h-full'
      >
        <button
          className='text-indigo-100'
          onClick={() => setSidebarOpen(false)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>

        <div className='flex flex-col gap-4 mt-8'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filters
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
          <Sort sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </div>
  );
}
