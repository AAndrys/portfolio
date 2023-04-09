import React from 'react';

import GithubSvg from '../../assets/svgs/github.svg';
import LinkedinSvg from '../../assets/svgs/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-socials">
          <h6>Socials</h6>
          <div className="footer-socials-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AAndrys"
              title="Github link"
            >
              <img src={GithubSvg} alt="Github icon" loading="lazy" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/adam-andrysiak-6779241aa"
              title="Linkedin link"
            >
              <img src={LinkedinSvg} alt="Linkedin icon" loading="lazy" />
            </a>
          </div>
        </section>

        <section className="footer-copyright">
          <span>© Portfolio - Adam Andrysiak {new Date().getFullYear()}</span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
