import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/smeske10">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sam-meske-ms-mba/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/sammeske/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
