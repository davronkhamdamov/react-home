import './Subscrible.css';
import banner from '../../assets/images/banner.png';
function Subscrible() {
  return (
    <div className="container">
      <div className="banner">
        <div className="subscrible-text">
          <h1>
            Subscribe for our mailing list to get latest updates and offers
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{' '}
          </p>
          <form action="get">
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
            />
            <button className="form__btn">Subscribe</button>
          </form>
        </div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
}
export default Subscrible;
