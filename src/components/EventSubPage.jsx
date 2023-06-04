import React from 'react';
import useFetchEvent from 'hooks/useFetchEvent';

const EventSubPage = () => {
  const eventSub = useFetchEvent();
  // console.log(eventSub);

  return (
    <>
      {eventSub && (
        <>
          <p>{eventSub.name}</p>
          <img src={eventSub.images[0].url} alt={eventSub.name} />
        </>
      )}
    </>
  );
};

export default EventSubPage;
