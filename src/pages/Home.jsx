import React from "react";

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Modern UI Design",
      description: "Learn to build beautiful interfaces using React and TailwindCSS.",
      image: "https://source.unsplash.com/400x250/?web,design",
    },
    {
      id: 2,
      title: "Full Stack Development",
      description: "Master backend with Node.js and frontend with React.",
      image: "https://source.unsplash.com/400x250/?programming,code",
    },
    {
      id: 3,
      title: "API Integration",
      description: "Connect your frontend to powerful REST and GraphQL APIs.",
      image: "https://source.unsplash.com/400x250/?api,server",
    },
    {
      id: 4,
      title: "Database Management",
      description: "Understand MySQL and Sequelize ORM for scalable apps.",
      image: "https://source.unsplash.com/400x250/?database,technology",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">MyWebsite</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Build modern, responsive web applications with React, TailwindCSS, and Node.js.
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
          Get Started
        </button>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Topics</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
