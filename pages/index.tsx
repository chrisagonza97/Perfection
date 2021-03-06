import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';
import { MainContent } from '../components/MainContent/MainContent'
import {Footer} from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container }>
      <HeaderNav />
      <MainContent />
      <Footer/>
    </div>
  );
};

export default Home;
