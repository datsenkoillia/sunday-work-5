import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import EventsPage from 'pages/EventsPage';
import SearchPage from 'pages/SearchPage';
import EventSubPage from './EventSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
