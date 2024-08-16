package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.CartSummary;
import com.example.backend.service.CartSummaryService;

@RestController
@RequestMapping("/api/cart")
public class CartSummaryController {

    @Autowired
    private CartSummaryService cartSummaryService;

    @PostMapping("/checkout")
    public CartSummary saveCartSummary(@RequestBody CartSummary cartSummary) {
        return cartSummaryService.saveCartSummary(cartSummary.getSubtotal(), cartSummary.getItemCount());
    }
}

