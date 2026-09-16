export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="team-card-img" />
      <div className="team-card-body">
        <h3>{member.name}</h3>
        <span className="role">{member.role}</span>
        <p>{member.bio}</p>
      </div>
    </div>
  );
}