import ReservationsList from './components/ReservationsList';

export default function App() {
  return (
    <main className='container mx-auto flex flex-col items-center p-6'>
      <h1 className='text-purple-300 font-semibold text-lg xl:text-3xl'>
        Resto Yassir
      </h1>
      <ReservationsList />
    </main>
  );
}
