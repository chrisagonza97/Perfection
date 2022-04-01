import type { NextPage } from 'next';
import styles from './MusicList.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiSpotifyLine } from 'react-icons/ri';
import { RiSoundcloudFill } from 'react-icons/ri';
import { PageBorder } from '../PageBorder/PageBorder';
import {Album} from '../Album/Album'
//logos: spotify instagram
export const MusicList: NextPage = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.music_container}>
        <Album linkHref='/music/moreperfect' image='/Images/moreperfect.jpg'  name ='More Perfect (2021)'/>
        <Album linkHref='/music/nestsessions' image='/Images/nestsessions.jpg'  name ='Nest Sessions (2019)'/>
        <Album linkHref ='/music/cleangreed' image='/Images/cleangreed.jpg'  name ='Clean Greed (2019)'/>
      </div>
    </main>
  );
};
