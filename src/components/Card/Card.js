import './Card.css';
import WorkImage from '../../assets/images/image-work.png';
import ParkingImage from '../../assets/images/image-work.png';
import WifiImage from '../../assets/images/image-wifi.png';
import CoffeeImage from '../../assets/images/image-coffe.png';
function Card() {
  return (
    <div className="wrapper">
      <div className="card__item">
        <img src={WorkImage} alt="" />
        <p className="card__title">Private Workspace</p>
        <p className="card__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      <div className="card__item">
        <img src={ParkingImage} alt="" />
        <p className="card__title">Private Workspace</p>
        <p className="card__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      <div className="card__item">
        <img src={WifiImage} alt="" />
        <p className="card__title">Private Workspace</p>
        <p className="card__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      <div className="card__item">
        <img src={CoffeeImage} alt="" />
        <p className="card__title">Private Workspace</p>
        <p className="card__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
    </div>
  );
}

export default Card;
