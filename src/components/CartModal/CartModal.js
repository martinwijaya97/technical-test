/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import './style.css';

const CartModal = () => {
  const [productCartList, setProductCartList] = useState([]);

  useEffect(() => {
    handleUpdateLocalStorage();
  }, [localStorage.getItem('productCartList')]);

  const handleUpdateLocalStorage = useCallback(() => {
    const myCartProduct =
      JSON.parse(localStorage.getItem('productCartList')) || [];

    setProductCartList(myCartProduct);
  }, []);

  const handleRemoveProduct = (item) => {
    let indexOfObject = productCartList.findIndex((obj) => obj.id === item.id);

    if (indexOfObject !== -1) {
      productCartList.splice(indexOfObject, 1);
    }

    localStorage.setItem('productCartList', JSON.stringify(productCartList));
    handleUpdateLocalStorage();
  };

  const renderHeader = () => {
    return (
      <div className='cartHeader'>
        <h4>Shopping Cart</h4>
        <a className='cartHeaderButtonClose' href='#a'>
          X
        </a>
      </div>
    );
  };

  const renderProductItem = (item) => {
    const totalPrice = item.qty * item.price;

    return (
      <div className='gridContainer' key={item.id}>
        <div className='gridContainerItem item1'>
          <img src={item.productImage} alt={item.productImage} />
        </div>

        <div className='gridContainerItem item2'>{item.name}</div>
        <div className='gridContainerItem item3'>{`x ${item.qty}`}</div>
        <div className='gridContainerItem item4'>IDR {totalPrice}</div>
        <div className='gridContainerItem item5'>
          <button
            onClick={() => {
              handleRemoveProduct(item);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  };

  const renderProductListItem = () => {
    const productList = productCartList.map((item, index) => {
      return renderProductItem(item, index);
    });

    return <div className='gridContainerRoot'>{productList}</div>;
  };

  const renderTotalPayment = () => {
    let subTotal = 0;

    productCartList.forEach((item) => {
      subTotal += item.price * item.qty;
    });

    let tax = (subTotal * 10) / 100;
    let total = subTotal + tax;

    return (
      <div className='cartTotalPayment'>
        <table>
          <tbody>
            <tr>
              <td>Sub-Total</td>
              <td>IDR</td>
              <td>{subTotal}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>IDR</td>
              <td>{tax}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>IDR</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className='cartFooter'>
        <a href='#a'>
          CONTINUE
          <br /> SHOPPING
        </a>
        <a href='#a'>CHECKOUT</a>
      </div>
    );
  };

  const renderModalEmpty = () => {
    return (
      <div className='cartProductEmpty'>
        <h1>Cart is Empty</h1>
        <h4>Explore Our Collection to Find the Perfect Match</h4>
      </div>
    );
  };

  const renderBody = () => {
    if (productCartList.length === 0) {
      return renderModalEmpty();
    } else {
      return (
        <>
          {renderProductListItem()}
          {renderTotalPayment()}
          {renderFooter()}
        </>
      );
    }
  };

  return (
    <div className='cartModal'>
      <div className='modal' id='modal'>
        <div className='modalContent'>
          {renderHeader()}
          {renderBody()}
        </div>
      </div>
      <div className='modalOverlay'></div>
    </div>
  );
};

export default CartModal;
