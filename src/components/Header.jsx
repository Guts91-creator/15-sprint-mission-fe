import pandaMarketLogo from "../assets/logo/panda-market-logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="gnb">
      <nav className="gnb-inner" aria-label="주요 메뉴">
        <a href="/" className="logo-link">
          <img src={pandaMarketLogo} alt="판다마켓 홈" />
        </a>

        <a href="/login" className="button login-button">
          로그인
        </a>
      </nav>
    </header>
  );
}

export default Header;
