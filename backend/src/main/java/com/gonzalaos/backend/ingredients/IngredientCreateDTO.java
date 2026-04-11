package com.gonzalaos.backend.ingredients;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record IngredientCreateDTO(
        @NotBlank(message = "Name cannot be blank")
        @Size(min = 2, message = "Name must have at least 2 characters")
        String name,

        @NotNull(message = "Stock cannot be null")
        @Min(value = 1, message = "Stock must be greater than 0")
        Integer stock,

        @NotNull(message = "Minimum stock cannot be null")
        @Min(value = 0, message = "Minimum stock cannot be negative")
        Integer minStock,

        @NotBlank(message = "Unit cannot be blank")
        String unit
) {
    public Ingredient toEntity() {
        return Ingredient.builder()
                .name(this.name())
                .stock(this.stock())
                .minStock(this.minStock())
                .unit(this.unit())
                .build();
    }
}
