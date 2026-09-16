import CircleLayout from './CircleLayout';
import { specialistAreas } from '@data/healthcare/approach';
import styles from './CircleLayout.module.css';

export default function SpecialistRing() {
  return (
    <CircleLayout
      nodes={specialistAreas}
      radius={40}
      variant="specialist"
      centerLabel="Key Focus Areas"     // <-- add this line
      renderCenter={() => (
        <div className={styles.specialistCenter}>
          <strong>Key Focus Areas</strong>
          <span>12 Clinical Disciplines</span>
        </div>
      )}
    />
  );
}