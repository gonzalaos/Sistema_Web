import {type FormEvent, useState} from "react";
import {Select} from "../Select.tsx";
import styles from './IngredientModal.module.css';

interface IngredientModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const IngredientModal = ({ isOpen, onClose }: IngredientModalProps) => {
    const [unit, setUnit] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("¡Formulario interceptado por React!");
        onClose();
    };

    const unitOptions = [
        { value: 'kg', label: 'Kilogramos (kg)' },
        { value: 'unidades', label: 'Unidades' },
        { value: 'litros', label: 'Litros (L)' },
        { value: 'gramos', label: 'Gramos (g)' }
    ];

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuevo Ingrediente</h2>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Nombre</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            placeholder="Ej. Tomate, Harina..."
                        />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="stock" className={styles.label}>Stock Inicial</label>
                            <input
                                type="number"
                                id="stock"
                                className={styles.input}
                                placeholder="0"
                                min="0"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="unit" className={styles.label}>Unidad</label>
                            <Select
                                options={unitOptions}
                                value={unit}
                                onChange={(newValue) => setUnit(newValue)}
                            />
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button type="button" className={styles.cancelButton} onClick={onClose}>
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