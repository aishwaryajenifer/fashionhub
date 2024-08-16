package com.example.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.CartSummary;
import com.example.backend.repository.CartSummaryRepository;

@Service
public class CartSummaryService {

    @Autowired
    private CartSummaryRepository cartSummaryRepository;

    public CartSummary saveCartSummary(Double subtotal, Integer itemCount) {
        CartSummary cartSummary = new CartSummary();
        cartSummary.setSubtotal(subtotal);
        cartSummary.setItemCount(itemCount);
        return cartSummaryRepository.save(cartSummary);
    }
}

