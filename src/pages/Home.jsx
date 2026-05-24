import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="team"><Team /></section>
        <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;