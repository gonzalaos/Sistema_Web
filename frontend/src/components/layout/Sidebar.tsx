import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.navContainer}>
                <NavLink
                    to="/admin/ingredients"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Ingredientes
                </NavLink>
                <NavLink
                    to="/admin/products"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Productos
                </NavLink>
                <NavLink
                    to="/admin/combos"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Combos
                </NavLink>
            </div>
        </aside>
    );
};