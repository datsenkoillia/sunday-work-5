import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'servises/events-api';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventname = searchParams.get('eventname');

  useEffect(() => {
    if (eventname === '' || eventname === null) return;

    fetchEventsByName(eventname)
      .then(setEvents)
      .catch(error => console.log(error));
  }, [eventname]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchPage;
