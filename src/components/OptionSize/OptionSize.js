import styles from '../ProductForm/ProductForm.module.scss';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizeOptions}
            </ul>
        </div>)
}

export default OptionSize;