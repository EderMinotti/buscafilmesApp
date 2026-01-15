import styles from "./button.module.css"
export const Button = ({nameButton,onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {nameButton}
        </button>
    )
}