import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import MemberCard from "@/components/MemberCard";
import Mosaic from "@/components/Mosaic";
import PageShell from "@/components/PageShell";
import { photo } from "@/lib/assets";
import { membersByClass } from "@/lib/members";

export const metadata = {
  title: "Thành viên",
  description: "Danh sách thành viên CLB CodeX — học sinh khối 10 đang học lập trình cùng nhau.",
};

export default function MembersPage() {
  return (
    <PageShell page="members">
      <HeroStage image="pair-program">
        <div className="hero-copy">
          <p className="eyebrow">Cộng đồng</p>
          <h1 className="page-hero-title shine-text">Thành viên CodeX</h1>
          <p className="lead">
            Những học sinh khối 10 đang cùng học web, Python và xây dựng sản phẩm trong CLB.
            Danh sách được cập nhật theo các đợt tuyển thành viên mới.
          </p>
        </div>
      </HeroStage>

      <main>
        <section className="stat-row reveal">
          <article className="stat">
            <strong className="shine-text">3</strong>{" "}
            <span>Thành viên đang sinh hoạt</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Khối 10</strong>{" "}
            <span>Năm học 2025–2026</span>
          </article>
          <article className="stat">
            <strong className="shine-text">10AA1</strong>{" "}
            <span>2 thành viên</span>
          </article>
          <article className="stat">
            <strong className="shine-text">10BA1</strong>{" "}
            <span>1 thành viên</span>
          </article>
        </section>

        <section className="panel reveal">
          <p className="kicker">Danh sách</p>
          <h2>Thành viên theo lớp</h2>
          <p className="lead member-intro">
            Mỗi bạn có hướng học riêng; CLB tạo không gian để trao đổi, pair-program và hoàn thiện dự án.
          </p>

          {membersByClass.map((group) => (
            <div key={group.classLabel} className="member-class-block">
              <h3 className="member-class-label">Lớp {group.classLabel}</h3>
              <div
                className={
                  group.members.length > 1 ? "member-grid member-grid--pair" : "member-grid member-grid--solo"
                }
              >
                {group.members.map((member) => (
                  <MemberCard key={member.name} {...member} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Cùng nhau</p>
            <h2>Học tập theo nhóm nhỏ</h2>
            <p className="lead">
              Thành viên gặp nhau để làm bài tập, review code và chia sẻ tiến độ dự án.
              Founder và các bạn trong CLB hỗ trợ khi cần định hướng hoặc gỡ lỗi.
            </p>
            <div className="chip-row">
              <span className="chip">Pair-program</span>
              <span className="chip">Dự án nhóm</span>
              <span className="chip">Chuẩn bị cuộc thi</span>
            </div>
          </div>
          <figure className="split-photo">
            <img src={photo("laptops")} alt="Thành viên làm việc cùng laptop" />
          </figure>
        </section>

        <Mosaic
          label="Không khí CLB"
          shots={[
            { image: "team", alt: "Làm việc nhóm" },
            { image: "workshop", alt: "Buổi workshop" },
            { image: "keyboard", alt: "Bàn phím lập trình" },
            { image: "hackathon", alt: "Hackathon" },
          ]}
        />

        <CtaBanner kicker="Mở đơn" title="Muốn gia nhập?" action="Tham gia CLB" href="/tham-gia">
          CodeX đang tuyển học sinh khối 10, 11. Đăng ký qua form hoặc liên hệ founder.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
