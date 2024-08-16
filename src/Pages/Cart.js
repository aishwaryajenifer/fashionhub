import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeItem, updateQuantity } from '../redux/CartSlice';
import Heading from '../common/Heading';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmounts, deliveryCharge } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartProducts]);

  const increaseQty = (cartProductId, currentQty) => {
    dispatch(updateQuantity({ id: cartProductId, quantity: currentQty + 1 }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    dispatch(updateQuantity({ id: cartProductId, quantity: Math.max(currentQty - 1, 1) }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const safeToFixed = (value) => {
    const numberValue = parseFloat(value);
    return isNaN(numberValue) ? "0.00" : numberValue.toFixed(2);
  };

  const handleCheckout = () => {
    const cartSummary = {
      subtotal: totalAmounts,
      itemCount: cartProducts.length,
    };

    axios.post('http://localhost:8082/api/cart/checkout', cartSummary)
      .then(response => {
        console.log('Cart summary saved:', response.data);
        navigate('/payment');
      })
      .catch(error => {
        console.error('There was an error saving the cart summary!', error);
      });
  };

  return (
    <>
      <Heading title="Home" subtitle="Cart" />
      {cartProducts.length === 0 ? (
        <h4 className="container text-center p-4">Your Cart is Empty</h4>
      ) : (
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <td className="align-middle">
                        <img
                          src={cartProduct.product_img}
                          alt="Product"
                          style={{ width: "50px" }}
                        />{" "}
                        {cartProduct.product_name}
                      </td>
                      <td className="align-middle">{safeToFixed(cartProduct.price)}</td>
                      <td className="align-middle">
                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-minus"
                              onClick={() => decreaseQty(cartProduct.id, cartProduct.quantity)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={cartProduct.quantity || 1}
                            readOnly
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-plus"
                              onClick={() => increaseQty(cartProduct.id, cartProduct.quantity)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{safeToFixed(cartProduct.totalPrice)}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemoveItem(cartProduct.id)}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-30 mb-5">
                <h4 className="mb-3">Cart Summary</h4>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Subtotal</h5>
                  <h5 className="font-weight-bold">{safeToFixed(totalAmounts)}</h5>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Platform Fee</h5>
                  <h5 className="font-weight-bold">{safeToFixed(deliveryCharge)}</h5>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">
                    {safeToFixed((totalAmounts || 0) + (deliveryCharge || 0))}
                  </h5>
                </div>
                <Link to="#" className="btn btn-primary btn-block mt-4 py-3" onClick={handleCheckout}>
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
