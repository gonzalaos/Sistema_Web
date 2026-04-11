package com.gonzalaos.backend.ingredients;

import com.gonzalaos.backend.common.exception.DuplicateEntityException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class IngredientService {
    private final IngredientRepository repository;

    public IngredientService(IngredientRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<IngredientDTO> getAllIngredients() {
        return repository.findAll().stream()
                .map(IngredientDTO::fromEntity)
                .toList();
    }

    @Transactional
    public IngredientDTO createIngredient(IngredientCreateDTO dto) {
        if (repository.existsByName(dto.name()))
            throw new DuplicateEntityException("Ingredient with name '" + dto.name() + "' already exists");

        Ingredient ingredient = dto.toEntity();
        Ingredient savedIngredient = repository.save(ingredient);

        return IngredientDTO.fromEntity(savedIngredient);
    }

}
