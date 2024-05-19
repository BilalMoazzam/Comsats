// import React, { useEffect, useState } from 'react';
// import './Events.css';

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setEvents(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="events"><p>Loading events...</p></div>;
//   }

//   if (error) {
//     return <div className="events"><p>Error: {error}</p></div>;
//   }

//   return (
//     <div className="events">
//       <h2>Upcoming Events</h2>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>
//             <h3>{event.title}</h3>
//             <p><strong>Date:</strong> {event.date}</p>
//             <p><strong>Location:</strong> {event.location}</p>
//             <p><strong>Organizer:</strong> {event.organizer}</p>
//             <p>{event.description}</p>
//             {event.link && (
//               <p><a href={event.link} target="_blank" rel="noopener noreferrer">More Information</a></p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Events;


import React from 'react';
import './Events.css';

const eventData = [
  {
    id: 1,
    title: 'Web Development',
    date: '2024-05-20',
    location: 'Expo Center',
    organizer: 'Comsats University',
    description: 'Event is about Web-A-Thon'
  },
  {
    id: 2,
    title: 'Ethical Hacking',
    date: '2024-05-21',
    location: 'Emporium Nishat Hotel',
    organizer: 'Comsats University',
    description: 'Event is about Ethical Hacking'
  },
  // Add more event objects here...
];

const Events = () => {
  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <ul>
        {eventData.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Organizer:</strong> {event.organizer}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
