import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  return (
    <article className={styles.product}>
      <ProductImage 
        name={props.name}
        currentColor={props.currentColor}
      />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.getPrice()} $</span>
        </header>

        <ProductForm
          sizeOptions={props.sizeOptions}
          colorOptions={props.colorOptions}
          title={props.title}
          currentSize={props.currentSize}
          currentColor={props.currentColor}
          getPrice={() => props.getPrice()}
          
        />

        {/* <form>
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
        </form> */}
      </div>
    </article>
  )
};

export default Product;