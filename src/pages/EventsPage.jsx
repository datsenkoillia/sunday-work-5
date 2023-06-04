import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from 'servises/events-api';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {events.map(({ name, id }) => (
        <li key={id}>
          <Link to={`${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EventsPage;
