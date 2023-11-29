import { PiCalendarCheckThin } from 'react-icons/pi';

const GridTop: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center space-x-2">
      <a href="/web" className="md:p-0 px-8 lg:w-3/5">
        <div className="main-card">
          <img
            src="/blog1.png"
            alt="first blog"
            className="object-cover mb-2 rounded-lg"
          />
          <p className="mb-3 text-[#999999]">
            Explore the journey of Web Development and how to get started in one
            of most popular domains in Software Engineering. of most popular
            domains in Software Engineering. of most popular domains in Software
            Engineering. of most popular domains
          </p>
          <div className="text-[#777777] flex justify-start items-end space-x-3">
            <span>
              <PiCalendarCheckThin className="text-2xl inline-flex" />
            </span>
            <p>24 Jun 2023</p>
          </div>
        </div>
      </a>

      <div className="flex flex-col md:p-0 px-8 lg:w-2/5">
        <div className="sub-card">
          <img
            src="/blog2.png"
            alt="second blog"
            className="object-cover rounded-md mb-2"
          />
          <p className="mb-3 text-[#999999]">
            Read about DSA, it's importance and Interview Tips!
          </p>
          <div className="text-[#777777] flex justify-start items-end space-x-3">
            <span>
              <PiCalendarCheckThin className="text-2xl inline-flex" />
            </span>
            <p>21 Jun 2023</p>
          </div>
        </div>
        <div className="sub-card">
          <img
            src="/blog2.png"
            alt="second blog"
            className="object-cover rounded-md mb-2"
          />
          <p className="mb-3 text-[#999999]">
            Read about DSA, it's importance and Interview Tips!
          </p>
          <div className="text-[#777777] flex justify-start items-end space-x-3">
            <span>
              <PiCalendarCheckThin className="text-2xl inline-flex" />
            </span>
            <p>21 Jun 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTop;
