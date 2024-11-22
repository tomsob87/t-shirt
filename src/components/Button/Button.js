import styles from './Button.module.scss';
import clsx from 'clsx';



const Button = (props) => {

    return (<button className={clsx(styles.button, props.className)}
        onClick={(e) => {
            e.preventDefault();
            
            const productDetails = [
                {
                    Name: props.title,
                    Size: props.currentSize,
                    Color: props.currentColor,
                    Price: props.price(),
                }
            ]

            console.log(productDetails)
        }}
    >{props.children}</button>);
};

export default Button;