import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import Mosaic from "@/components/Mosaic";
import PageShell from "@/components/PageShell";
import PhotoMarquee from "@/components/PhotoMarquee";
import { photo } from "@/lib/assets";

export const metadata = {
  title: "Founder",
  description: "Nguyễn Hoàng Duy — người sáng lập CLB CodeX.",
};

const PHONE_HREF = "tel:+84396459688";
const PHONE_LABEL = "+84 396 459 688";

const awards = [
  { icon: "🥇", title: "Giải Nhất Editech 2024–2025", detail: "Thành tích cá nhân — sân chơi giáo dục và công nghệ" },
  { icon: "🥉", title: "Giải Ba Editech 2025–2026", detail: "Thành tích cá nhân — sân chơi giáo dục và công nghệ" },
  { icon: "✨", title: "Top 5 AI for Good 2024–2025", detail: "Thành tích cá nhân — sân chơi AI vì cộng đồng" },
  { icon: "🌟", title: "Top 15 AI for Good 2025–2026", detail: "Thành tích cá nhân — sân chơi AI vì cộng đồng" },
  { icon: "🏆", title: "Top 50 Solve for Tomorrow", detail: "Samsung — thành tích cá nhân" },
];

export default function FounderPage() {
  return (
    <PageShell page="founder">
      <HeroStage image="founder-desk">
        <div className="hero-copy">
          <p className="eyebrow">Người sáng lập</p>
          <h1 className="page-hero-title shine-text">Nguyễn Hoàng Duy</h1>
          <p className="role">Founder · Mentor</p>
          <p className="founder-contact">
            <span>SĐT</span>
            <a href={PHONE_HREF}>{PHONE_LABEL}</a>
          </p>
          <p className="lead">
            Duy đã bắt đầu theo học và tham gia các cuộc thi lập trình từ năm lớp 8. Sau hai tháng thực tập hè tại công ty công nghệ, mình thành lập CodeX với mong muốn xây dựng một cộng đồng dành cho học sinh khối 10, 11, nơi các bạn có thể học tập, trao đổi và phát triển sản phẩm công nghệ thực tế.
          </p>
        </div>
      </HeroStage>

      <main>
        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Câu chuyện</p>
            <h2>Đồng hành sát sao với từng thành viên.</h2>
            <p className="lead">
              CodeX tổ chức theo hướng lớp nhỏ. Mentor làm việc cùng từng bạn, xác định
              điểm còn vướng mắc và hỗ trợ đến khi trang web hoặc chương trình chạy được.
            </p>
            <div className="chip-row">
              <span className="chip">Web · Python</span>
              <span className="chip">Khối 10</span>
              <span className="chip">Cuộc thi công nghệ</span>
            </div>
          </div>
          <figure className="split-photo">
            <img src={photo("night-code")} alt="Góc làm việc khi lập trình" />
          </figure>
        </section>

        <section className="panel reveal in">
          <p className="kicker">Thành tích cá nhân</p>
          <h2>Một số dấu mốc đã đi qua</h2>
          <ul className="awards">
            {awards.map((award) => (
              <li key={award.title}>
                <span className="award-icon">{award.icon}</span>
                <div>
                  <strong>{award.title}</strong>
                  <span>{award.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel reveal">
          <p className="kicker">Cách hướng dẫn</p>
          <h2>Mentor đồng hành cùng thành viên như thế nào</h2>
          <ol className="steps">
            <li>
              <span className="step-num">01 · Nền tảng</span>
              <h3>Xây dựng kiến thức ban đầu</h3>
              <p>Cài đặt môi trường, viết trang web và chương trình đầu tiên, hình thành thói quen học tập.</p>
            </li>
            <li>
              <span className="step-num">02 · Sản phẩm</span>
              <h3>Hoàn thiện một sản phẩm</h3>
              <p>Chatbot, trang CLB hoặc công cụ học tập — sản phẩm mở được và trình bày được ý tưởng.</p>
            </li>
            <li>
              <span className="step-num">03 · Cuộc thi</span>
              <h3>Chuẩn bị và tham gia thi</h3>
              <p>Khi đã có đội hình và đề tài, CLB nộp bài, luyện trình bày và mang sản phẩm ra sân chơi công nghệ.</p>
            </li>
          </ol>
        </section>

        <Mosaic
          label="Không gian làm việc"
          shots={[
            { image: "keyboard", alt: "Bàn phím" },
            { image: "server", alt: "Máy chủ" },
            { image: "terminal", alt: "Dòng lệnh" },
            { image: "laptops", alt: "Laptop trên bàn làm việc" },
          ]}
        />

        <section className="quote-card panel reveal">
          <p className="kicker">Góc nhìn</p>
          <blockquote>Học lập trình không nhằm thuộc lòng cú pháp, mà nhằm kiên trì với một ý tưởng cho đến khi sản phẩm chạy được.</blockquote>
          <cite>Nguyễn Hoàng Duy · Founder CodeX</cite>
        </section>

        <PhotoMarquee
          label="Ảnh không gian làm việc"
          images={["keyboard", "server", "terminal", "night-code", "books", "python-screen"]}
        />

        <CtaBanner kicker="Mở đơn" title="Đăng ký cùng CodeX" action="Đăng ký tham gia">
          Quét mã QR trên trang Tham gia để đăng ký. Liên hệ founder:{" "}
          <a className="text-link" href={PHONE_HREF}>{PHONE_LABEL}</a>.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
