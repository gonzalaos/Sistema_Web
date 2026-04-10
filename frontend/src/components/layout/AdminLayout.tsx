import {Outlet} from 'react-router-dom'
import {Sidebar} from "./Sidebar.tsx";
import {Topbar} from "./Topbar.tsx";
import styles from './AdminLayout.module.css';

export const AdminLayout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Topbar />
            <div className={styles.bodyWrapper}>
                <Sidebar />
                <main className={styles.content}>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};