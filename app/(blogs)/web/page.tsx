import React from 'react';
import { GoBook } from 'react-icons/go';
export default function page() {
  return (
    <div>
      <hr className="text-lg w-full px-5 border-gray-600" />
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <div className="flex flex-col ">
            <div className="text-center my-4">
              <h1 className="text-6xl my-4 font-semibold text-[#ededed]">
                Web Development
              </h1>
              <h2 className="text-2xl my-4 text-[#dadada]">
                A Journey from HTML to JavaScript
              </h2>
              <h3 className="text-xl my-4 text-[#777777]">
                Exploring the Evolution of Web Development Technologies
              </h3>

              <div className="flex space-x-3 items-center justify-center my-4">
                <img
                  src="/me.jpeg"
                  alt="sidharth"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p className="text-xl px-2 font-bold">P Sidhath </p>
                <p className="text-xl px-2">|</p>
                <p className="px-2">24 Jun 2023</p>
                <div className="flex space-x-4 items-center justify-betw4een px-">
                  <GoBook />
                  <p> 7 min</p>
                </div>
              </div>
            </div>

            <hr className="text-lg w-full px-5 border-gray-600 mb-4" />

            <div className="my-4">
              <h2>Introduction</h2>
              <p>this is lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
