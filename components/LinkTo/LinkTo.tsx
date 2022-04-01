import React, { FC } from 'react';
import styles from './LinkTo.module.scss';
import { ListenHere } from '../ListenHere/ListenHere';

type LinkToProps = {
  albumImage: string;
  albumName: string;
  youtubeLink: string;
  spotifyLink: string;
  appleMusicLink: string;
  soundcloudLink: string;
};

export const LinkTo: FC<LinkToProps> = ({
  albumImage,
  albumName,
  youtubeLink,
  spotifyLink,
  appleMusicLink,
  soundcloudLink,
}) => {
  let soundcloud;
  if (soundcloudLink != '') {
    soundcloud = (
      <div className={styles.icon_container}>
        <ListenHere
          servicePic='/Images/scloud.svg'
          streamUrl={soundcloudLink}
        />
      </div>
    );
  }

  return (
    <article className={styles.album}>
      <header className={styles.header}>
        <img src={albumImage} alt={'Perfection '+ albumName} />
        <p>{albumName}</p>
      </header>
      <div className={styles.links}>
        <div className={styles.icon_container}>
          <ListenHere servicePic='/Images/ytube.svg' streamUrl={youtubeLink} />
        </div>
        <div className={styles.icon_container}>
          <ListenHere servicePic='/Images/spotfy.svg' streamUrl={spotifyLink} />
        </div>
        {soundcloud}
        <div className={styles.icon_container}>
          <ListenHere
            servicePic='/Images/amusic.svg'
            streamUrl={appleMusicLink}
          />
        </div>
      </div>
    </article>
  );
};
