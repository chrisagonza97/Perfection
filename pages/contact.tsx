import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';
import { MainContent } from '../components/MainContent/MainContent'
import {Footer} from '../components/Footer/Footer'
import {Contact} from '../components/Contact/Contact'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
