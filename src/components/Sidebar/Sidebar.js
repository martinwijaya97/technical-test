import iconCart from '../../assets/img/icon-cart.png';
import './style.css';

const Sidebar = () => {
  return (
    <div className='sidebar' id='sidebar'>
      <ul>
        <li>
          <a href='#a'>x</a>
        </li>
        <li>Home</li>
        <li>Menu</li>
        <li>Our Story</li>
        <li>Contact Us</li>
        <li>
          <a href='#modal'>
            <img src={iconCart} alt='icon-cart' />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
