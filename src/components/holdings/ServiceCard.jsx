import cards from "@styles/holdings/cards.module.css";

export default function ServiceCard({ category, items }) {
  return (
    <div className={cards.serviceCategory}>
      <h3>{category}</h3>
      {items.map((item, i) => (
        <div className={cards.serviceItem} key={i}>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}