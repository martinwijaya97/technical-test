import imageMainSubtitle from '../../assets/img/image-main-subtitle.png';
import imageHeader from '../../assets/img/image-header.png';
import iconDelivery from '../../assets/img/icon-delivery.png';
import iconCart from '../../assets/img/icon-cart.png';
import iconHamburger from '../../assets/img/icon-menu.png';
import logo from '../../assets/img/logo.png';

import './style.css';

const Header = () => {
  const renderNavbar = () => {
    return (
      <nav className='headerNavbar'>
        <img className='headerNavbarLogo' src={logo} alt='logo' />

        <a href='#sidebar'>
          <img
            className='headerNavbarHamburger'
            src={iconHamburger}
            alt='icon-hamburger'
          />
        </a>
        <div className='headerNavbarMenu'>
          <ul>
            <img src={iconDelivery} alt='icon-delivery' />
            <li>Express Delivery</li>
            <li>+1 234 567 890</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Our Story</li>
            <li>Contact Us</li>
            <a href='#modal'>
              <img src={iconCart} alt='icon-cart' />
            </a>
          </ul>
        </div>
      </nav>
    );
  };

  const renderRightSide = () => {
    return (
      <div className='headerRightSide'>
        <img src={imageHeader} alt='main-burger' />
      </div>
    );
  };

  const renderLeftSide = () => {
    return (
      <div className='headerLeftSide'>
        <img src={imageMainSubtitle} alt='main-subtitle' />
        <h1>BURGER</h1>
        <h2>WEEK</h2>
      </div>
    );
  };

  return (
    <div className='header'>
      {renderNavbar()}
      {renderLeftSide()}
      {renderRightSide()}
    </div>
  );
};

export default Header;
