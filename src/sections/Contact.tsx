"use client";
import arrowUp from "@/assets/images/arrow-up.png";
import terminal from "@/assets/images/terminal.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log(form);
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto c-space my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center justify-center flex-col"
      >
        <Image
          src={terminal}
          alt="terminal background"
          className="
absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="portfolio-gradient-text sm:text-4xl text-3xl font-semibold ">
            Let's Talk
          </h3>
          <p className="text-lg text-white-600">
            Whether you're looking to build a new website, improve your existing
            platform or bring a unique project to life, I'm here to help.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-3"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="John Doe"
            />
            <label className="space-y-3">
              <span className="field-label">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="johndoe@gmail.com"
            />
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Hey, I wanna give you a job ..."
            />

            <button
              type="submit"
              disabled={loading}
              className="portfolio-gradient  field-btn"
            >
              {loading ? "Sending..." : "Send Message"}
              <Image src={arrowUp} alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
