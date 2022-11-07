import './Best-hotel.css';
function BestHotel() {
  return (
    <div className="container">
      <div className="servise">
        <h1 className="servise__title">Best Quality Hotels</h1>
        <p className="bestHotel__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="card-btns">
          <div className="card-hotel">
            <button>1 Star</button>
            <button>2 Star</button>
            <button>3 Star</button>
            <button>4 Star</button>
            <button>5 Star</button>
          </div>
          <p classsName="servise__all">View All</p>
        </div>
      </div>
    </div>
  );
}
export default BestHotel;
