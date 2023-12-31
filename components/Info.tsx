import { CiTwitter } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { PiGithubLogoLight } from 'react-icons/pi';
import { CiGlobe } from 'react-icons/ci';
import { TiSocialLinkedin } from 'react-icons/ti';

export default function Info() {
  return (
    <div className="w-full md:p-0 px-8 lg:w-1/4 mx-0 md:mx-4 min-h-fit md:my-0">
      <div className="image-class">
        <div className="flex items-center justify-center p-4">
          <img
            src="/me.jpeg"
            alt="my image"
            className="rounded-2xl w-9/10 md:w-72 md:h-72 object-cover"
          />
        </div>
        <div className="flex flex-col items py-4 space-y-4 text-center">
          <p className='text-[#999999]'>philkhanasidharth14@gmail.com</p>
          <p className="text-xl font-semibold">GITAM, Visakhapatnam</p>
        </div>
        <div className="flex space-x-2 justify-evenly items-center text-[#999999]">
          <CiTwitter className="icons" />
          <CiInstagram className="icons" />
          <PiGithubLogoLight className="icons" />
          <CiGlobe className="icons" />
          <TiSocialLinkedin className="icons" />
        </div>
        <a href="mailto:philkhanasidharth14@gmail.com">
          <div className="button-div-class">
            <p>Mail me</p>
          </div>
        </a>
      </div>
    </div>
  );
}
