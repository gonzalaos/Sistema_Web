import styles from './Topbar.module.css'

export const Topbar = () => {
    return (
        <header className={styles.topbar}>
            <div className={styles.logo}>
                Cafetería Admin
            </div>
            <div className={styles.actions}>
                <button className={styles.loginButton}>
                    Login
                </button>
            </div>
        </header>
    )
}