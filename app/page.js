import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import PageShell from "@/components/PageShell";
import PhotoMarquee from "@/components/PhotoMarquee";
import PhotoSlider from "@/components/PhotoSlider";
import { photo } from "@/lib/assets";

export const metadata = {
  title: { absolute: "CodeX — Trang chủ" },
};

const slides = [
  { image: "keyboard", alt: "Bàn phím cơ", caption: "Bàn phím · môi trường làm việc" },
  { image: "python-screen", alt: "Màn hình Python", caption: "Python · trình soạn thảo" },
  { image: "ui-sketch", alt: "Phác thảo giao diện", caption: "Web · phác thảo giao diện" },
  { image: "terminal", alt: "Terminal", caption: "Git · dòng lệnh" },
  { image: "server", alt: "Máy chủ", caption: "Backend · máy chủ" },
  { image: "books", alt: "Sách công nghệ", caption: "Học tập · tài liệu" },
  { image: "laptops", alt: "Laptop trên bàn làm việc", caption: "Làm việc nhóm" },
  { image: "night-code", alt: "Màn hình lập trình", caption: "Lập trình" },
];

const tickerItems = ["Python", "JavaScript", "HTML", "CSS", "Git", "Node.js", "SQL", "Tailwind", "Bootstrap", "AI"];

export default function HomePage() {
  return (
    <PageShell page="home">
      <HeroStage image="hero-coding">
        <div className="hero-copy">
          <p className="eyebrow">CLB lập trình · Công nghệ · AI · 2026</p>
          <h1 className="hero-title">
            <span className="logo shine-text">CodeX</span>
            <span className="recruit-title shine-text">Tuyển thành viên</span>
          </h1>
          <p className="lead">
            <span className="lead-line">Câu lạc bộ lập trình </span>
            <span className="lead-line">Cùng học web, Python, xây dựng sản phẩm và tham gia các cuộc thi công nghệ.</span>
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/tham-gia">Đăng ký tham gia</Link>
            <Link className="btn ghost" href="/ve-clb">Xem mục tiêu CLB</Link>
          </div>
        </div>
      </HeroStage>

      <main>
        <PhotoMarquee
          label="Ảnh công nghệ"
          images={["keyboard", "ui-sketch", "python-screen", "books", "server", "terminal", "laptops", "night-code"]}
        />

        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Về CLB</p>
            <h2>Học tập nghiêm túc, hướng tới sản phẩm hoàn chỉnh.</h2>
            <p className="lead">
              CodeX tập hợp học sinh khối 10, 11 yêu thích lập trình. Thành viên cùng học,
              trao đổi bài tập, xây dựng sản phẩm và tham gia các cuộc thi công nghệ.
            </p>
            <Link className="btn ghost" href="/ve-clb">Đọc mục tiêu</Link>
          </div>
          <figure className="split-photo">
            <img src={photo("books")} alt="Sách và bàn học" />
          </figure>
        </section>

        <section className="stat-row reveal">
          <article className="stat">
            <strong className="shine-text">CLB</strong>{" "}
            <span>Tiếp nhận học sinh khối 10, 11.</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Sản phẩm</strong>{" "}
            <span>Mỗi thành viên hướng tới một sản phẩm hoàn chỉnh.</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Web · Python</strong>{" "}
            <span>Định hướng học tập</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Cuộc thi</strong>{" "}
            <span>Sân chơi công nghệ học đường</span>
          </article>
        </section>

        <section className="bento">
          <Link className="media-card panel card-link reveal" href="/hoc-tap">
            <img src={photo("ui-sketch")} alt="" />
            <div className="media-body">
              <p className="kicker">Học tập</p>
              <h2>Nền tảng lập trình</h2>
              <p>Web, Python, Git và quy trình hoàn thiện một sản phẩm cùng nhau.</p>
            </div>
          </Link>
          <Link className="media-card panel card-link reveal" href="/cuoc-thi">
            <img src={photo("pitch")} alt="" />
            <div className="media-body">
              <p className="kicker">Cuộc thi</p>
              <h2>Sân chơi công nghệ</h2>
              <p>Editech, Solve for Tomorrow và các cuộc thi lập trình học đường.</p>
            </div>
          </Link>
          <Link className="media-card panel card-link reveal" href="/founder">
            <img src={photo("server")} alt="" />
            <div className="media-body">
              <p className="kicker">Người dẫn dắt</p>
              <h2>Nguyễn Hoàng Duy</h2>
              <p>Người sáng lập và mentor của CodeX, đồng hành cùng thành viên trong học tập và dự án.</p>
            </div>
          </Link>
        </section>

        <PhotoSlider slides={slides} />

        <section className="tech-ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </section>

        <CtaBanner kicker="Mở đơn" title="Tuyển thành viên" action="Gửi đăng ký">
          CodeX đang mở đơn cho học sinh khối 10, 11. Mời các bạn đăng ký để cùng học tập và phát triển sản phẩm.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
