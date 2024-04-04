// import React from 'react';
import { GoBook } from 'react-icons/go';
import { Roboto_Mono } from 'next/font/google';
const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function page() {
  const liClass = `text-justify text-[#d3d3d3]  my-4 text-lg leading-10`;
  const spanClass = `${roboto.className} bg-[#313131] text-[#d9d9d9] font-semibold  px-3 rounded-lg`;
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
                What is the need for cloud?
              </h1>
              <h2 className='text-lg md:text-2xl my-4 text-[#dadada]'>
                Not having enough infrastructure to support your business?
              </h2>
              <h3 className='text-lg md:text-xl my-4 text-[#777777]'>
                Rent systems to upscale fast, Like blazingly fast!!!
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
                <p className='text-sm md:text-xl px-2'>26 Mar 2024</p>
                <div className='flex space-x-4 items-center justify-between px-1'>
                  <GoBook />
                  <p className='text-sm md:text-xl'>8 min</p>
                </div>
              </div>
            </div>

            <div>
              <hr className='text-lg w-full px-5 border-gray-600' />
            </div>

            <div>
              <h2 className='text-4xl my-4 font-bold'>Introduction</h2>
              <p className='text-justify text-lg text-[#a5a5a5] leading-10'>
                        
                <span className='text-3xl font-semibold text-white'>T</span>
                raditional IT has always been people using physical systems,
                with all the responsibility of{' '}
                <span className={spanClass}>maintenance</span>,{'  '}
                <span className={spanClass}>scalability</span>,{'  '}
                <span className={spanClass}>performance</span> undertaken by the
                user himself. For the most part of early 2000s, every
                entrepreneur who wanted to start a venture of his own would
                require to setup all the infrastructure by themselves. Many
                big-tech companies that we see from{'  '}
                <span className={spanClass}>Apple</span> to
                {'  '}
                <span className={spanClass}>Google</span>
                {'  '}, started in the garage, where they would keep large
                servers to meet the user requirement.
              </p>
            </div>
            <div>
              <h2 className='text-4xl my-4 font-bold'>
                Problems with Traditional IT
              </h2>
              <p className={`text-lg my-4 ${liClass}`}>
                        Following are the issues with conventional approach to
                business that could possibly make things harder in the long run
                as the platform expands
              </p>
              <ol>
                <li className={liClass}>
                  <span className={spanClass}>1. Scalability</span> :
                  Traditional IT requires significant investment and scaling
                  systems up or down (depending on the traffic) can be both
                  time-consuming and would come at a possible expense.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>2. Maintenance</span> : As your
                  business expands, it is inevitable to encounter some flaws in
                  your website/app that you are building. This includes updating
                  the software, hardware, troubleshooting errors. To minimize
                  the flaws, a persistent 24x7 maintenance is a must. . But
                  doing this yourself or the lone organization would eat up your
                  time that you can dedicate to actually focusing on your
                  business.
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
              <h2 className='text-4xl my-4 font-bold'>Cloud</h2>
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
