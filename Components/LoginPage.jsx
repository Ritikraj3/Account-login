import React, { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50">
      <div className="w-full max-w-md min-h-screen bg-gray-50 px-6 pt-12 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Signin to your</h2>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            PopX account
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-3 py-3 border border-gray-200 rounded text-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-3 border border-gray-200 rounded text-gray-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gray-300 text-white py-3 rounded font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
