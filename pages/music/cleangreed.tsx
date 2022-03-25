import type { NextPage } from 'next';
import styles from '../../styles/music.module.scss';
import { HeaderNav } from '../../components/HeaderNav/HeaderNav';
import { MusicList } from '../../components/MusicList/MusicList';
import { Footer } from '../../components/Footer/Footer';
import { LinkTo } from '../../components/LinkTo/LinkTo';

const CleanGreed: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <LinkTo
        albumImage='/Images/cleangreed.jpg'
        albumName='Clean Greed (2019)'
        youtubeLink='https://www.youtube.com/playlist?list=OLAK5uy_mcCVHjK9H2qwbCNFoXxi31731bucQ6sQE'
        spotifyLink='https://open.spotify.com/album/4LeynzuaRLyXZKA7TWUMse'
        appleMusicLink='https://music.apple.com/us/album/clean-greed-ep/1484520238'
        soundcloudLink=''
      />
      <Footer />
    </div>
  );
};

export default CleanGreed;
