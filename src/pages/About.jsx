import React from "react";
import { BookOpen, Users, Laptop, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About HomeworkHub</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your trusted digital companion for fast, accurate, and easy homework solutions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-600">HomeworkHub</span>, we believe that learning should be
          accessible, enjoyable, and stress-free. Our goal is to help students
          save time, improve understanding, and gain confidence in their academic journey.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <BookOpen size={40} className="text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Expert Solutions</h3>
              <p className="text-gray-600 text-sm">
                Get accurate, step-by-step answers prepared by subject experts.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <Users size={40} className="text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Join our student community and collaborate on assignments easily.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <Laptop size={40} className="text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Tech-Powered Help</h3>
              <p className="text-gray-600 text-sm">
                Smart tools and AI assistance to simplify your learning experience.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <Star size={40} className="text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Trusted by Students</h3>
              <p className="text-gray-600 text-sm">
                Thousands of students rely on HomeworkHub for daily homework help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Sarah Parker",
              role: "Math Expert",
              img: "https://source.unsplash.com/200x200/?woman,portrait",
            },
            {
              name: "James Brown",
              role: "Science Tutor",
              img: "https://source.unsplash.com/200x200/?man,teacher",
            },
            {
              name: "Emily Clark",
              role: "Language Coach",
              img: "https://source.unsplash.com/200x200/?woman,teacher",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
              <p className="text-blue-600 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Join HomeworkHub now and make studying smarter, not harder.
        </p>
        <a
          href="/register"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;
