import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className="footer-text">© 2023 Salud Net. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;