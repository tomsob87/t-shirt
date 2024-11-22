import styles from '../ProductForm/ProductForm.module.scss';

const OptionColor = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colorOptions}
            </ul>
        </div>)
}

export default OptionColor;