import React from 'react';
import { GoBook } from 'react-icons/go';
export default function page() {
  const pClass = `px-4 py-1 rounded-full bg-[#535353]`;
  const liClass = `text-justify text-[#c2c2c2]  my-4`;
  return (
    <div>
      <div>
        <hr className="text-lg w-full px-5 border-gray-600" />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[55%]">
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

            <div>
              <hr className="text-lg w-full px-5 border-gray-600 mb-4" />
            </div>

            <div className="flex flex-wrap space-x-2 justify-center">
              <p className={pClass}>HTML 5</p>
              <p className={pClass}>CSS</p>
              <p className={pClass}>TailwindCSS</p>
              <p className={pClass}>JavaScript</p>
              <p className={pClass}>React</p>
              <p className={pClass}>Angular</p>
              <p className={pClass}>NextJS</p>
            </div>

            <div className="my-4 ">
              <h2 className="text-3xl my-4">Introduction</h2>
              <p className="text-justify text-[#c2c2c2] ">
                     Web development has witnessed remarkable growth and
                transformation over the years. From the humble beginnings of
                static HTML pages to dynamic and interactive web applications
                powered by JavaScript, the field has evolved into a fascinating
                domain of innovation and creativity. In this article, we will
                explore the journey of web development, starting from its
                inception, and guide aspiring developers on how to get started.
                The Birth of Web Development: Web development traces its roots
                back to the early 1990s when the World Wide Web (WWW) was
                introduced. Tim Berners-Lee is often hailed as the father of the
                web, creating HTML (Hypertext Markup Language) as a simple
                markup language for structuring web pages. HTML allowed the
                inclusion of hyperlinks, enabling users to navigate through
                interconnected pages.
              </p>
            </div>

            <div>
              <h2 className="text-3xl my-4">Evolution of Web Development</h2>
              <ol>
                <li className={liClass}>
                  1.           HTML and CSS: HTML served as the foundation for
                  web development, but it lacked visual aesthetics. To address
                  this, Cascading Style Sheets (CSS) emerged as a powerful
                  styling language in the late 1990s. CSS enabled developers to
                  control the layout, colours, fonts, and other visual aspects
                  of web pages, enhancing the overall user experience.
                </li>
                <li className={liClass}>
                  2.           JavaScript and Interactivity: JavaScript,
                  introduced in 1995, revolutionized web development by adding
                  interactivity and dynamic features to websites. With
                  JavaScript, developers could manipulate web page elements,
                  handle user interactions, and create engaging experiences. The
                  language quickly gained popularity, leading to the rise of web
                  applications and interactive websites.
                </li>
                <li className={liClass}>
                  3.           Frameworks and Libraries: To streamline
                  development and enhance productivity, frameworks and libraries
                  emerged. These pre-written code collections provide
                  ready-to-use functionalities and abstractions, empowering
                  developers to build complex applications more efficiently.
                  Popular frameworks like React, Angular, and Vue.js, along with
                  libraries like jQuery has simplified web development by
                  offering robust tools and components.
                </li>
                <li className={liClass}>
                  4.           Responsive Web Design: With the proliferation of
                  mobile devices, responsive web design became a crucial aspect
                  of development. Websites needed to adapt to various screen
                  sizes and resolutions. CSS frameworks, such as Bootstrap and
                  Tailwind CSS, emerged, providing responsive grid systems,
                  ready-made UI components, and styling options to ensure
                  optimal user experiences across devices.
                </li>
              </ol>
            </div>
            <div>
              <h1 className="text-3xl">Getting Started with Web Development</h1>
              <p className="text-lg">
                If you are a student/developer eager to dive into the world of
                web development, here's a road-map to help you get started:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
