import './Input.css';
function Date() {
  return (
    <div className="input__date">
      <input type="date" className="date__input" />
    </div>
  );
}
function User() {
  return <div className="user__item">2 Guests</div>;
}
export { Date, User };
