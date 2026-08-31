import facebookLogo from "../assets/social/facebook-logo.svg";
import twitterLogo from "../assets/social/twitter-logo.svg";
import youtubeLogo from "../assets/social/youtube-logo.svg";
import instagramLogo from "../assets/social/instagram-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p>©codeit - 2024</p>

        <nav className="footer-menu" aria-label="푸터 메뉴">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </nav>

        <div className="social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="페이스북" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="트위터" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} alt="유튜브" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
