import React, { FC } from 'react';
import styles from './ShowCard.module.scss';

type ShowCardProps = {
  showDate: string;
  showTime: string;
  showVenue: string;
  showImage: string;
  showCity: string;
  showAddress: string;
};

export const ShowCard: FC<ShowCardProps> = ({
  showDate,
  showTime,
  showVenue,
  showImage,
  showCity,
  showAddress
}) => {
  return (
    <div className = {styles.container}>
      <main className={styles.main}>
        <img src={showImage} alt={showImage} />
        <h2>
          {showDate}, {showTime}{' '}
        </h2>
        <h3>
          {showVenue}, {showAddress}{' '}
        </h3>
        <h3>Free Show</h3>
      </main>
    </div>
  );
};
