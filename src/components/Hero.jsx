import styles from './modules/Hero.module.css';

function Hero(){ 
    return (
        <section id="hero" className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
            <h1>Turn your business into a digital brand.</h1>
            <p>We are a team of four young developers crafting modern, fast, and affordable websites tailored to your small business.</p>
            <button className={styles.ctaButton}>Work With Us</button>
        </div>
        </section>
    );
}

export default Hero