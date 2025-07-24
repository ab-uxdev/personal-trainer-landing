
import React from "react";
import trainerImage from './trainer.jpg'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">PrimeFit</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
          <button className="md:hidden p-2 border border-white">Menu</button>
        </div>
      </header>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Train Hard. Stay Strong.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Personalized 1-on-1 fitness coaching to help you build muscle, lose fat, and transform your body.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-6 py-3 text-lg font-semibold rounded hover:bg-gray-800"
            >
              Book a Free Session
            </a>
          </div>
          <div>
            <img
              src={trainerImage}
              alt="Trainer"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Meet Your Coach</h3>
          <p className="text-gray-700 text-lg">
            I'm Alex, a certified personal trainer with over 8 years of experience helping clients achieve real, lasting results through customized training and nutrition plans.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h4 className="font-semibold text-xl mb-2">1-on-1 Coaching</h4>
              <p className="text-gray-600">Customized workouts and real-time feedback for faster results.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h4 className="font-semibold text-xl mb-2">Nutrition Guidance</h4>
              <p className="text-gray-600">Meal plans and macros tailored to your body and goals.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h4 className="font-semibold text-xl mb-2">Online Programs</h4>
              <p className="text-gray-600">Train anywhere with structured home & gym programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">What Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                “Working with Alex was life-changing. I lost 20kg and feel stronger than ever.”
              </p>
              <span className="font-semibold">— Rahul M.</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                “Best investment in myself. The coaching kept me accountable and motivated.”
              </p>
              <span className="font-semibold">— Priya S.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
          <p className="mb-8 text-gray-300">
            Let’s talk about your goals. Book a free consultation and take the first step.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-white text-black"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-white text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-gray-500 text-center py-6 text-sm">
        © 2025 PrimeFit. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
