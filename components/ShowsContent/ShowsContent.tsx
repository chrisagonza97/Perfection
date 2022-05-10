import React, { FC } from 'react';
import styles from './ShowsContent.module.scss';
import { ShowCard } from '../ShowCard/ShowCard';

export const ShowsContent: FC = () => {
  return (
    <main className={styles.main}>
      <h1>Upcoming Perfection Shows</h1>
      <ShowCard
        showDate='Sunday, May 15th'
        showTime='8:00pm'
        showVenue='The Love Song Bar'
        showImage='/Images/PerfectionMay15th.png'
        showCity='Los Angeles, CA'
        showAddress='450 S. Main St, Los Angeles, CA 90013'
      />
    </main>
  );
};
