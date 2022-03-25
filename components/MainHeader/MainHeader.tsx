import type { NextPage } from 'next';
import styles from './MainHeader.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiSpotifyLine } from 'react-icons/ri';
import { RiSoundcloudFill } from 'react-icons/ri';
import { SiApplemusic } from 'react-icons/si';
import { PageBorder } from '../PageBorder/PageBorder';
//logos: spotify instagram
export const MainHeader: NextPage = (props) => {
  return (
    <header className={styles.img_container}>
      <img
        className={styles.main_img}
        src='/Images/patricknolan.jpg'
        alt='Patrick Nolan'
      />
      <div className={styles.icon_container}>
        <a
          href='https://www.instagram.com/patrick.veryperfect/?hl=en'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineInstagram className={styles.icon} />
        </a>
        <a
          href='https://open.spotify.com/artist/4i6ylXoXpZ7zgUJWKZv9jr'
          target='_blank'
          rel='noreferrer'
        >
          <RiSpotifyLine className={styles.icon} />
        </a>
        <a
          href='https://music.apple.com/us/artist/perfection/1484207987'
          target='_blank'
          rel='noreferrer'
        >
          <SiApplemusic className={styles.icon} />
        </a>
        <a
          href='https://soundcloud.com/patricknolanandperfection'
          target='_blank'
          rel='noreferrer'
        >
          <RiSoundcloudFill className={styles.icon} />
        </a>
      </div>
    </header>
  );
};
