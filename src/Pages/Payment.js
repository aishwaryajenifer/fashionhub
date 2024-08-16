import React, { useState } from 'react';
import './Payment.css';
import Confetti from 'react-confetti';

const Payment = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handlePlaceOrder = () => {
        setIsOrderSuccessful(true);
    };

    const closeModal = () => {
        setIsOrderSuccessful(false);
    };

    return (
        <div className="payment-container">
            <div className="payment-body">
                <div className="left-section">
                    <div className="bank-offer">
                        <h3>Bank Offer</h3>
                        <p>10% Instant Discount up to ₹1000 on ICICI Bank Credit Cards & Netbanking on a min spend of ₹3,500. TCA</p>
                    </div>
                    <div className="payment-options">
                        <h4>Choose Payment Mode</h4>
                        <div className="recommended payment-option">
                            <span className="recommended-icon">★</span>
                            <h5>Recommended</h5>
                        </div>
                        <div 
                            className={`payment-option ${selectedPaymentMethod === 'cod' ? 'selected' : ''}`}
                            onClick={() => handlePaymentMethodChange('cod')}
                        >
                            <h5>Cash on Delivery (Cash/UPI)</h5>
                        </div>
                        
                        <div 
                            className={`payment-option ${selectedPaymentMethod === 'card' ? 'selected' : ''}`}
                            onClick={() => handlePaymentMethodChange('card')}
                        >
                            <h5>Credit/Debit Card</h5>
                        </div>
                    </div>
                </div>
                <div className="summary-section">
                    <h4>Price Details</h4>
                    <div className="price-details">
                        <p>Total MRP: $180.99</p>
                        <p>Discount on MRP: -$2</p>
                        <p>Platform Fee: FREE</p>
                        <p>Shipping Fee: FREE</p>
                    </div>
                    <div className="total-amount">
                        Total Amount: $180.99
                    </div>

                    {/* Conditional Rendering based on selected payment method */}
                    {selectedPaymentMethod === 'cod' && (
                        <button className="payment-button place-order-button" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                    )}

                    {selectedPaymentMethod === 'card' && (
                        <div className="card-payment-form">
                            <h2>Credit/Debit Card</h2>
                            <p>Please Ensure your card can be used for online transactions. <a href="#">Know More</a></p>
                            <form>
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" className="form-control" placeholder="Card Number" />
                                </div>
                                <div className="form-group">
                                    <label>Name on card</label>
                                    <input type="text" className="form-control" placeholder="Name on card" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Valid Thru (MM/YY)</label>
                                        <input type="text" className="form-control" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>CVV</label>
                                        <input type="text" className="form-control" placeholder="CVV" />
                                    </div>
                                </div>
                                <button type="submit" className="payment-button pay-now-button">
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {/* Order Successful Modal */}
            {isOrderSuccessful && (
                <div className="order-success-modal">
                    <Confetti />
                    <div className="modal-content">
                        <h2>Order Successful!</h2>
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
