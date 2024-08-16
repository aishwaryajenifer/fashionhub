package com.example.backend.service;
import com.example.backend.model.BodyShapeRequest;
import com.example.backend.model.BodyShapeResponse;
import org.springframework.stereotype.Service;

@Service
public class BodyShapeService {

    public BodyShapeResponse determineBodyShape(BodyShapeRequest request) {
        String shape = determineShape(request.getHeight(), request.getHipSize(), request.getShoulderLength(), request.getWaistSize(), request.getBustSize());
        return new BodyShapeResponse(shape);
    }

    private String determineShape(double height, double hipSize, double shoulderLength, double waistSize, double bustSize) {
        // Logic to determine body shape
        if (hipSize > shoulderLength && hipSize > bustSize) {
            return "Pear";
        } else if (bustSize > hipSize && bustSize > shoulderLength) {
            return "Apple";
        } else if (shoulderLength == hipSize && waistSize < shoulderLength) {
            return "Hourglass";
        } else {
            return "Rectangle";
        }
    }
}