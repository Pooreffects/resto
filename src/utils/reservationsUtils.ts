import { Reservation } from '../interfaces/reservationTypes';

/* Search */
export function searchReservations(
  reservations: Reservation[],
  searchTerm: string
): Reservation[] {
  if (!searchTerm) return reservations;

  const lowercasedTerm = searchTerm.toLowerCase();
  return reservations.filter((reservation) => {
    const fullName =
      `${reservation.customer.firstName} ${reservation.customer.lastName}`.toLowerCase();
    return fullName.includes(lowercasedTerm);
  });
}
/* Filter */
export function filterReservations(
  reservations: Reservation[],
  dateFilter: Date | null,
  statusFilter: string | null,
  shiftFilter: string | null,
  areaFilter: string | null
): Reservation[] {
  return reservations.filter((reservation) => {
    const matchesDate = dateFilter
      ? new Date(reservation.start).toDateString() === dateFilter.toDateString()
      : true;
    const matchesStatus = statusFilter
      ? reservation.status === statusFilter
      : true;
    const matchesShift = shiftFilter ? reservation.shift === shiftFilter : true;
    const matchesArea = areaFilter ? reservation.area === areaFilter : true;

    return matchesDate && matchesStatus && matchesShift && matchesArea;
  });
}
/* Sort */
export function sortReservations(
  reservations: Reservation[],
  sortBy: 'quantity' | 'customerName'
): Reservation[] {
  return reservations.sort((a, b) => {
    if (sortBy === 'quantity') {
      return a.quantity - b.quantity;
    } else {
      const nameA =
        `${a.customer.firstName} ${a.customer.lastName}`.toLowerCase();
      const nameB =
        `${b.customer.firstName} ${b.customer.lastName}`.toLowerCase();
      return nameA.localeCompare(nameB);
    }
  });
}
