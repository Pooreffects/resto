interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className='relative'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
        <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
          <path
            d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
        </svg>
      </span>

      <input
        type='text'
        className='w-full py-3 pl-10 pr-4 text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        placeholder='Search by Name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
