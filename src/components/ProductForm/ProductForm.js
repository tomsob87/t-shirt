
import styles from '../Product/Product.module.scss'
import Button from '../Button/Button';

const ProductForm = props => {
    return (
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizeOptions}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colorOptions}
            </ul>
          </div>
          <Button className={styles.button}
            title={props.title}
            currentSize={props.currentSize}
            currentColor={props.currentColor}
            getPrice={() => props.getPrice()}
          >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

export default ProductForm;