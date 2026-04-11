package com.gonzalaos.backend.ingredients;

public record IngredientDTO(
        Long id,
        String name,
        Integer stock,
        Integer minStock,
        String unit
) {
    public static IngredientDTO fromEntity(Ingredient ingredient) {
        return new IngredientDTO(
                ingredient.getId(),
                ingredient.getName(),
                ingredient.getStock(),
                ingredient.getMinStock(),
                ingredient.getUnit()
        );
    }
}
