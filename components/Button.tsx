import styles from './Button.module.css';
import React, {ComponentProps} from "react";



export function Button({props}: any){
        console.log(props)
        return <button type="button" className={styles.error} onClick={props.yay}>Button</button>
}