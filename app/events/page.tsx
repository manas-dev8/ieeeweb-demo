"use client"

import React from 'react';
import Image from 'next/image';

const EventsPage = () => {
  const bigEvent = {
    title: "All India Computer Society Student and Young Professionals Congress 2024",
    date: "October 17-19, 2024",
    description: "The All India Computer Society Student & Young Professional Congress (AICSSYC) organized by the IEEE Computer Society SYP offers an exceptional opportunity for bright and enthusiastic minds to come together and exchange their knowledge and innovative ideas",
    image: "/events/aicssyc.jpg",
  };

  const upcomingEvents = [
    {
      title: "AI & ML Workshop",
      date: "April 10, 2024",
      description: "A deep dive into artificial intelligence and machine learning, tailored for beginners and professionals.",
      image: "/events/ai-ml-workshop.jpg",
    },
    {
      title: "IoT Hackathon",
      date: "May 5, 2024",
      description: "An exciting hackathon focusing on Internet of Things projects, with amazing prizes to be won!",
      image: "/events/iot-hackathon.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "Women in Tech Meetup",
      date: "June 20, 2023",
      description: "Celebrating women in technology with inspiring stories and networking opportunities.",
      image: "/events/women-in-tech.jpg",
    },
    {
      title: "Robotics Workshop",
      date: "May 15, 2023",
      description: "Hands-on robotics sessions to empower enthusiasts with the latest advancements.",
      image: "/events/robotics-workshop.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r pt-10 from-blue-50 to-blue-100  text-black py-10 px-5">
      <h1 className="text-4xl font-bold text-center pt-10 mb-10">IEEE GU SB Events</h1>

      {/* Big Event Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Event</h2>
        <div className="flex flex-col lg:flex-row bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <Image
              src={bigEvent.image}
              alt={bigEvent.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4">{bigEvent.title}</h3>
            <p className="text-lg text-blue-600 mb-2">{bigEvent.date}</p>
            <p className="text-gray-700 mb-4">{bigEvent.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;