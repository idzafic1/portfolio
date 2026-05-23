import Navbar from '../components/Navbar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.heroWrapper}>
      <header className={styles.heroContainer}>
        <h1>Building Digital Solutions for Small Businesses</h1>
        <p>We are a team of 4 CS students ready to elevate your online presence.</p>
        <button className={styles.ctaButton}>Work With Us</button>
      </header>
    </div>
  );
}

export default Home;