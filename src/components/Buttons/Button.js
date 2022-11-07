import './Button.css';
import Menuimg from '../../assets/images/menu.svg';
function SignIn() {
  return (
    <div className="btn">
      <button className="signin">Sign In</button>
    </div>
  );
}
function Menu() {
  return (
    <div className="menu__btn">
      <button className="menu">
        <img src={Menuimg} alt="" />
      </button>
    </div>
  );
}
function Search() {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search your country"
      />
    </div>
  );
}
export { SignIn, Menu, Search };
