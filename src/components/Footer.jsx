import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer>
      <div className='socials'>
        <ul className={`${styles.socialIcons} `}>
          <li className={`${styles.socialIcons_li}`}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Cosmic88167'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={`${styles.socialIcons_li} `}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/manish-tiwari-460816345/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
      <a
        href='mailto: manishtiwari88167@gmail.com'
        className={`${styles.contactEmail} hidden`}>
        manishtiwari88167@gmail.com
        <hr />
      </a>
    </footer>
  );
};

export default Footer;
