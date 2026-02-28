import React, { useState } from "react";

const UserDashboard = ({ username, role, onPromote }) => {

  

  return (
    <div className="w-80 bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col gap-4">
      
    
      <div>
        <h1 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          User Details
        </h1>
        <div className="h-1 w-12 bg-indigo-600 rounded-full mt-1"></div>
      </div>

      
      <div>
        <p className="mt-2 text-gray-600">
          username:
          <span className="ml-2 px-3 text-sm font-semibold ">
            {username}
          </span>
        </p>

        <p className="mt-2 text-gray-600">
          Role:
          <span className="ml-2 px-3 text-sm font-semibold">
            {role}
          </span>
        </p>
      </div>

      <button
        onClick={onPromote}
        className="mt-auto w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
      >
        Promote
      </button>

    </div>
  );
};

export default UserDashboard;