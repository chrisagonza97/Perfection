import type { NextPage } from 'next';
import styles from './MainContent.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiSpotifyLine } from 'react-icons/ri';
import { RiSoundcloudFill } from 'react-icons/ri';
import {SiApplemusic} from 'react-icons/si'
import { PageBorder } from '../PageBorder/PageBorder';
//logos: spotify instagram
export const MainContent: NextPage = (props) => {
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
      <section className={styles.main_section}>
        <h2>&quot;MORE PERFECT&quot; OUT NOW</h2>
        <div className={styles.img_container}>
          <a>
            <img
              className={styles.moreperf_img}
              src='/Images/moreperfect.jpg'
              alt='Patrick Nolan'
            />
          </a>
        </div>

        <h3>LISTEN NOW:</h3>
        <div className={styles.listen_container}>
          <a
            href='https://open.spotify.com/album/7rYCY39HajMbt7sWlrmhDJ'
            target='_blank'
            rel='noreferrer'
          >
            <RiSpotifyLine className={styles.icon} />
          </a>
          <a
            href='https://music.apple.com/us/album/more-perfect-ep/1586937820'
            target='_blank'
            rel='noreferrer'
          >
            <SiApplemusic className={styles.icon} />
          </a>
          <a
            href='https://soundcloud.com/patricknolanandperfection/tracks'
            target='_blank'
            rel='noreferrer'
          >
            <RiSoundcloudFill className={styles.icon} />
          </a>
        </div>
      </section>
    </main>
  );
};
