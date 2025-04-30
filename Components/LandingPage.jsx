import React from 'react'

export const LandingPage = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-sm bg-gray-50 p-6 h-full min-h-[600px] flex flex-col">
        {/* Empty space at top */}
        <div className="flex-grow" />
        
        {/* Content at bottom */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded mb-3">
            Create Account
          </button>
          
          <button className="w-full bg-purple-200 hover:bg-purple-300 text-gray-700 font-medium py-3 px-4 rounded">
            Already Registered? Login
          </button>
        </div>
      </div>
     </div>
  );
};
