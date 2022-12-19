import React from 'react';
import { BsLinkedin, BsGithub, BsMedium, BsFacebook } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    {/* <a href="#skills">
      <BsFacebook/>
    </a> */}
    <a href = "https://www.linkedin.com/in/vrajkumar-patel%F0%9F%9A%80-9b3419208/"
      target="_blank">
      <BsLinkedin/>
    </a>
    <a href="https://github.com/vrajkmrpatel" target="_blank">
      <BsGithub />
    </a>
    <a href="https://medium.com/@vrajkmr" target="_blank">
      <BsMedium />
    </a>
  </div>
);

export default SocialMedia;
