import styles from '../../styles/Button.module.css';

export default function Button ({ isLoading }) {
    return (
        <button
            disabled={isLoading}
            className={`button ${styles.button} ${isLoading ? "loading" : ""}`}
        >
            <img src="/images/reload.svg" />
            <span>{isLoading ? "Loading top...": "¡ Create top list !"}</span>
        </button>
    );
}