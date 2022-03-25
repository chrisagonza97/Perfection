import type { NextPage } from 'next';
import styles from '../../styles/music.module.scss';
import { HeaderNav } from '../../components/HeaderNav/HeaderNav';
import {MusicList} from '../../components/MusicList/MusicList';
import {Footer } from '../../components/Footer/Footer'

const Music: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <MusicList/>
      <Footer />
    </div>
  );
};

export default Music;
