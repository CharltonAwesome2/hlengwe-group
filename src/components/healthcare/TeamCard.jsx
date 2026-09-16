import styles from './TeamCard.module.css';

export default function TeamCard({ member }) {
  return (
    <div className={styles.card}>
      <img src={member.image} alt={member.name} className={styles.img} />
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <span className={styles.role}>{member.role}</span>
        <p>{member.bio}</p>
      </div>
    </div>
  );
}