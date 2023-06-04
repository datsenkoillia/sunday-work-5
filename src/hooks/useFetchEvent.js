import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'servises/events-api';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  // console.log(eventId);

  useEffect(() => {
    fetchEventById(eventId)
      .then(setEvent)
      .catch(error => console.log(error));
  }, [eventId]);

  return event;
};

export default useFetchEvent;
