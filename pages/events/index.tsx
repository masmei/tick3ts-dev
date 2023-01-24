import React, { useState } from 'react';
import type { NextPage } from "next";
import Link from 'next/link';

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Code and Pizza',
      date: '12-31-2022',
      location: 'New York City, NY',
      image: 'https://media.gettyimages.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=gi&k=20&c=Y_31EZsuzF6wCngJXiKd7o6DRTxofRGQMzBcmSvb_4I='
    },
    {
      id: 2,
      title: 'Theater Show',
      date: '10-15-2022',
      location: 'Los Angeles, CA',
      image: 'https://via.placeholder.com/500x300.png?text=Theater'
    },
    {
      id: 3,
      title: 'Sports Event',
      date: '07-01-2022',
      location: 'Chicago, IL',
      image: 'https://via.placeholder.com/500x300.png?text=Sports'
    },
  ]);

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-medium text-center text-pink-500 mb-4 mt-2">Events</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
       <Link className="relative rounded-lg shadow-md bg-slate-50" href="/events/mint" key={event.id}>
       <div className="p-4">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="p-4">
            <h2 className="text-lg font-medium text-center">{event.title}</h2>
            <p className="text-gray-600 text-center">{event.date}</p>
            <p className="text-gray-600 text-center">{event.location}</p>
        </div>
  
   </Link>
      ))}
    </div>
  </div>
  );
};

export default Events;
