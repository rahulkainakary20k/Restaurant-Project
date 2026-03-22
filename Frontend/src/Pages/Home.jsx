import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <div className="relative bg-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Experience Culinary <span className="text-yellow-400">Excellence</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mb-10 drop-shadow-md">
            Discover a world of flavors with our carefully crafted dishes, made from the freshest ingredients to delight your senses.
          </p>
          <div className="flex gap-4">
            <Link to="/menu" className=" no-underline hover:no-underline px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
              Explore Our Menu
            </Link>
            <Link to="/register" className=" no-underline hover:no-underline px-8 py-4 bg-white hover:bg-gray-100 text-emerald-800 font-bold rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
     <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"> Why Choose Us? </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We bring the best dining experience right to your table. </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest ingredients make it to our kitchen.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh dishes delivered to you in no time.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction</h3>
              <p className="text-gray-600">Guaranteed to put a smile on your face with every bite.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home