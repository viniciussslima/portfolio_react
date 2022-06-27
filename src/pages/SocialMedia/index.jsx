import React from "react";

import linkedinLogo from "../../assets/social-media/linkedin.svg";
import githubLogo from "../../assets/social-media/github.svg";
import telegramLogo from "../../assets/social-media/telegram.svg";
import instagramLogo from "../../assets/social-media/instagram.svg";

const SocialMedia = () => {
  return (
    <div className="left-content">
      <h1>Redes sociais</h1>
      <div className="grid">
        <div className="card">
          <a
            className="link"
            href="https://www.linkedin.com/in/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="Logo do linkedin" />
          </a>
          <h3>Linkedin</h3>
        </div>
        <div className="card">
          <a
            className="link"
            href="https://github.com/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Logo do github" />
          </a>
          <h3>Github</h3>
        </div>
        <div className="card">
          <a
            className="link"
            href="https://t.me/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegramLogo} alt="Logo do telegtam" />
          </a>
          <h3>Telegram</h3>
        </div>
        <div className="card">
          <a
            className="link"
            href="https://www.instagram.com/viniciussslima99/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="Logo do instagram" />
          </a>
          <h3>Instagram</h3>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
