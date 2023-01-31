import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  link: string;
};

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "NBA All-Star Game 2023",
      date: "Feb 19, 2023",
      location: "Salt Lake City, UT",
      image: "/nba.png",
      link: "/events/nba",
    },
    {
      id: 2,
      title: "NFL Pro Bowl 2023",
      date: "February 2, 2023",
      location: "Las Vegas, NV",
      image: "/nfl.png",
      link: "/events/nfl",
    },
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4 mt-2">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <Link
            href={event.link}
            key={event.id}
          >
            <div className="text-center shadow-lg rounded-xl my-10 bg-rose-900">
              <div className="flex justify-center">
                <img
                  className="rounded-xl"
                  src={event.image}
                  width={500}
                  alt="event-image"
                />
              </div>
              <h3 className="text-2xl pt-5 font-medium">{event.title}</h3>
              <div className="py-3">
               <p>{event.date}</p>
               <p>{event.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
