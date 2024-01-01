import React from 'react';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
      <>
    <footer className="footer">
      <div className="footer-bar">
      <nav class="navbar navbar-expand-lg bg-primary w-100" style={{height:'80px',borderRadius:'5px'}}>
     <div class="container-fluid">
    <img src='https://icon-library.com/images/facebook-icon-png-white/facebook-icon-png-white-21.jpg' alt='facebook' style={{height:'35px',width:'35px'}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiinQDzmWrk36H4ChowOYcZXfe2FVmocjYATh4qWA5b1irdyQpTfcFk9y4aHmdpCSR1yE&usqp=CAU' alt='facebook' style={{height:'35px',width:'35px' ,borderRadius:'11px',border:'2px solid black',marginLeft:'7px',marginTop:'3px'}}/>
        </li>
        <li class="nav-item">
          <img src='https://previews.123rf.com/images/konstantinks/konstantinks1406/konstantinks140600590/29544059-wi-fi-icon-on-white-background-vector-illustration.jpg' alt='facebook' style={{height:'35px',width:'35px' ,borderRadius:'11px',border:'2px solid black',marginLeft:'7px',marginTop:'3px'}}/>
        </li>
        <li class="nav-item dropdown">
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSa6QdvauLvnAqUfAKgQwv9moaRE88kvIJLQ&usqp=CAU' alt='facebook' style={{height:'34px',width:'34px' ,borderRadius:'11px',border:'2px solid black',marginLeft:'7px',marginTop:'3px'}}/>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <img src='https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg' alt='facebook' style={{height:'35px',width:'35px' ,borderRadius:'11px',border:'2px solid black',marginLeft:'7px',marginTop:'3px'}}/>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <span style={{marginRight:'25px',marginTop:'5px',color:'white',fontSize:'20px'}}>SIGN UP FOR NEWSLETTER</span>
        <input class="form-control" type="search" placeholder="Your email address" aria-label="Search" style={{width:'400px',borderRadius:'1px'}}/>
        <button class="btn" type="submit" style={{background:'#FFE134',borderRadius:'1px'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
        <div className="social-icons">
        </div>
      </div>
      <div className="footer-content">
        <div className="contact-us" style={{marginTop:'20px'}}>
          <h5 style={{marginLeft:'25px'}}>CONTACT US</h5>
          <div className='contact-Address'>
          <img src='https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png' alt='facebook' style={{height:'33px',width:'33px',marginLeft:'7px',marginTop:'3px'}}/>
          <span>1093 Marigold Lane,Coral Way,Miami,</span>
          <p style={{marginLeft:'45px',fontSize:'15px',color:'black'}}>Florida,33169</p>
          </div>
          <div>
          <img src='https://www.pngall.com/wp-content/uploads/10/Call-PNG.png' alt='facebook' style={{height:'26px',width:'26px',marginLeft:'8px',marginTop:'3px'}}/>
          <span>610-403-403</span>
          </div>
          <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi86E7JIcciyQGYQ1zgwjDJdQPr-Bo_bbt4_0bu1qTeSB8F5UCL9z3oXafklsQh0kMjL8&usqp=CAU' alt='facebook' style={{height:'35px',width:'35px',marginLeft:'7px',marginTop:'3px'}}/>
          <span>company@example.com</span>
          </div>
          <div className="app-icons">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' alt='facebook' style={{height:'35px',width:'90px',marginLeft:'7px',marginTop:'20px'}}/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png' alt='facebook' style={{height:'35px',width:'90px',marginLeft:'7px',marginTop:'20px'}}/>
          </div>
        </div>
        <div className="footer-links">
          <div className="my-account">
            <h5>MY ACCOUNT</h5>
            <ul>
              <li><a href="#">Orders</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Account details</a></li>
            </ul>
          </div>
          <div className="categories">
            <h5>CATEGORIES</h5>
            <ul>
              <li><a href="#">Hydraulic</a></li>
              <li><a href="#">Atomtronics</a></li>
              <li><a href="#">Cryotronics</a></li>
              <li><a href="#">induction</a></li>
              <li><a href="#">Spintronics</a></li>
              <li><a href="#">Pro Electron</a></li>
              
            </ul>
          </div>
          <div className="information">
            <h5>INFORMATION</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li> 
            </ul>
          </div>
        </div>
      </div>
       <div className="footer-bottom">
        <hr style={{ marginTop: '20px' }} />
       
        <div className="footer-categories">
          <span>Radio</span>
          <span className="footer-divider">|</span>

          <span>Hydraulic</span>
          <span className="footer-divider">|</span>

          <span>Lamp</span>
          <span className="footer-divider">|</span>

          <span>Pro Electron</span>
          <span className="footer-divider">|</span>

          <span>Atomtronics</span>
          <span className="footer-divider">|</span>

          <span>Avionics</span>
          <span className="footer-divider">|</span>

          <span>Cryotronics</span>
          <span className="footer-divider">|</span>

          <span>Induction</span>
          <span className="footer-divider">|</span>

          <span>Spintronics</span>
          <span className="footer-divider">|</span>

          <span>Accessories</span>
          <span className="footer-divider">|</span>
        </div>
        <div className='footer-categories1'>
        <span className="footer-divider">|</span>
         <span>Electronics</span>
          <span className="footer-divider">|</span>
          <span>Chairs</span>
          <span className="footer-divider">|</span>
          <span> Induction</span>
          <span className="footer-divider">|</span>
          <span> Avionics</span>
          <span className="footer-divider">|</span>
          <span> Bar Table</span>
          <span className="footer-divider">|</span>
          <span>Spintronics</span>
          <span className="footer-divider">|</span>
          <span> Bioelectronics</span>
          <span className="footer-divider">|</span>
          <span>Circuits</span>
        </div>
        <hr />
      </div>
      <div className="scroll-to-top-container">
          <button className="scroll-to-top" onClick={scrollToTop}>
          <img src='https://static.vecteezy.com/system/resources/previews/012/628/936/original/blue-up-arrow-3d-png.png' alt='facebook' style={{height:'30px',width:'35px',}}/>
          </button>
        </div>
    </footer>
    </>
  );
};

export default Footer;
