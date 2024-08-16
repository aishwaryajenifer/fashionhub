package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Login;

public interface LoginRepo extends JpaRepository<Login, Long> {
   
}
