import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus("Please fill all required fields!");
      return;
    }

    // Use EmailJS service to send the email
    emailjs
      .sendForm(
        "service_okj4mbj",
        "template_0miv74r",
        e.target,
        "An4XwIC9EKOe92M3Y"
      )
      .then(
        (result) => {
          console.log(result)
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error)
          setFormStatus("Error: Could not send the message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20 px-6"
    >
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4">
            I'm available for freelance work or full-time positions. Feel free
            to reach out to me!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <input
              type="text"
              name="user_name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700 border border-cyan-500 text-white rounded-md"
            />
            <input
              type="email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700 border border-cyan-500 text-white rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 bg-gray-700 border border-cyan-500 text-white rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 duration-300"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="text-green-500 text-center mt-4">{formStatus}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
