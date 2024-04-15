import { PiCalendarCheckThin } from 'react-icons/pi';

const GridTwo: React.FC = () => {
  return (
    <div className='flex md:flex-row flex-col justify-start'>
      <a
        href='/blogs/need-for-cloud'
        className='md:p-0 px-8 lg:w-3/5 my-1 lg:my-0 mx-1'
      >
        <div className='main-card'>
          <img
            src='/blog3.png'
            alt='first blog'
            className='object-cover mb-2 rounded-lg'
          />
          <p className='mb-2 text-[#999999]'>
            Most stringent question, what, why and how of cloud
          </p>
          <div className='text-[#777777] flex justify-start items-end space-x-2'>
            <span>
              <PiCalendarCheckThin className='text-2xl inline-flex' />
            </span>
            <p>26 Mar 2024</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GridTwo;
