import { z } from 'zod';

export const ingredientSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 letras'),
    stock: z.number().min(1, 'El stock debe ser mayor a 0'),
    minStock: z.number().min(0, 'El stock mínimo no puede ser negativo'),
    unit: z.string().min(1, 'Por favor seleccione una unidad')
});

export type IngredientFormData = z.infer<typeof ingredientSchema>;