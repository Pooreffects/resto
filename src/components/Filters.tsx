import React, { ChangeEvent } from 'react';
import { FilterOptions } from '../interfaces/reservationTypes';

// Predefined options
const statusOptions: Array<
  'CHECKED OUT' | 'NOT CONFIRMED' | 'SEATED' | 'CONFIRMED'
> = ['CHECKED OUT', 'NOT CONFIRMED', 'SEATED', 'CONFIRMED'];
const shiftOptions: Array<'BREAKFAST' | 'LUNCH' | 'DINNER'> = [
  'BREAKFAST',
  'LUNCH',
  'DINNER',
];
const areaOptions: Array<'BAR' | 'MAIN ROOM'> = ['BAR', 'MAIN ROOM'];

interface FiltersProps {
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function Filters({
  filterOptions,
  setFilterOptions,
}: FiltersProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value || null,
    }));
  };

  return (
    <div className='md:w-1/2 flex flex-col gap-3 md:flex-row md:items-center justify-around'>
      <h3 className='md:hidden'>Filters</h3>
      <select
        className='p-1 text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        name='statusFilter'
        value={filterOptions.statusFilter || ''}
        onChange={handleSelectChange}
      >
        <option value=''>Select Status</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <select
        className='p-1 text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        name='shiftFilter'
        value={filterOptions.shiftFilter || ''}
        onChange={handleSelectChange}
      >
        <option value=''>Select Shift</option>
        {shiftOptions.map((shift) => (
          <option key={shift} value={shift}>
            {shift}
          </option>
        ))}
      </select>
      <select
        className='p-1 text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        name='areaFilter'
        value={filterOptions.areaFilter || ''}
        onChange={handleSelectChange}
      >
        <option value=''>Select Area</option>
        {areaOptions.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
}
