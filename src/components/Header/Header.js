import './Header.css';
import navbar from '../../assets/images/navbar.svg';
import { SignIn, Menu } from '../Buttons/Button';
function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav">
            <div className="nav-img">
              <img src={navbar} alt="" />
              <p>Hotelo</p>
            </div>
            <div className="navbar">
              <ul className="navbar__item">
                <li>
                  <a href="index.html">Booking</a>
                </li>
                <li>
                  <a href="index.html">Facilities</a>
                </li>
                <li>
                  <a href="index.html">About Us</a>
                </li>
                <li>
                  <a href="index.html">Location</a>
                </li>
                <li>
                  <a href="index.html">Contact</a>
                </li>
                <div className="btn-group">
                  <Menu />
                  <SignIn />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
