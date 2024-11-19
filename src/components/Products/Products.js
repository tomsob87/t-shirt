import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import clsx from 'clsx';
import styles from '../Product/Product.module.scss'

const Products = () => {
  const [products]  = useState(productsData);
  const [currentColor, setCurrentColor] = useState(products.map(product => product.colors[0]));
  const [currentSize, setCurrentSize] = useState(products.map(product => product.sizes[0].name))

  const colorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }

  const getPrice = (index) => {
    const basePrice = products[index].basePrice;
    const selectedSize = currentSize[index];
    const additionalPrice = products[index].sizes.find(size => size.name === selectedSize).additionalPrice;

    return basePrice + additionalPrice;
  };

    return (
    <section>

      {products.map((product, index) => (
        <Product 
        key={product.id} 
        {...product} 
        currentSize={currentSize[index]}
        currentColor={currentColor[index]}
        
        sizeOptions={product.sizes.map((size) =>
          <li key={size.name}>
            <button type="button" className={clsx({[styles.active]: currentSize[index] === size.name}

            )}
              onClick={(e) => {
                e.preventDefault();
                const newSizes = [...currentSize];
                newSizes[index] = size.name;
                setCurrentSize(newSizes);
              }}
            >
              {size.name}
            </button>
          </li>
        )}

        colorOptions={product.colors.map((color) => 
          <li key={color}>
            <button type="button" className={clsx(colorClassName(color), 
            {[styles.active]: currentColor[index] === color}
          )}
            onClick={(e) => {
              e.preventDefault();
              const newColors = [...currentColor];
              newColors[index] = color;
              setCurrentColor(newColors);
            }}
            ></button>
          </li>
        )}

        getPrice={() => getPrice(index)}

        />
        ))}
    </section>
    
  );
};

export default Products;