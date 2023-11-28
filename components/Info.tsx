import { CiTwitter } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { PiGithubLogoLight } from 'react-icons/pi';
import { CiGlobe } from 'react-icons/ci';
import { TiSocialLinkedin } from 'react-icons/ti';

export default function Info() {
  return (
    <div className="w-1/4 m-4">
      <div className="image-class">
        <div className="image-title-class">
          <h1 className="text-lg font-bold">Philkhana Sidharth</h1>
          <h2 className="text-sm">Student | Developer</h2>
        </div>
        <div className="flex items-center justify-center py-4">
          <img
            src="/me.jpeg"
            alt="my image"
            className="rounded-2xl w-72 h-72 object-cover"
          />
        </div>
        <div className="flex flex-col items py-4 space-y-4 text-center">
          <p>philkhanasidharth14@gmail.com</p>
          <p className="text-xl font-semibold">GITAM, Visakhapatnam</p>
        </div>
        <div className="text-center">© 2022 Sidharth. All Rights Reserved</div>
        <div className="flex space-x-2 justify-center items-center">
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
