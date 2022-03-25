import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';
import { MainContent } from '../components/MainContent/MainContent';
import { Footer } from '../components/Footer/Footer';
import { Contact } from '../components/Contact/Contact';
import { MainHeader } from '../components/MainHeader/MainHeader';
import { ShowsContent } from '../components/ShowsContent/ShowsContent';
import { PageBorder } from '../components/PageBorder/PageBorder';

const Shows: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <MainHeader />
      <PageBorder />
      <ShowsContent />

      <Footer />
    </div>
  );
};

export default Shows;
