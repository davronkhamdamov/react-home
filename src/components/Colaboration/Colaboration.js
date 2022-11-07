import './Colaboration.css';
import hotels from '../../assets/images/hotels.svg';
import hyatt from '../../assets/images/hyatt.svg';
import Cushman from '../../assets/images/Cushman_&_Wakefield-Logo.svg';
import hilton from '../../assets/images/hilton.svg';
import park from '../../assets/images/park.svg';
function Colaboration() {
  return (
    <div className="container">
      <div className="colaboration">
        <img src={hotels} alt="" />
        <img src={hyatt} alt="" />
        <img src={park} alt="" />
        <img src={Cushman} alt="" />
        <img src={hilton} alt="" />
      </div>
    </div>
  );
}
export default Colaboration;
