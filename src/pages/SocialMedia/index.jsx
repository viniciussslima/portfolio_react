import React from "react";

import linkedinLogo from "../../assets/social-media/linkedin.svg";
import githubLogo from "../../assets/social-media/github.svg";
import telegramLogo from "../../assets/social-media/telegram.svg";

const SocialMedia = () => {
  return (
    <div className="left-content">
      <h1>Redes sociais</h1>
      <div class="grid">
        <div class="card">
          <a
            class="link"
            href="https://www.linkedin.com/in/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="Logo do linkedin" />
          </a>
          <h3>Linkedin</h3>
        </div>
        <div class="card">
          <a
            class="link"
            href="https://github.com/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Logo do github" />
          </a>
          <h3>Github</h3>
        </div>
        <div class="card">
          <a
            class="link"
            href="https://t.me/viniciussslima/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegramLogo} alt="Logo do telegtam" />
          </a>
          <h3>Telegram</h3>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
