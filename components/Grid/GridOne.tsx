import React from 'react';

const GridOne: React.FC = () => {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-center ">
      <a href="/web" className='md:p-0 p-8'>
        <div className="grid-one-main-card">
          <img
            src="/blog1.png"
            alt="first blog"
            className="object-cover mb-2 rounded-lg"
          />
          <p className="mb-2 text-[#999999]">
            Explore the journey of Web Development and how to get started in one
            of most popular domains in Software Engineering. of most popular domains in Software Engineering.
            of most popular domains in Software Engineering. of most popular domains
      
          </p>
          <p className="text-[#777777]">Jun 24 2023</p>
        </div>
      </a>

      <div className="flex flex-col md:p-0 p-8">
        <div className="grid-one-sub-card mt-1">
          <img
            src="/blog2.png"
            alt="second blog"
            className="object-cover rounded-md mb-2"
          />
          <p className="mb-3 text-[#999999]">
            Read about DSA, it's importance and Interview Tips!
          </p>
          <p className="text-[#777777]">Jun 21 2023</p>
        </div>
        <div className="grid-one-sub-card mb-1">
          <img
            src="/blog2.png"
            alt="second blog"
            className="object-cover rounded-md mb-2"
          />
          <p className="mb-3 text-[#999999]">
            Explore the journey of Web Development and how to get started in one
            of most popular domaof most popular of most
          </p>
          <p className="text-[#777777]">Jun 24 2023</p>
        </div>
      </div>
    </div>
  );
};

export default GridOne;
