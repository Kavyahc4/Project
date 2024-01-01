import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft ,faArrowRight} from '@fortawesome/free-solid-svg-icons';


const CategoryProducts = () => {
  return (
    <>
    <div className="container">
        <div className="row top-category">
          <div className="col-auto">
            <h4 className="text">CATEGORY PRODUCTS</h4>
          </div>
          <div className="col">
            <div className="categories1">
              <ul>
              <hr className="line3" />
                <li>Accessories</li>
                <li>Atomtronics</li>
                <li>Night Lamps</li>
                <li>Induction</li>
                <li>Lamp</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-auto">
            <FontAwesomeIcon icon={faChevronRight} className="icon" style={{ marginRight: '2px' }} />
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          </div> */}
        </div>
      </div>
    {/* <div className="container">
      <div className="row top-category">
        <div className="col">
          <h4 className="text">CATEGORY PRODUCTS</h4>
          <hr/>
          <div className="categories">
            <span className="category">Accessories</span>
            <span className="category">Electronics</span>
            <span className="category">Night Lamps</span>
            <span className="category">Induction Lamps</span>
          </div>
          <div className="icons">
            <span className="icon"><FontAwesomeIcon icon={faChevronRight} /></span>
            <span className="icon"><FontAwesomeIcon icon={faChevronLeft} /></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img src="path/to/left-image.jpg" alt="Left Image" className="left-image" />
        </div>
        <div className="col-md-9">
        </div>
      </div>
    </div> */}
    <div> 
    <div className="col-md-6">
            <div className="card mb-4"style={{width:'1200px',height:'260px'}}>
              <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1530x300.jpg' alt='Card 1' className='card-img-top' style={{width:'1200px',height:'260px'}}/>
              <div className="card-body2" style={{ position: 'absolute', bottom: '150px', right: '20px',paddingRight:'250px',top:'50px'}}>
                <h5 className="card-title2">Create Your Own VAIO Laptop</h5>
                <p>CHOOSE THE COLOUR, SCREEN SIZE AND PERFORMANCE</p>
                <a href="#" className="shop2" >
                  Shop Now <FontAwesomeIcon icon={faArrowRight}/>
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="row top-category">
            <div className="col-auto">
              <h4 className="text">DEAL OF THE DAY</h4>
            </div>
            <div className="col">
              <hr className="line1"/>
            </div>
          </div>
          <div className="row top-category">
            <div className="col-auto">
              <h4 className="text">LATEST NEWS</h4>
            </div>
            <div className="col">
              <hr className="line1"/>
            </div>
            <div className="col-auto">
            <FontAwesomeIcon icon={faChevronRight} className="icon" style={{marginRight:'2px',}}/>
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </div>
          </div>
          <div className="row">
        <div className="col-md-3">
          <div className="card2">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/9-490x280_t.jpg" className="card-img-top" alt="Image 1" style={{height:'200px',width:'300px'}}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card2">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/8-490x280_t.jpg" className="card-img-top" alt="Image 2" style={{height:'200px',width:'300px'}}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card2">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/7-490x280_t.jpg" className="card-img-top" alt="Image 3" style={{height:'200px',width:'300px'}} />
          </div>
        </div>
        </div>
    </>
  );
};

export default CategoryProducts;
