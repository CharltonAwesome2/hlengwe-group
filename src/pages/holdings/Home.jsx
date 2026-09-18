import { Link } from "react-router-dom";
import primitives from "@styles/holdings/primitives.module.css";

export default function Home() {
  return (
    <>
      <section className={primitives.hero}>
        <div className={primitives.heroContent}>
          <h1>Hlengwe Holdings (Pty) Ltd</h1>
          <p>
            A dynamic and global management consultancy committed to delivering exceptional outcomes and driving
            sustainable change across Africa.
          </p>
          <hr />
          <br />

          <h3>Our subsidiaries:</h3>
          <br />
          <div className={primitives.heroButtons}>
            <Link to="/healthcare" className={`${primitives.btn} ${primitives.btnPrimary}`}>
              Hlengwe Healthcare Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}