import React from 'react';
import { GoBook } from 'react-icons/go';
import { Roboto_Mono } from 'next/font/google';
const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function page() {
  const liClass = `text-justify text-[#d3d3d3]  my-4 text-lg leading-10`;
  const spanClass = `${roboto.className} bg-[#555555] text-[#d9d9d9]  px-3 rounded-lg`;
  return (
    <div>
      <div>
        <hr className='text-lg w-full px-5 border-gray-600' />
      </div>

      <div className='flex items-center justify-center'>
        <div className='w-4/5 lg:w-[55%]'>
          <div className='flex flex-col '>
            <div className='text-center my-4'>
              <h1 className='text-xl md:text-6xl my-4 font-semibold text-[#ededed]'>
                Web Development
              </h1>
              <h2 className='text-lg md:text-2xl my-4 text-[#dadada]'>
                A Journey from HTML to JavaScript
              </h2>
              <h3 className='text-lg md:text-xl my-4 text-[#777777]'>
                Exploring the Evolution of Web Development Technologies
              </h3>

              <div className='flex space-x-3 items-center justify-center'>
                <img
                  src='/me.jpeg'
                  alt='sidharth'
                  className=' w-12 h-12 md:w-20 md:h-20 rounded-full object-cover'
                />
                <p className='md:text-xl md:flex hidden px-2 font-bold'>
                  P Sidharth{' '}
                </p>
                <p className='text-sm md:text-xl px-1'>|</p>
                <p className='text-sm md:text-xl px-2'>24 Jun 2023</p>
                <div className='flex space-x-4 items-center justify-between px-1'>
                  <GoBook />
                  <p className='text-sm md:text-xl'> 7 min</p>
                </div>
              </div>
            </div>

            <div>
              <hr className='text-lg w-full px-5 border-gray-600' />
            </div>

            <div>
              <h2 className='text-4xl my-4 font-bold'>Introduction</h2>
              <p className='text-justify text-lg text-[#a5a5a5] leading-10'>
                        
                <span className='text-3xl font-semibold text-white'>W</span>eb
                development has witnessed remarkable growth and transformation
                over the years. From the humble beginnings of static{' '}
                <span className={spanClass}>HTML</span> pages to dynamic and
                interactive web applications powered by{' '}
                <span className={spanClass}>JavaScript</span>, the field has
                evolved into a fascinating domain of innovation and creativity.
                In this article, we will explore the journey of web development,
                starting from its inception, and guide aspiring developers on
                how to get started. The Birth of Web Development: Web
                development traces its roots back to the early 1990s when the{' '}
                <span className={spanClass}>World Wide Web (WWW)</span> was
                introduced. Tim Berners-Lee is often hailed as the father of the
                web, creating HTML (Hypertext Markup Language) as a simple
                markup language for structuring web pages. HTML allowed the
                inclusion of hyperlinks, enabling users to navigate through
                interconnected pages.
              </p>
            </div>
            <div>
              <h2 className='text-4xl my-4 font-bold'>
                Getting Started with Web Development
              </h2>
              <p className={`text-lg my-4 ${liClass}`}>
                        If you are someone who is eager to dive into the world
                of web development, here's a roadmap to help you get started:
              </p>
              <ol>
                <li className={liClass}>
                  <span className={spanClass}>HTML and CSS</span> : Begin by
                  mastering the fundamentals of HTML and CSS. These languages
                  form the backbone of web development. Learn how to structure
                  web pages using HTML tags, create forms, add images, and apply
                  CSS styles for layout and visual enhancements.
                </li>
                <li className={liClass}>
                  Explore CSS Frameworks: Familiarize yourself with{' '}
                  <span className={spanClass}>CSS</span>
                  frameworks like{' '}
                  <span className={spanClass}>Tailwind CSS</span> , which
                  provides utility classes to style your web pages efficiently.
                  Tailwind CSS follows a "utility-first" approach, allowing you
                  to rapidly build custom designs with minimal CSS code.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>JavaScript</span> Essentials:
                  Next, venture into JavaScript to add interactivity to your web
                  pages. Learn core concepts like variables, functions, loops,
                  and conditionals. Understand how to manipulate the{' '}
                  <span className={spanClass}>Document Object Model (DOM)</span>{' '}
                  to dynamically modify elements and respond to user actions.
                </li>
                <li className={liClass}>
                  Frameworks and Libraries: Once you have a solid understanding
                  of JavaScript, explore popular frameworks like{' '}
                  <span className={spanClass}>React</span> ,
                  <span className={spanClass}>Angular</span> , or{' '}
                  <span className={spanClass}>Vue.js</span> . Choose one and
                  learn its fundamentals, including component-based
                  architecture, routing, state management, and data binding.
                  Build small projects to practice and reinforce your skills.
                </li>
                <li className={liClass}>
                  Practice and Build Projects: The key to mastering web
                  development is practice. Start with simple projects and
                  gradually tackle more complex ones. Build personal websites,
                  portfolio pages, or mini-applications to showcase your
                  abilities and learn through hands-on experience.
                </li>
                <li className={liClass}>
                  Continual Learning: Stay updated with the latest web
                  development trends, tools, and best practices
                </li>
                <li className={liClass}>
                  Follow web development communities, blogs, and online
                  tutorials to expand your knowledge. Keep experimenting,
                  exploring new techniques, and challenging yourself to grow as
                  a developer.
                </li>
              </ol>
            </div>

            <div>
              <h2 className='text-4xl my-4 font-bold'>Conclusion</h2>
              <p className={liClass}>
                Web development has come a long way, transforming from static
                HTML pages to dynamic, interactive web applications powered by
                JavaScript. As a sophomore web developer, you have already
                acquired a strong foundation with HTML, CSS, Tailwind CSS, and
                JavaScript. By exploring frameworks, practising regularly, and
                staying curious, you can embark on an exciting journey of web
                development and contribute to the ever-evolving digital
                landscape. So, roll up your sleeves, dive into coding, and let
                your creativity shape the future of the web!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
