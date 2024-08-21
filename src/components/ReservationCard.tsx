import { Reservation } from '../interfaces/reservationTypes';

interface ReservationCardProps {
  reservation: Reservation;
}
export default function ReservationCard({ reservation }: ReservationCardProps) {
  const { customer, status, shift, area, start, end, guestNotes } = reservation;
  return (
    <div className='reservation-card rounded-lg shadow-lg bg-[#ffffff33] backdrop-blur-md border border-[#ffffff1a]'>
      <div className='p-4 md:p-6 lg:p-6'>
        <div className='mb-4'>
          <p className='text-xl font-bold text-sky-300'>
            {customer.firstName} {customer.lastName}
          </p>
        </div>
        <div className='space-y-1 text-base font-normal text-indigo-200'>
          <p>
            Status:{' '}
            <span className='font-semibold text-indigo-100'>{status}</span>
          </p>
          <p>
            Shift:{' '}
            <span className='font-semibold text-indigo-100'>{shift}</span>
          </p>
          <p>
            Area: <span className='font-semibold text-indigo-100'>{area}</span>
          </p>
          <p>
            From:{' '}
            <span className='text-sm font-normal text-indigo-100 text-nowrap'>
              {new Date(start).toLocaleString()} - To:{' '}
              {new Date(end).toLocaleString()}
            </span>
          </p>
          <blockquote className='mb-4'>
            <p>
              Note:{' '}
              <span className='font-semibold text-indigo-100'>
                {guestNotes || 'No special notes provided'}
              </span>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
