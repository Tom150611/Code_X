import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import Mosaic from "@/components/Mosaic";
import PageShell from "@/components/PageShell";
import PhotoMarquee from "@/components/PhotoMarquee";
import { photo, techLogo } from "@/lib/assets";

export const metadata = {
  title: "Học tập",
  description: "Nội dung học tập của CLB CodeX: web, Python, Git và giao diện.",
};

const learnCards = [
  {
    image: "ui-sketch",
    logos: ["html5", "css3", "javascript"],
    title: "Web cơ bản",
    text: "HTML, CSS, JavaScript — dựng được một trang giới thiệu, biểu mẫu hoặc trang đích đơn giản.",
  },
  {
    image: "python-screen",
    logos: ["python"],
    title: "Python",
    text: "Cú pháp, xử lý dữ liệu cơ bản, và xây dựng chatbot hoặc chương trình nhỏ phục vụ học tập.",
  },
  {
    image: "keyboard",
    logos: ["css3", "tailwind", "bootstrap"],
    title: "Giao diện",
    text: "Bố cục, màu sắc, khoảng trắng. Sử dụng Bootstrap hoặc Tailwind để giao diện gọn gàng, thống nhất.",
  },
  {
    image: "terminal",
    logos: ["git", "github"],
    title: "Git & GitHub",
    text: "Lưu bài, làm việc nhóm để tránh ghi đè tệp, và đưa mã nguồn lên GitHub.",
  },
  {
    image: "server",
    logos: ["nodejs", "sql"],
    title: "Backend cơ bản",
    text: "Node.js và SQL ở mức nền tảng: lưu biểu mẫu, danh sách thành viên, dữ liệu đơn giản.",
  },
  {
    image: "laptops",
    logos: [],
    title: "Xây dựng sản phẩm",
    text: "Ghép những gì đã học thành một dự án: trang CLB, công cụ học tập hoặc bảng điều khiển.",
  },
];

const tools = [
  { id: "python", logos: [{ name: "python", alt: "Python" }], label: "Python" },
  { id: "js", logos: [{ name: "javascript", alt: "JavaScript" }], label: "JavaScript" },
  { id: "html", logos: [{ name: "html5", alt: "HTML5" }], label: "HTML5" },
  { id: "css", logos: [{ name: "css3", alt: "CSS3" }], label: "CSS3" },
  { id: "bootstrap", logos: [{ name: "bootstrap", alt: "Bootstrap" }], label: "Bootstrap" },
  { id: "tailwind", logos: [{ name: "tailwind", alt: "Tailwind CSS" }], label: "Tailwind" },
  { id: "node", logos: [{ name: "nodejs", alt: "Node.js" }], label: "Node.js" },
  { id: "sql", logos: [{ name: "sql", alt: "SQL" }], label: "SQL" },
  {
    id: "git",
    logos: [
      { name: "git", alt: "Git" },
      { name: "github", alt: "GitHub" },
    ],
    label: "Git & GitHub",
  },
];

// The GitHub mark is black, so it gets the inverted "logo-light" treatment on the dark theme.
const logoClass = (name) => (name === "github" ? "logo-light" : undefined);

export default function LearnPage() {
  return (
    <PageShell page="learn">
      <HeroStage image="whiteboard">
        <div className="hero-copy">
          <p className="eyebrow">Học tập</p>
          <h1 className="page-hero-title">Nội dung chương trình học</h1>
          <p className="lead">
            CodeX xây dựng lộ trình theo từng giai đoạn. Trước mắt, thành viên làm quen với
            các mảng dưới đây; lịch chi tiết sẽ được sắp xếp sau khi nắm được nền tảng của từng bạn.
          </p>
        </div>
      </HeroStage>

      <main>
        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Phương pháp</p>
            <h2>Thực hành đi cùng lý thuyết.</h2>
            <p className="lead">
              Mỗi mảng đều có bài tập cụ thể, nhằm hoàn thiện một phần chạy được:
              một trang web, một chương trình Python, một kho mã trên GitHub.
            </p>
            <div className="chip-row">
              <span className="chip">HTML · CSS · JS</span>
              <span className="chip">Python</span>
              <span className="chip">Git</span>
            </div>
          </div>
          <figure className="split-photo">
            <img src={photo("python-screen")} alt="Màn hình học Python" />
          </figure>
        </section>

        <section className="panel reveal">
          <p className="kicker">Lộ trình sơ bộ</p>
          <h2>Ba bước trước khi có lịch chi tiết</h2>
          <ol className="steps">
            <li>
              <span className="step-num">01 · Nền tảng</span>
              <h3>Web và Python</h3>
              <p>Cài đặt môi trường, viết HTML đầu tiên và chạy chương trình Python. Từ đó xác định hướng phù hợp.</p>
            </li>
            <li>
              <span className="step-num">02 · Thực hành</span>
              <h3>Git và giao diện</h3>
              <p>Quản lý mã nguồn, chỉnh sửa bố cục cho rõ ràng và tập làm việc theo nhóm nhỏ.</p>
            </li>
            <li>
              <span className="step-num">03 · Dự án</span>
              <h3>Hoàn thiện một sản phẩm</h3>
              <p>Trang CLB, công cụ học tập hoặc chatbot — sản phẩm có thể mở lên và giới thiệu được.</p>
            </li>
          </ol>
        </section>

        <section className="learn-grid page-grid">
          {learnCards.map((card) => (
            <article key={card.title} className="learn-card panel media-in reveal">
              <img src={photo(card.image)} alt="" />
              {card.logos.length > 0 && (
                <div className="learn-logos">
                  {card.logos.map((logo) => (
                    <img key={logo} className={logoClass(logo)} src={techLogo(logo)} alt="" />
                  ))}
                </div>
              )}
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="panel reveal">
          <p className="kicker">Công cụ</p>
          <h2>Ngôn ngữ và thư viện sẽ sử dụng</h2>
          <div className="tech-grid">
            {tools.map((tool) => (
              <article key={tool.id} className="tech-card" data-tech={tool.id}>
                <div className={tool.logos.length > 1 ? "tech-logo duo" : "tech-logo"}>
                  {tool.logos.map((logo) => (
                    <img key={logo.name} className={logoClass(logo.name)} src={techLogo(logo.name)} alt={logo.alt} />
                  ))}
                </div>
                <span>{tool.label}</span>
              </article>
            ))}
          </div>
        </section>

        <Mosaic
          label="Không gian học"
          shots={[
            { image: "ui-sketch", alt: "Phác thảo giao diện" },
            { image: "terminal", alt: "Dòng lệnh" },
            { image: "books", alt: "Tài liệu" },
            { image: "laptops", alt: "Laptop học nhóm" },
          ]}
        />

        <PhotoMarquee images={["python-screen", "ui-sketch", "terminal", "server", "keyboard", "night-code"]} />

        <CtaBanner kicker="Mở đơn" title="Học cùng CLB" action="Đăng ký tham gia">
          Mời học sinh khối 10, 11 đăng ký, cùng CodeX học lập trình và hoàn thiện sản phẩm.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
