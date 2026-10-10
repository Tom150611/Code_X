import Link from "next/link";

export default function CtaBanner({ kicker, title, action, href = "/tham-gia", children }) {
  return (
    <section className="cta-banner panel reveal">
      <div>
        <p className="kicker">{kicker}</p>
        <h2 className="shine-text">{title}</h2>
        <p className="lead">{children}</p>
      </div>
      <Link className="btn" href={href}>
        {action}
      </Link>
    </section>
  );
}
