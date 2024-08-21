# Restaurant Reservation SPA

## Overview

This project is a web app for managing restaurant reservations.
It uses React + TS + Vite for the frontend, TailwindCSS for styling, and React Query for data fetching and caching. The application features a responsive design with glassmorphism styling for the reservation cards.

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
