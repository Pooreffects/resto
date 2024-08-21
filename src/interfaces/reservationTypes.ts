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
  status?: 'CHECKED OUT' | 'NOT CONFIRMED' | 'SEATED' | 'CONFIRMED';
  dateRange?: { start: string; end: string };
  shift?: 'BREAKFAST' | 'LUNCH' | 'DINNER';
  area?: 'BAR' | 'MAIN ROOM';
}

export interface SortType {
  field: 'quantity' | 'customerName';
  direction: 'asc' | 'desc';
}

export interface FilterOptions {
  dateFilter: { start: string; end: string };
  statusFilter: 'CHECKED OUT' | 'NOT CONFIRMED' | 'SEATED' | 'CONFIRMED' | null;
  shiftFilter: 'BREAKFAST' | 'LUNCH' | 'DINNER' | null;
  areaFilter: 'BAR' | 'MAIN ROOM' | null;
}

export type SortBy = 'date' | 'quantity' | 'customerName';
