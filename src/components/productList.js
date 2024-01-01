
import React from 'react';
import Product from './product';
const ProductList  = () => {
    const products = [
            {
              id: 1,
              image: 'https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/28.jpg',
              name: 'Television With Extra Features',
              stars: 4,
              price: 99.0,
            },
            {
                id: 2,
                image: 'https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/26.jpg',
                name: 'Samsung Free Side By Side Refrigerator',
                stars: 4,
                price: 111.00,
              },
              {
                id: 3,
                image: 'https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/24.jpg',
                name: 'Chiffon Solid Multicolor Washing Machine',
                stars: 4,
                price: 101.00,
              },
              {
                id: 4,
                image: 'https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/21.jpg',
                name: 'Sujata SuperMix SM Mixer',
                stars: 4,
                price: 82.00,
              },
              {
                id: 5,
                image: 'https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/20.jpg',
                name: 'Speaker Gathered Multicolor',
                stars: 4,
                price: 85.00,
              },
          ];
  return (
    <div className="product-list">
         {products.map((product) => (
        <Product key={product.id} {...product} />
       ))}
      {/* <Product />
      <Product />
      <Product />
      <Product />
      <Product /> */}
    </div>
  );
};

export default ProductList;
