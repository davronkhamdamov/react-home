import './Footer.css';
import footer from '../../assets/images/fooeter.svg';
import facebook from '../../assets/images/facebook.svg';
import insta from '../../assets/images/insta.svg';
import google from '../../assets/images/google.svg';
function Footer() {
  return (
    <div className="container">
      <ul className="footer">
        <li className="footer-list">
          <div className="footer-logo">
            <img src={footer} alt="" />
            <p>Hotelo</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={google} alt="" />
          </div>
        </li>
        <li>
          <h3 className="title">Home</h3>
          <p>Booking</p>
          <p>Booking</p>
          <p>Facilities</p>
          <p>Location</p>
          <p>Contact</p>
        </li>
        <li>
          <h3 className="title">Help</h3>
          <p>About Us</p>
          <p>Help center</p>
          <p>Privacy policy</p>
          <p>FAQs</p>
        </li>
        <li>
          <h3 className="title">Get the app</h3>
          <p>iOS app</p>
          <p>Android app</p>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
