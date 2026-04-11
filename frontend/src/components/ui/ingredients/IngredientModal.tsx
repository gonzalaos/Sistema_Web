import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {Select} from "../Select.tsx";
import styles from './IngredientModal.module.css';
import {ingredientSchema, type IngredientFormData} from '../../../schemas/ingredientSchema.ts';

interface IngredientModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const IngredientModal = ({ isOpen, onClose }: IngredientModalProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: {errors}
    } = useForm<IngredientFormData>({
        resolver: zodResolver(ingredientSchema),
        defaultValues: {name: '', stock: 0,  minStock: 0, unit: ''},
        shouldFocusError: false
    });

    const selectedUnit = watch('unit');

    if (!isOpen) return null;

    const onSubmit = (data: IngredientFormData) => {
        console.log("¡Datos validados y listos para enviar a Java!", data);
        reset();
        onClose();
    }

    const handleClose = () => {
        reset();
        onClose();
    }

    const unitOptions = [
        { value: 'kg', label: 'Kilogramos (kg)' },
        { value: 'unidades', label: 'Unidades' },
        { value: 'litros', label: 'Litros (L)' },
        { value: 'gramos', label: 'Gramos (g)' }
    ];

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuevo Ingrediente</h2>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Nombre</label>
                        <input
                            type="text"
                            id="name"
                            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                            placeholder="Ej. Tomate, Harina..."
                            {...register('name')}
                        />
                        {errors.name && (<span className={styles.errorText}>{errors.name.message}</span>)}
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="stock" className={styles.label}>Stock Inicial</label>
                            <input
                                type="number"
                                id="stock"
                                className={`${styles.input} ${errors.stock ? styles.inputError : ''}`}
                                placeholder="0"
                                {...register('stock', {
                                    setValueAs: (v) => {
                                        if (v === "") return 0;
                                        const parsed = Number(v);
                                        return Number.isNaN(parsed) ? 0 : parsed;
                                    }
                                })}
                            />
                            {errors.stock && <span className={styles.errorText}>{errors.stock.message}</span>}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="minStock" className={styles.label}>Stock Mínimo</label>
                            <input
                                type="number"
                                id="minStock"
                                className={`${styles.input} ${errors.minStock ? styles.inputError : ''}`}
                                placeholder="0"
                                {...register('minStock', {
                                    setValueAs: (v) => {
                                        if (v === "") return -1;
                                        const parsed = Number(v);
                                        return Number.isNaN(parsed) ? -1 : parsed;
                                    }
                                })}
                            />
                            {errors.minStock && <span className={styles.errorText}>{errors.minStock.message}</span>}
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="unit" className={styles.label}>Unidad</label>
                        <Select
                            options={unitOptions}
                            value={selectedUnit}
                            onChange={(newValue) => setValue('unit', newValue, { shouldValidate: true })}
                            hasError={!!errors.unit}
                        />
                        {errors.unit && <span className={styles.errorText}>{errors.unit.message}</span>}
                    </div>
                    <div className={styles.actions}>
                        <button type="button" className={styles.cancelButton} onClick={handleClose}>
                            Cancelar
                        </button>
                        <button type="submit" className={styles.saveButton}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};