// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

// Export both the routes array and the created router
export const routes = [
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><ErrorPage /></Layout>
  },
  {
    path: '/movie/:id',
    element: <Layout><Movie /></Layout>
  },
  {
    path: '/directors',
    element: <Layout><Directors /></Layout>
  },
  {
    path: '/actors',
    element: <Layout><Actors /></Layout>
  }
];

export const router = createBrowserRouter(r