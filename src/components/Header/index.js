// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <nav className="display-container-lg">
        <ul className="nav-list-container">
          <li className="nav-list-item">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="nav-list-item">Products</li>
          <li className="nav-list-item">Cart</li>
          <li>
            <button className="nav-list-item-button" type="button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav-Logout"
        className="display-container-sm"
      />
    </div>
    <div className="sm-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="sm-images"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="sm-images"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="sm-images"
      />
    </div>
  </div>
)

export default Header
