import React from "react";
import { Lightbulb, BookOpen, Laptop, Users, CheckCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      id: 1,
      icon: <Lightbulb className="text-yellow-400 w-10 h-10 mb-3" />,
      title: "Instant Homework Help",
      desc: "Get accurate answers and clear explanations in minutes from verified experts.",
    },
    {
      id: 2,
      icon: <BookOpen className="text-blue-500 w-10 h-10 mb-3" />,
      title: "Step-by-Step Solutions",
      desc: "Learn better with detailed solutions that help you understand each concept.",
    },
    {
      id: 3,
      icon: <Laptop className="text-green-500 w-10 h-10 mb-3" />,
      title: "24/7 Availability",
      desc: "Our experts and AI-powered tools are available anytime you need homework support.",
    },
    {
      id: 4,
      icon: <Users className="text-purple-500 w-10 h-10 mb-3" />,
      title: "Trusted by Students",
      desc: "Join thousands of learners who use HomeworkHub for daily assignments.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smarter Way to Solve Your Homework
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          HomeworkHub helps you understand, learn, and complete your assignments faster — with expert help and AI tools.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/register"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Get Started Free
          </a>
          <a
            href="/about"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          Why Choose HomeworkHub?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                {f.icon}
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">
            How HomeworkHub Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Your Question",
                desc: "Simply post your homework or take a picture of the problem.",
              },
              {
                step: "2",
                title: "Get Expert Solution",
                desc: "Our tutors or AI will solve it step-by-step within minutes.",
              },
              {
                step: "3",
                title: "Learn & Improve",
                desc: "Understand the concept clearly and boost your grades easily.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Singh",
              feedback:
                "HomeworkHub made my life so easy! The step-by-step explanations really helped me understand tough math problems.",
            },
            {
              name: "Sophia Sharma",
              feedback:
                "Best site for quick help before exams. Love how clean and simple everything is.",
            },
            {
              name: "Ravi Patel",
              feedback:
                "I used to stress over assignments. Now I just upload and learn from the expert solutions!",
            },
          ].map((s, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">“{s.feedback}”</p>
              <h4 className="text-blue-600 font-semibold">{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Solve Your Homework Smarter?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Join HomeworkHub today and access thousands of solutions, tutors, and learning resources.
        </p>
        <a
          href="/register"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
