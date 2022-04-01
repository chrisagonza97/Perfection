import React, { FC } from 'react';
import styles from './Album.module.scss';
import Link from 'next/link';
type AlbumProps = {
  image: string;
  name: string;
  linkHref: string;
};

export const Album: FC<AlbumProps> = ({ image, name, linkHref }) => {
  return (
    <Link href={linkHref}>
      <figure className={styles.album}>
        <img src={image} alt={'Perfection ' + name} />
        <p>{name} </p>
      </figure>
    </Link>
  );
};
