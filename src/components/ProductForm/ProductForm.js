import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';

const ProductForm = props => {
    return (
        <form>
          <OptionSize sizeOptions={props.sizeOptions} />

          <OptionColor colorOptions={props.colorOptions} 
          />
          
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