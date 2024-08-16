package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.CartSummary;


public interface CartSummaryRepository extends JpaRepository<CartSummary, Long> {
}
