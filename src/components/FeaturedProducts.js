// FeaturedProducts.js

import React from 'react';
import './app'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const FeaturedProducts = () => {
  return (
    <>
    <div className="container1">
          <div className="row top-category">
            <div className="col-auto">
              <h4 className="text">FEATURED PRODUCTS</h4>
            </div>
            <div className="col">
              <hr className="line2"/>
            </div>
            <div className="col-auto">
            <FontAwesomeIcon icon={faChevronRight} className="icon" style={{marginRight:'2px',}}/>
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </div>
          </div>
        
      {/* <div className="product-container">
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 1</div>
            <div className="price">$99.00</div>
          </div>
        </div>
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 2</div>
            <div className="price">$99.00</div>
          </div>
        </div>
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 1</div>
            <div className="price">$99.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 1</div>
            <div className="price">$99.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 1</div>
            <div className="price">$99.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25.jpg" alt="Product 1" />
          <div className="product-details">
            <div className="stars">5 stars</div>
            <div className="name">Product 1</div>
            <div className="price">$99.00</div>
          </div>
        </div>
      </div>
      <div className="side-image">
        <img src="https://www.lg.com/africa_fr/images/plp-b2c/ae-soundbars-hero-1-d_v1.jpg" alt="Side Image" />
      </div>  */}
    </div>
    </>
  );
};

export default FeaturedProducts;
