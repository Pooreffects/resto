const API_URL =
  'https://gist.githubusercontent.com/dhwissem/5e7c48768af1eb721d9e2e1d874cd9a0/raw/6530e16c5aa203c1a1c41e5fb73595870407cb56/serverResponse.json';

export const fetchReservations = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch reservations. Status ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching reservations: ${error}`);
    throw error;
  }
};
