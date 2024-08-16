package com.example.backend.controller;

import com.example.backend.model.BodyShapeRequest;
import com.example.backend.model.BodyShapeResponse;
import com.example.backend.service.BodyShapeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/body-shape")
public class BodyShapeController {

    @Autowired
    private BodyShapeService bodyShapeService;

    @PostMapping
    public BodyShapeResponse getBodyShape(@RequestBody BodyShapeRequest request) {
        return bodyShapeService.determineBodyShape(request);
    }
}

