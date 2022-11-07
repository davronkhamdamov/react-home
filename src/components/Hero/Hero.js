import './Hero.css';
import { Date, User } from '../Input/Input';
import { Search } from '../Buttons/Button';
import Image from '../Center_image/Image';
import Card from '../Card/Card';
import Luxary from '../Luxary-hotel/Luxary-hotel';
function Hero() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="hero">
            <div className="hero-info">
              <h1 className="hero__title">Find Your Best Hotel for Deals</h1>
              <p className="hero__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="btn__group">
              <div className="wrapper">
                <Date />
                <User />
              </div>
              <Search />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Image />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="servise">
            <h1 className="servise__title">Facilities & Service</h1>
            <div className="servise__hero">
              <p className="servise__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{' '}
              </p>
              <p classsName="servise__all">View All</p>
            </div>
            <Card />
          </div>
        </div>
      </section>
      <Luxary />
    </div>
  );
}

export default Hero;
