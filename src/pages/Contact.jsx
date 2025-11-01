import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Got questions, suggestions, or need help with your homework?  
          Our team is here 24/7 to assist you!
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="flex-grow py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Reach out to us anytime through the form or the following details.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">support@homeworkhub.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">123 Study Lane, Knowledge City</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Working Hours</h3>
            <p className="text-gray-600">Monday – Sunday: 24/7 Support</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Send Us a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="bg-blue-100 py-10 text-center">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Find Us on the Map
        </h3>
        <iframe
          title="HomeworkHub Location"
          className="w-full max-w-4xl mx-auto h-64 rounded-2xl border-2 border-blue-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.296294980586!2d85.31519097511263!3d27.70619437619107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b3f48a9ed%3A0x8b3a2c3f98c6f01!2sKathmandu!5e0!3m2!1sen!2snp!4v1699501234567!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
