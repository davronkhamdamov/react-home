import './Watch.css';
import WatchImage from '../../assets/images/watch-image.png';
import circle from '../../assets/images/watch-circle.svg';
function Watch() {
  return (
    <div className="container">
      <div className="wrapper flex">
        <img src={WatchImage} alt="" />
        <div className="watch-text">
          <div className="watch-card">
            <img src={circle} alt="" />
            <p className="watch-heading">Nazmul Nabeel</p>
            <i className="watch_phoragraph">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the ”
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Watch;
