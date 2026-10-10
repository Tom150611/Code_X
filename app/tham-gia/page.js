import HeroStage from "@/components/HeroStage";
import PageShell from "@/components/PageShell";
import { photo } from "@/lib/assets";

export const metadata = {
  title: "Tham gia",
  description: "Đăng ký tham gia CLB CodeX. Dành cho học sinh khối 10.",
};

const reasons = [
  {
    title: "Thành viên",
    text: "Câu lạc bộ dành cho học sinh khối 10, 11 yêu thích lập trình và công nghệ.",
  },
  {
    title: "Học tập có mentor",
    text: "Mentor hướng dẫn từ nền tảng đến sản phẩm, đồng hành khi thành viên gặp khó khăn.",
  },
  {
    title: "Đăng ký qua form",
    text: "Quét mã QR, điền form đăng ký. Founder sẽ phản hồi qua SĐT +84 396 459 688.",
  },
];

export default function JoinPage() {
  return (
    <PageShell page="join">
      <HeroStage image="night-code">
        <div className="float-shots" aria-hidden="true">
          <img src={photo("keyboard")} alt="" />
          <img src={photo("python-screen")} alt="" />
          <img src={photo("books")} alt="" />
          <img src={photo("terminal")} alt="" />
        </div>
        <div className="liquid-orb o-a" aria-hidden="true"></div>
        <div className="liquid-orb o-b" aria-hidden="true"></div>
        <div className="liquid-orb o-c" aria-hidden="true"></div>

        <section className="liquid-card">
          <p className="kicker">Lời mời</p>
          <h1 className="shine-text">Tuyển thành viên</h1>
          <p className="lead">
            CodeX tuyển thành viên là học sinh khối 10, 11, những bạn muốn học lập trình,
            xây dựng sản phẩm và tham gia các cuộc thi công nghệ.
          </p>
          <p className="invite">
            Quét mã QR để điền form đăng ký. Founder sẽ phản hồi, mời vào nhóm
            và hẹn buổi làm quen.
          </p>
          <div className="qr-plate">
            <img src={photo("join-qr")} alt="Mã QR form đăng ký CLB CodeX" />
          </div>
          <p className="qr-hint">Quét QR · Form đăng ký · Tuyển thành viên 2026</p>
          <p className="founder-phone">
            Hoặc liên hệ founder: <a href="tel:+84396459688">+84 396 459 688</a>
          </p>
        </section>
      </HeroStage>

      <section className="join-reasons">
        {reasons.map((reason, i) => (
          <article key={reason.title} className="join-reason panel reveal">
            <p className="kicker">{String(i + 1).padStart(2, "0")}</p>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
