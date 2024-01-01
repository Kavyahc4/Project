import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight ,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ContentSection = () => {
  return (
    <div className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/2.jpg' alt='Card 1' className='card-img-top'/>
              <div className="card-body">
                <h5 className="card-title">New Smart Watch</h5>
                <a href="#" className="shop">
                  Shop Now <FontAwesomeIcon icon={faArrowRight}/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1.jpg' alt='Card 2' className='card-img-top'/>
              <div className="card-body">
                <h5 className="card-title">New Mobile</h5>
                <a href="#" className="shop">
                  Explore <FontAwesomeIcon icon={faArrowRight}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
      <div className="flex-item">
    <img src="https://st3.depositphotos.com/3687485/14601/v/450/depositphotos_146015633-stock-illustration-dispatcher-young-smiling-woman-talking.jpg" alt="Support Image" className="item-image"/>
    <div className="item-content">
      <h5>24/7 Support</h5>
      <p>Online Support 24/7</p>
    </div>
  </div>
  <div className="flex-item">
  <img src="https://img.freepik.com/premium-vector/3d-piggy-bank-banking-finance-economy-investment-concept-vector-icon-isolated-white-back_662181-189.jpg" alt="Support Image" className="item-image"/>
    <h5>Money Back Guarantee</h5>
    <p>100% Secure Payment</p>
  </div>
  <div className="flex-item">
    <img src="https://5.imimg.com/data5/HC/EV/MY-15940038/diwali-gift-box.jpg" alt="Support Image" className="item-image"/>
    <h5>Special Gift Cards</h5>
    <p>Give The Perfect Gift</p>
  </div>
  <div className="flex-item">
  <img src="https://i.pinimg.com/564x/86/3d/a7/863da7914845812e089300ac2b1fdb61.jpg" alt="Support Image" className="item-image"/>
    <h5>Free Shipping</h5>
    <p>On Order Over $99</p>
  </div>
</div>

<div className="container">
  <div className="row top-category">
    <div className="col-auto">
      <h4 className="text">TOP CATEGORY</h4>
    </div>
    <div className="col">
      <hr className="line"/>
    </div>
    <div className="col-auto">
    <FontAwesomeIcon icon={faChevronRight} className="icon" style={{marginRight:'2px',}}/>
    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
    </div>
  </div>
</div>
 <div className="row">
        <div className="col-md-3">
          <div className="card1">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg" className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <button className="btn btn-primary">Uncategorized</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card1">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/4-1-360x400_t.jpg" className="card-img-top" alt="Image 2" />
            <div className="card-body">
              <button className="btn btn-primary">Accessories</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card1">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/1-2-360x400_t.jpg" className="card-img-top" alt="Image 3" />
            <div className="card-body">
              <button className="btn btn-primary">Atomtronics</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card1">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg" className="card-img-top" alt="Image 4" />
            <div className="card-body">
              <button className="btn btn-primary">Avionics</button>
            </div>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="row top-category">
            <div className="col-auto">
              <h4 className="text">LATEST PRODUCTS</h4>
            </div>
            <div className="col">
              <hr className="line1"/>
            </div>
            <div className="col-auto">
            <FontAwesomeIcon icon={faChevronRight} className="icon" style={{marginRight:'2px',}}/>
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </div>
          </div>
        </div>
        </div>
        
    
  );
};

export default ContentSection;


