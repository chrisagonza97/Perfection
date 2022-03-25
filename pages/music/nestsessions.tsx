import type { NextPage } from 'next';
import styles from '../../styles/music.module.scss';
import { HeaderNav } from '../../components/HeaderNav/HeaderNav';
import { MusicList } from '../../components/MusicList/MusicList';
import { Footer } from '../../components/Footer/Footer';
import { LinkTo } from '../../components/LinkTo/LinkTo';

const NestSessions: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <LinkTo
        albumImage='/Images/nestsessions.jpg'
        albumName='Nest Sessions (2019)'
        youtubeLink='https://www.youtube.com/playlist?list=OLAK5uy_nP7lE6FpSLQLGcG3Jm6vUT9bg0qneGA3g'
        spotifyLink='https://open.spotify.com/album/0ISYrbOV95NvgRZUnchdBv'
        appleMusicLink='https://music.apple.com/us/album/nest-sessions-ep/1486308176'
        soundcloudLink=''
      />
      <Footer />
    </div>
  );
};

export default NestSessions;
