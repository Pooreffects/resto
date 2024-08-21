export interface Customer {
  firstName: string;
  lastName: string;
}

export interface Reservation {
  id: number;
  businessDate: string;
  status: string;
  shift: string;
  start: string;
  end: string;
  quantity: number;
  customer: Customer;
  area: string;
  guestNotes: string;
}

export interface FilterType {
  status?: string;
  dateRange?: { start: string; end: string }; // Example: { start: "2024-01-01", end: "2024-01-31" }
  shift?: string;
  area?: string;
}

export interface SortType {
  field: 'quantity' | 'customerName';
  direction: 'asc' | 'desc'; // Sorting direction
}
