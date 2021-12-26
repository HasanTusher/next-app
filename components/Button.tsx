import styles from './Button.module.css';
import React, {ComponentProps} from "react";



export function Button({props}: any){
        return <button type="button" className={styles.error} onClick={props}>Button</button>
}