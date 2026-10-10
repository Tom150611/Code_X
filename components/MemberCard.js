export default function MemberCard({ name, initials, className }) {
  return (
    <article className="member-card panel">
      <div className="member-avatar" aria-hidden="true">{initials}</div>
      <h3 className="member-name">{name}</h3>
      <p className="member-meta">Lớp: {className}</p>
    </article>
  );
}
