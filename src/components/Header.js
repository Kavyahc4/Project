import React ,{useState}from 'react';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletAlt, faMobileAlt, faEnvelope ,faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
    <div className="header-top">
        <div className="logo">
          <img src='https://www.webibazaar.com/image/catalog/webi-logo.png' alt="Company Logo" />
          <span>Shopeur Electronics WooCommerce Theme</span>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faDesktop} />
          <span>Desktop</span>
          <FontAwesomeIcon icon={faTabletAlt} />
          <span>Tablet</span>
          <FontAwesomeIcon icon={faMobileAlt} />
          <span>Mobile</span>
          <button className='button'>Buy Now</button>
        </div>
      </div>
      <div className="promotions">
          <p>Extra 30% Off On Selected Itmes</p>
          <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'18px',padding:'5px'}}/>
          <p>company@example.com</p>
          <p style={{marginLeft:'650px'}}>Wishlist</p>
          <p style={{marginLeft:'1px'}}>|</p>
          <select style={{marginLeft:'20px',border:"none",background:"gainsboro"}}>
            <option>USD</option>
            <option>GBP</option>
            </select>
        </div>
        <div className="search-bar">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/logo.png" alt="Categories" />
          <div class="categories-search">
       <select class="categories-dropdown" style={{width:'180px',height: '40px',marginLeft: '15px',borderRadius:'1px'}}>
          <option value="" selected="selected">All Categories</option>
          <option value="accessories">Accessories</option>
          <option value="accessories">Atomtronics</option>
          <option value="accessories">Avionics</option>
          <option value="accessories">Cryotronics</option>
          <option value="accessories">Induction</option>
          <option value="accessories">Spintronics</option>
          <option value="accessories">Radio</option>
          <option value="accessories">Hydraulic</option>
          <option value="accessories">Pro Electron</option>
          <option value="accessories"> Induction</option>
          <option value="accessories">Bar Table</option>
          <option value="accessories">Bioelectronics</option>
          <option value="accessories">Circuits</option>
      </select>
      <input type="search" class="search" placeholder="Search Products..." value="" style={{width:'380px',height: '40px',borderRadius:'1px'}}/>
      <button className='button4' >Search</button>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt='profile' style={{marginTop:'10px',borderRadius:'4PX'}}/>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mt-1 ml-2">
          <a className="nav-link" style={{ paddingBottom: '1px' }} href="/">My Account</a>
          <span className="dropdown">
            <a className="account-link" href="/" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sign in
            </a>
            <div className="dropdown-menu" aria-labelledby="accountDropdown">
              <a className="dropdown-item" href="#">My Account</a>
              <a className="dropdown-item" href="#">Checkout</a>
              <a className="dropdown-item" href="#">User Login</a>
            </div>
          </span>
        </li>
      </ul>
      <img src='https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg' alt="cart" style={{marginTop:'10px',borderRadius:'1PX',marginLeft:'65px'}}/>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mt-1 ml-2">
          <a className="nav-link" style={{ paddingBottom: '1px' }} href="/">My Cart</a>
          <span className="dropdown">
            $0.00
          </span>
        </li>
      </ul>
      </div>
        </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary mt-4">
      <ul className="navbar-nav">
        <li className="nav-item" >
          <a className="nav-link" href="https://pixeltemplate.com/wordpress/shopeur/" aria-current="page" style={{color:'white'}}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://pixeltemplate.com/wordpress/shopeur/shop/"style={{color:'white'}}>SHOP</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="https://pixeltemplate.com/wordpress/shopeur/blog/" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            BLOG
          </a>
          <ul className="dropdown-menu" aria-labelledby="blogDropdown">
            <li className="dropdown-item">
              <a href="#">Left Sidebar</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Right Sidebar</a>
            </li>
            <li className="dropdown-item">
              <a href="https://pixeltemplate.com/wordpress/shopeur/full-width/">No Sidebar</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            PAGES
          </a>
          <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
            <li className="dropdown-item">
              <a href="">Service</a>
            </li>
            <li className="dropdown-item">
              <a href="">FAQs Page</a>
            </li>
            <li className="dropdown-item">
              <a href="">Gallery</a>
            </li>
            <li className="dropdown-item">
              <a href="">Elements</a>
            </li>
            <li className="dropdown-item">
              <a href="">Page 404</a>
            </li>
            <li className="dropdown-item">
              <a href="">About Us</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://pixeltemplate.com/wordpress/shopeur/contact-us/" style={{color:'white'}}>CONTACTUS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://pixeltemplate.com/wordpress/shopeur/features/" style={{color:'white'}}>FEATURES</a>
        </li>
      </ul>
      <div className="d-flex" style={{float:'right',marginLeft:'700px'}}>
                <p className="special-offer">Special Offer!</p>
              </div>
      </nav>   

     </>
  );
};

export default Header;



