import './Image.css';
import HeroBackground from '../../assets/images/background.jpg';
import LeftTopBackground from '../../assets/images/background-right-part2.jpg';
import LeftBottomBackground from '../../assets/images/background-right.jpg';

function Image() {
  return (
    <div className="image">
      <img className="image-center" src={HeroBackground} alt="" />
      <h2 className="image__text">Wagstaffe NSW, Australia</h2>
      <div className="leftImage">
        <img src={LeftBottomBackground} alt="" />
        <img src={LeftTopBackground} alt="" />
      </div>
    </div>
  );
}

export default Image;
