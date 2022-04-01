import type { NextPage } from 'next';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiSpotifyLine } from 'react-icons/ri';
import { RiSoundcloudFill } from 'react-icons/ri';
import { SiApplemusic } from 'react-icons/si';
import { PageBorder } from '../PageBorder/PageBorder';
//logos: spotify instagram
export const Contact: NextPage = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.img_container}>
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
      </div>
      <PageBorder />
      <address className={styles.contact_info}>
        <h1>Contact Perfection:</h1>
        <p>
          <a
            href='https://www.instagram.com/patrick.veryperfect/'
            target='_blank'
            rel='noreferrer'
          >
            Instagram
          </a>
        </p>
      </address>
    </main>
  );
};
