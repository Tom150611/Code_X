import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import { membersByClass } from "@/lib/members";

export default function MembersHome() {
  const all = membersByClass.flatMap((group) => group.members);

  return (
    <section className="panel reveal" id="thanh-vien">
      <p className="kicker">Cộng đồng</p>
      <h2 className="shine-text">Thành viên CodeX</h2>
      <p className="lead member-intro">Học sinh khối 10 đang cùng học lập trình trong CLB.</p>
      <div className="member-grid member-grid--home">
        {all.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
      <p className="member-home-more">
        <Link className="btn ghost" href="/thanh-vien">Xem trang Thành viên</Link>
      </p>
    </section>
  );
}
