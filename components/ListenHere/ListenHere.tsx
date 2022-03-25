import React, { FC } from 'react';
import styles from './ListenHere.module.scss';


type ListenHereProps = {
  servicePic: string;
  streamUrl: string;
};

export const ListenHere: FC<ListenHereProps> = ({ servicePic, streamUrl }) => {
  //return a button that links to the stream url next to the service pic
  return (
    <figure className={styles.container}>
      <div className={styles.inner_container}>
        <a href={streamUrl} target='_blank' rel='noreferrer'>
          <img src={servicePic} alt={servicePic} />
        </a>
      </div>
    </figure>
  );
};
