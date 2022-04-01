import React, { FC } from 'react';
import styles from './ShowsContent.module.scss';

export const ShowsContent: FC = () => {
    return(
        <main className={styles.main}>
            <h1>Upcoming Perfection Shows</h1>
            <p>There Are no Upcoming Shows!</p>
        </main>
    )
}