import type { NextPage } from 'next';
import styles from '../../styles/music.module.scss';
import { HeaderNav } from '../../components/HeaderNav/HeaderNav';
import { MusicList } from '../../components/MusicList/MusicList';
import { Footer } from '../../components/Footer/Footer';
import { LinkTo } from '../../components/LinkTo/LinkTo';

const MorePerfect: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <LinkTo
        albumImage='/Images/moreperfect.jpg'
        albumName='Clean Greed (2019)'
        youtubeLink='https://www.youtube.com/playlist?list=OLAK5uy_n2y-a8-f9BwuhjdSjRBUGyZmvLfMiWIj8'
        spotifyLink='https://open.spotify.com/album/7rYCY39HajMbt7sWlrmhDJ'
        appleMusicLink='https://music.apple.com/us/album/more-perfect-ep/1586937820'
        soundcloudLink='https://soundcloud.com/patricknolanandperfection/sets/more-perfect'
      />
      <Footer />
    </div>
  );
};

export default MorePerfect;
