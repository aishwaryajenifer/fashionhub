package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cart_summary")
public class CartSummary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double subtotal;
    private Integer itemCount;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Double getSubtotal() {
        return subtotal;
    }
    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }
    public Integer getItemCount() {
        return itemCount;
    }
    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    } 
}
