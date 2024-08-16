package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.backend.model.Register;

public interface RegisterRepo extends JpaRepository<Register, Long> {
    Optional<Register> findByEmailId(String emailId);
    Optional<Register> findByPassword(String password);
}
