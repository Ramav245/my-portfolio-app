// src/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    // Send form data via EmailJS
    emailjs
      .send(
        'service_8eus6xh', // Replace with your EmailJS service ID
        'template_0j8ql1i', // Replace with your EmailJS template ID
        formData,
        'z64kNP5Rcll4hIysq' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setError('');
        },
        (err) => {
          console.log('FAILED...', err);
          setError('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-extralight text-left mb-4">Contact Me</h2>
      {isSubmitted && (
        <p className="text-green-500 text-center">Your message has been sent!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col text-left text-black">
          <label htmlFor="name" className="mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col text-left text-black">
          <label htmlFor="email" className="mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col text-left text-black">
          <label htmlFor="message" className="mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Message"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
