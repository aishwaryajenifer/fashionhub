import React, { useState } from 'react';
import './CheckoutAddress.css';
import { Link } from 'react-router-dom';

const CheckoutAddress = () => {
    
  const [addresses, setAddresses] = useState([
    {
      name: 'Aishu',
      address: '2/40, Gnanaprakasam Nagar, College Road, Sirupuluvapatti, Tirupur, Tamil Nadu - 641603',
      mobile: '9003976877',
      type: 'HOME',
    },
    {
      name: 'Aishwarya',
      address: 'Room no:005-block 2- Hall of residence for Women Sri Krishna College of Engineering and Technology, Kuniamuthur, Coimbatore, Tamil Nadu - 641008',
      mobile: '9003976877',
      type: 'HOME',
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState('Aishu');
  const [isFormVisible, setFormVisible] = useState(false);
  const [formMode, setFormMode] = useState('edit'); // 'edit' or 'add'
  const [currentAddress, setCurrentAddress] = useState({
    name: '',
    address: '',
    mobile: '',
    type: 'HOME',
  });

  const handleAddressSelect = (name) => {
    setSelectedAddress(name);
  };

  const handleEditClick = (address) => {
    setCurrentAddress(address);
    setFormMode('edit');
    setFormVisible(true);
  };
  

  const handleAddNewClick = () => {
    setCurrentAddress({
      name: '',
      address: '',
      mobile: '',
      type: 'HOME',
    });
    setFormMode('add');
    setFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({ ...currentAddress, [name]: value });
  };

  const handleFormSubmit = () => {
    if (formMode === 'edit') {
      setAddresses(
        addresses.map((addr) =>
          addr.name === currentAddress.name ? currentAddress : addr
        )
      );
    } else if (formMode === 'add') {
      setAddresses([...addresses, currentAddress]);
    }
    setFormVisible(false);
  };

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <h2>Bag</h2>
        <h2 className="active-step">Address</h2>
        <h2>Payment</h2>
      </header>

      <div className="checkout-body">
        <div className="address-section">
          <h3>Select Delivery Address</h3>

          {addresses.map((address) => (
            <div
              key={address.name}
              className={`address-card ${selectedAddress === address.name ? 'selected' : ''}`}
              onClick={() => handleAddressSelect(address.name)}
            >
              <div className="address-header">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === address.name}
                  onChange={() => handleAddressSelect(address.name)}
                />
                <div>
                  <h4>{address.name}</h4>
                  <span className="address-type">{address.type}</span>
                </div>
              </div>
              <p>{address.address}</p>
              <p>Mobile: {address.mobile}</p>
              <div className="address-actions">
                <button className="edit-button" onClick={() => handleEditClick(address)}>
                  EDIT
                </button>
                <button className="remove-button">REMOVE</button>
              </div>
            </div>
          ))}

          {/* Add New Address */}
          <div className="add-new-address">
            <button className="add-new-button" onClick={handleAddNewClick}>
              + Add New Address
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="summary-section">
          <h3>Delivery Estimates</h3>
          <p>Estimated delivery by 15 Aug 2024</p>
          <h3>Price Details</h3>
          <p>Total MRP: $180.99</p>
          <p>Discount on MRP: -$2</p>
          <p>Platform Fee: FREE</p>
          <p>Shipping Fee: FREE</p>
          <h3>Total Amount: $180.99</h3>
          <Link to="/payments" className="continue-button">
                Continue
            </Link>
        </div>
      </div>

      {/* Address Form Modal */}
      {isFormVisible && (
        <div className="address-modal">
          <div className="address-form">
            <h2>{formMode === 'edit' ? 'Edit' : 'Add New'} Address</h2>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={currentAddress.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Mobile No
              <input
                type="text"
                name="mobile"
                value={currentAddress.mobile}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={currentAddress.address}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Type
              <input
                type="text"
                name="type"
                value={currentAddress.type}
                onChange={handleInputChange}
              />
            </label>
            <button className="save-button" onClick={handleFormSubmit}>
              SAVE ADDRESS
            </button>
            <button className="close-button" onClick={() => setFormVisible(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutAddress;
