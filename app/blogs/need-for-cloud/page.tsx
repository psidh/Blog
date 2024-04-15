import React from 'react';
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
                user himself. For the most part of the early 2000s, every
                entrepreneur who wanted to start a venture of his own would
                require setting up all the infrastructure by themselves. Many
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
                Following are the issues with the conventional approach to
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
                  the flaws, a persistent 24x7 maintenance is a must. But doing
                  this yourself or the lone organization would eat up your time
                  that you can dedicate to actually focusing on your business.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>3. Lack of Elasticity:</span>
                  Traditional IT infrastructure often lacks the elasticity
                  required to handle fluctuating workloads efficiently. This
                  results in either underutilization of resources during
                  low-demand periods or performance degradation during peak
                  times.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>
                    4. Limited Geographic Reach:
                  </span>{' '}
                  Setting up physical infrastructure in multiple locations to
                  serve customers across the globe can be prohibitively
                  expensive and complex, leading to restricted geographic reach
                  and potential loss of business opportunities.
                </li>
              </ol>
            </div>
            <div>
              <h2 className='text-4xl my-4 font-bold'>AWS: The Solution</h2>
              <ul className='text-lg text-[#a5a5a5] leading-10 list-disc pl-6'>
                <li className={liClass}>
                  <span className={spanClass}>
                    AWS, or Amazon Web Services:
                  </span>{' '}
                  Provides a comprehensive suite of cloud computing services,
                  offering scalable, reliable, and low-latency solutions for
                  businesses of all sizes.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>
                    Scalability and Flexibility:
                  </span>{' '}
                  By leveraging AWS, businesses can benefit from agility and
                  flexibility in scaling their operations, allowing them to
                  respond quickly to changing market demands.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>Maintenance and Security:</span>{' '}
                  Additionally, AWS handles the maintenance and security of the
                  underlying infrastructure, freeing up valuable time and
                  resources that can be reinvested in innovation and growth.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>Global Reach:</span> Moreover, AWS
                  offers global reach, enabling businesses to deploy
                  applications and services in multiple regions around the
                  world, ensuring low latency and improved performance for users
                  across different geographic locations.
                </li>
                <li className={liClass}>
                  <span className={spanClass}>Cost-effectiveness:</span> With
                  AWS's pay-as-you-go pricing model, businesses only pay for the
                  resources they use, making it cost-effective and scalable for
                  startups and enterprises alike.
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-4xl my-4 font-bold'>Summary</h2>
              <p className='text-justify text-lg text-[#a5a5a5] leading-10'>
                In summary, the advent of cloud computing, exemplified by
                services like{' '}
                <span className={spanClass}>Amazon Web Services (AWS)</span>,
                addresses the fundamental challenges faced by businesses in
                traditional IT environments. From scalability and flexibility to
                maintenance, security, and global reach, AWS offers a
                comprehensive solution suite that empowers businesses of all
                sizes to thrive in today's digital economy. By providing
                on-demand access to scalable resources, handling infrastructure
                maintenance and security, and offering global deployment options
                with a pay-as-you-go pricing model, AWS enables businesses to
                focus on innovation and growth while leaving the complexities of
                IT infrastructure management to experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
