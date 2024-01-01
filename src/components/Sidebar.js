import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars , faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <div className='sidebar'>
      <button className="sidebar-toggle" >
      <FontAwesomeIcon icon={faBars} style={{marginRight:'25px'}}/>
                     ALL CATEGORY
       
      </button>
        <div className={`sidebar-content${isOpen ? ' open' : ''}`}>
        <ul className="list-unstyled">
          <li className="subcategory" onClick={toggleDropdown}>
            <span className="subcategory-name">Accessories</span>
             <FontAwesomeIcon icon={faAngleRight} className="dropdown-icon" />
            {isOpen && (
              <ul className="dropdown-list">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
              </ul>
            )}
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Hydraulic</span>
          </li>
          <li className="subcategory" onClick={toggleDropdown}>
            <span className="subcategory-name">Lamp</span>
            <FontAwesomeIcon icon={faAngleRight} className="dropdown-icon" />
            {isOpen && (
              <ul className="dropdown-list">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
              </ul>
            )}
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Cryotronics</span>
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Induction</span>
          </li>
          <li className="subcategory" onClick={toggleDropdown}>
            <span className="subcategory-name">Avionics</span>
            <FontAwesomeIcon icon={faAngleRight} className="dropdown-icon" />
            {isOpen && (
              <ul className="dropdown-list">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
              </ul>
            )}
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Circuits</span>
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Electronics</span>
          </li>
          <li className="subcategory">
            <span className="subcategory-name">Handwatch</span>
          </li>
        </ul>
      </div>
    </div>
      <div className="slider-container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/revslider/wntr_homeslider/04c41f72f75d3c451cd237b511a966be-copy.jpg" className="d-block w-100" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/revslider/wntr_homeslider/04c41f72f75d3c451cd237b511a966be-copy.jpg" className="d-block w-100" alt="Second slide" />
          </div>
        </div>
        <div className="carousel-dots">
    <button data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></button>
    <button data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></button>
  </div>
      </div>
      <div className="content">
        <p style={{marginRight:'240px'}}>SPRING-SUMMER 2020</p>
        <h2 style={{marginRight:'160px'}}>Mi Airdots pro</h2>
        <p>It is a long established fact that a reader will be distracted by</p>
        <p style={{marginRight:'70px'}}>the readable content of a page it is a long established fact</p>
        <p style={{marginRight:'210px'}}>that a reader will be distracted</p>
        <button className="btn5">Shop Now</button>
      </div>
    </div>
    
    </>
  );
};

export default Sidebar;
