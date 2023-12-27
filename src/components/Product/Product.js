import React from 'react';
import imageBurger1 from '../../assets/img/image-burger-1.png';
import imageBurger2 from '../../assets/img/image-burger-2.png';

import './style.css';

const Product = () => {
  const itemList = [
    {
      id: 1,
      name: 'lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      productImage: imageBurger2,
      price: 50000,
    },
    {
      id: 2,
      name: 'lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
      productImage: imageBurger1,
      price: 50000,
    },
    {
      id: 3,
      name: 'lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      productImage: imageBurger2,
      price: 50000,
    },
  ];

  const handleSelectProduct = (item) => {
    let myCartProduct =
      JSON.parse(localStorage.getItem('productCartList')) || [];

    let indexOfObject = myCartProduct.findIndex((obj) => obj.id === item.id);

    if (indexOfObject !== -1) {
      myCartProduct[indexOfObject].qty = myCartProduct[indexOfObject].qty + 1;
    } else {
      myCartProduct.push({ ...item, qty: 1 });
    }

    localStorage.setItem('productCartList', JSON.stringify(myCartProduct));
  };

  const renderTextAlwaysTastyBurger = () => {
    return (
      <div className='textHeaderAlwaysTastyBurger'>Always Tasty Burger</div>
    );
  };

  const renderTextChooseEnjoy = () => {
    return (
      <div className='textHeaderChooseEnjoy'>
        <h2>CHOOSE & ENJOY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
    );
  };

  const productHeader = () => {
    return (
      <div className='productHeader'>
        {renderTextAlwaysTastyBurger()}
        {renderTextChooseEnjoy()}
      </div>
    );
  };

  const renderProductListItem = (item) => {
    return (
      <div className='productListItem' key={item.id}>
        <img src={item.productImage} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button
          onClick={() => {
            handleSelectProduct(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  };

  const renderProductList = () => {
    const list = itemList.map((item) => {
      return renderProductListItem(item);
    });

    return <div className='productList'>{list}</div>;
  };

  return (
    <div className='product'>
      {productHeader()}
      {renderProductList()}
    </div>
  );
};

export default Product;
