import React, { FC } from 'react';
import styles from './Footer.module.scss'


export const Footer: FC = ()=>{
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>© Perfection</p>
        </footer>
    )
}