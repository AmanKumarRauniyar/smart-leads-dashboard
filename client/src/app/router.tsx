import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { HomePage } from '@/pages/HomePage';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
