import React from 'react';

const GridTop: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2">
      <a href="/web">
        <div className="main-card">
          <img
            src="/blog1.png"
            alt="first blog"
            className="object-cover mb-2 rounded-lg"
          />
          <p className="mb-3 text-[#999999]">
            Explore the journey of Web Development and how to get started in one
            of most popular domains in Software Engineering. of most popular domains in Software Engineering.
            of most popular domains in Software Engineering. of most popular domains
      
          </p>
          <p className="text-[#777777]">Jun 24 2023</p>
        </div>
      </a>

      <div className="flex flex-col">
        <div className="sub-card">
          <img
            src="/blog2.png"
            alt="second blog"
            className="object-cover rounded-md mb-2"
          />
          <p className="mb-3 text-[#999999]">
            Read about DSA, it's importance and Interview Tips!
          </p>
          <p className="text-[#777777]">Jun 24 2023</p>
        </div>
        <div className="sub-card">
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

export default GridTop;
