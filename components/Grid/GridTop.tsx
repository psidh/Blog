import { PiCalendarCheckThin } from 'react-icons/pi';

const GridTop: React.FC = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center'>
      <a href='/blogs/web' className='md:p-0 px-8 lg:w-3/5 my-1 lg:my-0 mx-1'>
        <div className='main-card'>
          <img
            src='/blog1.png'
            alt='first blog'
            className='object-cover mb-2 rounded-lg'
          />
          <p className='mb-2 text-[#999999]'>
            Explore the journey of Web Development and how to get started in one
            of most popular domains in Software Engineering. of most popular
            domains in Software Engineering. of most popular domains in Software
            Engineering. of most popular domains ering. of most popular domains
            ering. of most popular domainsering. of most popular domains
          </p>
          <div className='text-[#777777] flex justify-start items-end space-x-2'>
            <span>
              <PiCalendarCheckThin className='text-2xl inline-flex' />
            </span>
            <p>24 Jun 2023</p>
          </div>
        </div>
      </a>

      <div className='flex flex-col-reverse justify-between md:p-0 px-8 lg:w-2/5 mx-1'>
        <div className='sub-card mb-1'>
          <img
            src='/blog2.png'
            alt='second blog'
            className='object-cover rounded-md mb-2'
          />
          <p className='mb-3 text-[#999999]'>
            Read about DSA, it's importance and Interview Tips!
          </p>
          <div className='text-[#777777] flex justify-start items-end space-x-3'>
            <span>
              <PiCalendarCheckThin className='text-2xl inline-flex' />
            </span>
            <p>21 Jun 2023</p>
          </div>
        </div>
        <a className='sub-card mb-1' href='/blogs/need-for-cloud'>
          <img
            src='/blog3.png'
            alt='thirdd blog'
            className='object-cover rounded-md mb-2'
          />
          <p className='mb-3 text-[#999999]'>
          Most stringent question, what, why and how of cloud
          </p>
          <div className='text-[#777777] flex justify-start items-end space-x-3'>
            <span>
              <PiCalendarCheckThin className='text-2xl inline-flex' />
            </span>
            <p>15 Apr 2024</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GridTop;
