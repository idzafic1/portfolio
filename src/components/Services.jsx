import styles from './modules/Services.module.css';

function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>Tailored web development to help your business grow online.</p>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Landing Pages</h3>
          <p>High-converting single-page websites to showcase your local business or product launch.</p>
        </div>
        <div className={styles.card}>
          <h3>E-Commerce</h3>
          <p>Fully functional online stores designed to turn website visitors into paying customers.</p>
        </div>
        <div className={styles.card}>
          <h3>SEO & Speed</h3>
          <p>Optimizing your existing site so it ranks higher on Google and loads instantly on mobile.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;