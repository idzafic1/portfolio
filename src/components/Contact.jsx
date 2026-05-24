import styles from './modules/Contact.module.css';

function Contact() {
  // We will handle the submit function logic later when you learn about State
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submission logic will go here!");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Let's Work Together</h2>
      <p className={styles.subtitle}>Tell us about your project and let's build something great.</p>
      
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Business / Personal Name</label>
          <input type="text" id="name" required placeholder="John Doe" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" required placeholder="john@example.com" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Project Details</label>
          <textarea id="message" rows="5" required placeholder="Describe the website you need..."></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;