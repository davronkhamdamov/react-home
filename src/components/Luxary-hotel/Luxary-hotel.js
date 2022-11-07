import './Luxary-hotel.css';
import luxary from '../../assets/images/luxary-hotel.png';
function Luxary() {
  return (
    <div className="container">
      <div className="hotel-wrapper">
        <img src={luxary} alt="" />
        <div className="luxary__card">
          <h1 className="luxary__title">Finest Luxury Hotels & Resort</h1>
          <p className="luxary__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul className="wrapper">
            <li>
              <h1>120K+</h1>
              <p>Website User</p>
            </li>
            <li>
              <h1>110K++</h1>
              <p>Happy Clients</p>
            </li>
            <li>
              <h1>20K+</h1>
              <p>Active Hotels</p>
            </li>
            <li>
              <h1>8Y+</h1>
              <p>Company Year</p>
            </li>
          </ul>
          <button className="luxary__btn">Explore More</button>
        </div>
      </div>
    </div>
  );
}
export default Luxary;
