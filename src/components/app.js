
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentSection from './ContentSection';
import ProductList from './productList';
import FeaturedProducts from './FeaturedProducts';
import CategoryProducts from './CategoryProducts';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <ContentSection/>
      <ProductList />
      <FeaturedProducts/>
      < CategoryProducts/>
      <Footer/>
    </div>
  );
}

export default App;

