import './Best-card.css';
import image1 from '../../assets/images/Image.png';
import image2 from '../../assets/images/Image2.png';
import image3 from '../../assets/images/Image3.png';
function Card() {
  return (
    <div className="container">
      <div className="wrapper bestcard">
        <div className="row">
          <img src={image1} alt="" />
          <div className="card-text">
            <h4>Swimming pool and beach of luxury...</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="wrapper">
              <h2>$250 /NIGHT</h2>
              <button className="card-btn">Details</button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={image2} alt="" />
          <div className="card-text">
            <h4>InterContinental Fujairah Resort Clu...</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="wrapper">
              <h2>$250 /NIGHT</h2>
              <button className="card-btn">Details</button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={image3} alt="" />
          <div className="card-text">
            <h4>Burj Al Arab - Jumeirah Street - Dub...</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="wrapper">
              <h2>$250 /NIGHT</h2>
              <button className="card-btn">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
