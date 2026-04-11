package com.gonzalaos.backend.ingredients;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {
    private final IngredientService service;

    public IngredientController(IngredientService service) {
        this.service = service;
    }

    @GetMapping
    public List<IngredientDTO> getIngredients() {
        return service.getAllIngredients();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public IngredientDTO createIngredient(@Valid @RequestBody IngredientCreateDTO dto) {
        return service.createIngredient(dto);
    }
}
