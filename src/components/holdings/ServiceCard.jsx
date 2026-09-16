export default function ServiceCard({ category, items }) {
  return (
    <div className="service-category">
      <h3>{category}</h3>
      {items.map((item, i) => (
        <div className="service-item" key={i}>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}