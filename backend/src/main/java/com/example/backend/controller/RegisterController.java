package com.example.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.model.Register;
import com.example.backend.service.RegisterService;

@RestController
public class RegisterController {

    @Autowired
    RegisterService RegSer;

    @PostMapping("/api/Register-user")
    public Register addDetails(@RequestBody Register r) {
        return RegSer.addDetails(r);
    }
}
