import React from 'react';
import './quotations.css';

const AlNisrIntro = () => {
  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-stone-900">Akshay Jogi</h1>
          <p className="text-lg text-stone-600 mt-1">Freelance Software Developer</p>
          <a 
            href="https://akshayjogi.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300"
          >
            View My Portfolio
          </a>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          <section id="introduction">
            <h2 className="text-2xl font-semibold text-stone-900 border-b pb-3 mb-6 text-center">Quotation</h2>
            <div className="space-y-4 text-stone-700 text-justify">
              <div className="text-center"><strong>Dear Al Nisr Aluminium & Metal Fabrication Co WLL,</strong></div>
              <p>It has been a pleasure to work with the organization over the past few years.</p>
              <p>I am grateful for the knowledge and guidance provided by the Board Members and the wider team.</p>
              <p>Regarding the freelance opportunity, I currently have commitments in the Indian market.</p>
              <p>My standard daily rate is <strong>₹4500</strong>; which is approximately <strong>20 BHD</strong>. With an estimated commitment of four days per week,</p>
              <p> I have submitted a proposal that reflects this valuation. As a gesture of goodwill and to show my respect, </p>
              <p>I have also included a discounted rate. I am open to negotiation and would be happy to discuss any aspect of the proposal further.</p>
              <p>I hope this message finds you well. Thank you for considering me for your software development needs.</p>
            </div>
          </section>

          <section id="pricing" className="my-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-stone-900">My Daily Rate</h3>
              <p className="text-stone-600 mt-1">A transparent breakdown of my pricing.</p>
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <h4 className="text-lg font-semibold text-stone-600">Standard Rate</h4>
                  <p className="text-4xl font-bold text-stone-800 my-4">20 BHD</p>
                  <p className="text-stone-500">Equivalent to my standard rate of ₹4,000 per day.</p>
                </div>
              </div>
              <div className="border-2 border-teal-500 rounded-xl p-6 flex flex-col justify-between shadow-2xl relative ring-4 ring-teal-100">
                <span className="absolute top-0 right-6 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-b-lg">YOUR OFFER</span>
                <div>
                  <h4 className="text-lg font-semibold text-teal-700">Discounted Rate</h4>
                  <p className="text-5xl font-bold text-teal-600 my-3">17 BHD</p>
                  <p className="text-teal-900">A special rate as a gesture of goodwill and respect.</p>
                </div>
                <p className="text-sm text-stone-500 mt-4 self-start">I am excited about the potential of working together and believe this collaboration will be mutually beneficial.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center mt-10 py-6 border-t border-stone-200">
          <p className="font-semibold">Akshay Jogi</p>
          <p className="text-stone-600">admin@akshayjogi.dev</p>
          <p className="text-xs text-stone-400 mt-4">Quotation prepared on September 10, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default AlNisrIntro;
