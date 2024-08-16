package com.example.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.backend.model.Register;

import com.example.backend.repository.RegisterRepo;

@Service
public class RegisterService {
    
       @Autowired
        RegisterRepo RegRep;

    public Register addDetails(Register r)
    {
        return RegRep.save(r);
    }

}