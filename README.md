# Restaurant Reservation SPA

## Overview

This project is a web app for managing restaurant reservations.
It uses React + TS + Vite for the frontend, TailwindCSS for styling, and React Query for data fetching and caching. The application features a responsive design with glassmorphism styling for the reservation cards.

## Features

- **Search**: Find reservations by customer name.
- **Filter**: Apply filters based on status, shift, area, and date range.
- **Sort**: Sort reservations by quantity or customer name.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Query**: Data-fetching and state management library for handling server state.
- **TypeScript**: TypeScript for type safety.
- **Vite**: Build tool for fast development.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Pooreffects/resto-yassir.git
   cd restaurant-reservation-system
   ```

## Challenging Steps & Solutions

#### 1. Handling State and TypeScript Errors

_Issue_: Initially, managing complex state updates and TypeScript errors was challenging. Specifically, TypeScript errors like Type 'null' is not assignable to type ... and Argument of type '...' is not assignable to parameter of type ... appeared frequently.

#### Solution:

- Ensured that state variables and updater functions were correctly typed.
- Used React.Dispatch<React.SetStateAction<FilterOptions>> for state setters to match the expected types.
- Updated the state management functions to handle null values properly and ensured the correct types were used throughout the app.

#### 2. Filter and Sort Logic

_Issue_: Implementing the filter and sort functionality posed difficulties, particularly in ensuring that the filtering and sorting logic was consistent with the data structure and TypeScript types.

#### Solution:

- Adjusted the filterReservations and sortReservations utility functions to match the expected data types and formats.
- Revised the FilterOptions and SortType interfaces to align with the actual data used in the application.
- Implemented proper data transformation and validation to handle cases where filters or sorts might not apply.

#### 3. Date Handling

_Issue_: Managing date ranges and ensuring they were correctly applied to the filter logic was complex, especially with different date formats and the need to compare dates accurately.

#### Solution:

- Standardized date formats to ensure consistency.
- Utilized JavaScript's Date object for comparisons and conversions.
- Created helper functions to handle date transformations and comparisons in the filter logic.
- Structured components to clearly define props and state.
- Used TS to enforce correct prop types and ensure type safety.
- Refactored components to manage state and props effectively, ensuring smooth communication and data flow between components.

#### Usage

- Search: Enter a customer name in the search bar to find relevant reservations.
- Filter: Use the dropdowns to filter reservations by status, shift, area, and date range.
- Sort: Choose how to sort the reservations (by quantity or customer name) using the sort options.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
