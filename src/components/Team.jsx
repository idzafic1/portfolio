import styles from './modules/Team.module.css';

function Team() {
  return (
    <section id="team" className={styles.teamSection}>
      <h2 className={styles.title}>Meet Our Team</h2>
      <p className={styles.subtitle}>Four Computer Science students combining skills to build better web experiences.</p>
      
      <div className={styles.teamGrid}>
        {/* You and your 3 friends can duplicate or edit these cards */}
        <div className={styles.memberCard}>
          <div className={styles.avatarPlaceholder}></div>
          <h3>Fatih</h3>
          <p className={styles.role}>Frontend Developer</p>
        </div>
        <div className={styles.memberCard}>
          <div className={styles.avatarPlaceholder}></div>
          <h3>Spiki</h3>
          <p className={styles.role}>Backend Engineer</p>
        </div>
        <div className={styles.memberCard}>
          <div className={styles.avatarPlaceholder}></div>
          <h3>Zike</h3>
          <p className={styles.role}>UI/UX Designer</p>
        </div>
        <div className={styles.memberCard}>
          <div className={styles.avatarPlaceholder}></div>
          <h3>Aner</h3>
          <p className={styles.role}>Fullstack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;