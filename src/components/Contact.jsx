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

    // Validate required fields
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus("Please fill all required fields!");
      return;
    }

    // Use EmailJS to send the email
    emailjs
      .sendForm(
        "service_okj4mbj",
        "template_0miv74r",
        e.target,
        "An4XwIC9EKOe92M3Y"
      )
      .then(
        (result) => {
          console.log(result);
          setFormStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log(error);
          setFormStatus(
            "Error: Could not send the message. Please try again."
          );
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold border-b-2 border-gray-500 inline-block">
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
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <motion.input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-gray-600 text-white rounded-md hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
            {formStatus && (
              <p
                className={`text-center mt-4 ${
                  formStatus.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {formStatus}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
