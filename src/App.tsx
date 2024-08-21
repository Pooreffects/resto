import ReservationsList from './components/ReservationsList';

export default function App() {
  return (
    <main className='container mx-auto flex flex-col items-center py-8'>
      <div>
        <img src='/yassir-logo.svg' alt='Logo' />
        <h1 className='text-slate-50 font-semibold text-2xl xl:text-4xl'>
          Resto Yassir
        </h1>
      </div>
      <ReservationsList />
    </main>
  );
}
