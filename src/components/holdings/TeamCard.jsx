import { renderInline } from "@utils/renderInline";
import Bio from "@components/shared/Bio";

export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="team-card-img" />
      <div className="team-card-body">
        <h3>{member.name}</h3>
        <span className="role">{member.role}</span>
        <Bio bio={member.bio} />
      </div>
    </div>
  );
}