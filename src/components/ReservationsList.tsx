import { useQuery } from '@tanstack/react-query';
import { Reservation } from '../interfaces/reservationTypes';
import { fetchReservations } from '../api/reservationApi';
import ReservationCard from './ReservationCard';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

export default function ReservationsList() {
  const { data, isLoading, error } = useQuery<Reservation[], Error>({
    queryKey: ['reservations'],
    queryFn: fetchReservations,
  });

  const [filteredData, setFilteredData] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) {
    <div>
      Error: {error instanceof Error ? error.message : 'An unknown error'}
    </div>;
  }

  return (
    <section className='w-full h-full flex flex-col items-center content-center p-6'>
      <h2 className='text-lg'>Reservations List 👇</h2>
      <div className='w-full flex items-center justify-between'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {filteredData.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </section>
  );
}
