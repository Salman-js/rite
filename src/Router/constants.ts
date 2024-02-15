/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  ME: '/me',
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:8000';
