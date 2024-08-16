import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Cart items
  totalItems: 0,
  totalAmounts: 0,
  deliveryCharge: 10, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product_img, product_name, price } = action.payload;
      const existingItem = state.data.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.data.push({
          id,
          product_img,
          product_name,
          price,
          quantity: 1,
          totalPrice: price,
        });
      }
      state.totalItems += 1;
      state.totalAmounts = state.data.reduce((total, item) => total + item.totalPrice, 0);
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.data.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        state.totalItems -= state.data[itemIndex].quantity;
        state.data.splice(itemIndex, 1);
        state.totalAmounts = state.data.reduce((total, item) => total + item.totalPrice, 0);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.data.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalAmounts = state.data.reduce((total, item) => total + item.totalPrice, 0);
      }
    },
    getCartTotal: (state) => {
      state.totalAmounts = state.data.reduce((total, item) => total + item.totalPrice, 0);
    }
  }
});

export const { addToCart, removeItem, updateQuantity, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
