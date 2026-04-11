import {useState} from 'react';
import {IngredientModal} from '../../components/ui/ingredients/IngredientModal.tsx';
import styles from './IngredientsPage.module.css';

export const IngredientsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div>
                    <h1 className={styles.title}>Ingredientes</h1>
                    <p className={styles.subtitle}>Gestiona tu inventario y niveles de stock.</p>
                </div>
                <button
                    className={styles.primaryButton}
                    onClick={() => setIsModalOpen(true)}
                >
                    + Nuevo Ingrediente
                </button>
            </header>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Stock Min.</th>
                        <th>Unidad</th>
                        <th className={styles.alignRight}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={styles.fontMedium}>Tomate</td>
                        <td className={styles.fontMono}>15</td>
                        <td className={styles.fontMono}>5</td>
                        <td className={styles.textSecondary}>kg</td>
                        <td className={styles.actionsCell}>
                            <button className={styles.editBtn}>Editar</button>
                            <button className={styles.deleteBtn}>Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.fontMedium}>Harina</td>
                        <td className={styles.fontMono}>50</td>
                        <td className={styles.fontMono}>10</td>
                        <td className={styles.textSecondary}>kg</td>
                        <td className={styles.actionsCell}>
                            <button className={styles.editBtn}>Editar</button>
                            <button className={styles.deleteBtn}>Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.fontMedium}>Leche</td>
                        <td className={styles.fontMono}>20</td>
                        <td className={styles.fontMono}>5</td>
                        <td className={styles.textSecondary}>litros</td>
                        <td className={styles.actionsCell}>
                            <button className={styles.editBtn}>Editar</button>
                            <button className={styles.deleteBtn}>Borrar</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <IngredientModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>
    );
};