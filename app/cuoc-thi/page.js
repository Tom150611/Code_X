import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import Mosaic from "@/components/Mosaic";
import PageShell from "@/components/PageShell";
import PhotoMarquee from "@/components/PhotoMarquee";
import { photo } from "@/lib/assets";

export const metadata = {
  title: "Cuộc thi",
  description: "Các cuộc thi CLB CodeX hướng tới: Editech, Solve for Tomorrow và các sân chơi lập trình học đường.",
};

const contests = [
  {
    image: "ui-sketch",
    when: "Hàng năm",
    title: "Editech",
    text: "Sân chơi giáo dục và công nghệ. CLB theo dõi vòng mở và chuẩn bị bài dự thi khi có đề tài phù hợp.",
  },
  {
    image: "python-screen",
    when: "Hàng năm",
    title: "Solve for Tomorrow",
    text: "Cuộc thi của Samsung về giải pháp công nghệ. Thành viên luyện xây dựng sản phẩm và trình bày dự án.",
  },
  {
    image: "terminal",
    when: "Theo lịch",
    title: "Cuộc thi lập trình",
    text: "Các kỳ thi lập trình, tin học hoặc sản phẩm số cấp trường và thành phố, phù hợp với định hướng của CLB.",
  },
  {
    image: "keyboard",
    when: "Khi có lịch",
    title: "Hackathon học đường",
    text: "Các buổi hackathon ngắn dành cho học sinh, nhằm hoàn thiện một sản phẩm trong thời gian có hạn.",
  },
];

export default function ContestsPage() {
  return (
    <PageShell page="contests">
      <HeroStage image="pitch">
        <div className="hero-copy">
          <p className="eyebrow">Cuộc thi</p>
          <h1 className="page-hero-title">Những cuộc thi CLB hướng tới</h1>
          <p className="lead">
            CodeX chuẩn bị và tham gia các cuộc thi công nghệ, nhằm rèn luyện khả năng
            xây dựng sản phẩm, viết hồ sơ và trình bày ý tưởng.
          </p>
        </div>
      </HeroStage>

      <main>
        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Định hướng</p>
            <h2>Cuộc thi là một phần của quá trình học tập.</h2>
            <p className="lead">
              Founder đã tham gia Editech và Solve for Tomorrow. Kinh nghiệm ấy được chia sẻ
              với thành viên: hiểu thể lệ, chuẩn bị hồ sơ và xây dựng sản phẩm để trình bày.
            </p>
            <div className="chip-row">
              <span className="chip">Editech</span>
              <span className="chip">Solve for Tomorrow</span>
              <span className="chip">Hackathon lập trình</span>
            </div>
          </div>
          <figure className="split-photo">
            <img src={photo("laptops")} alt="Làm việc nhóm trên laptop" />
          </figure>
        </section>

        <section className="stat-row reveal">
          <article className="stat">
            <strong className="shine-text">Hồ sơ</strong>
            <span>Chuẩn bị bài dự thi đầy đủ</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Đội hình</strong>
            <span>Làm việc nhóm có định hướng</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Sản phẩm</strong>
            <span>Một sản phẩm chạy được để trình bày</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Trình bày</strong>
            <span>Rèn luyện kỹ năng thuyết trình</span>
          </article>
        </section>

        <section className="contest-grid page-grid">
          {contests.map((contest) => (
            <article key={contest.title} className="contest panel media-in reveal">
              <img src={photo(contest.image)} alt="" />
              <p className="year">{contest.when}</p>
              <h2>{contest.title}</h2>
              <p>{contest.text}</p>
            </article>
          ))}
        </section>

        <section className="panel reveal">
          <p className="kicker">Năng lực cần rèn</p>
          <h2>Ba kỹ năng then chốt khi đi thi</h2>
          <div className="principle-grid">
            <article className="principle">
              <p className="step-num">Ý tưởng</p>
              <h3>Trình bày được đề tài</h3>
              <p>Nêu rõ bài toán, giải pháp và giá trị của sản phẩm đối với người dùng.</p>
            </article>
            <article className="principle">
              <p className="step-num">Sản phẩm</p>
              <h3>Có bản chạy được</h3>
              <p>Một trang web, một ứng dụng hoặc một công cụ — cầm lên và chạy thử được.</p>
            </article>
            <article className="principle">
              <p className="step-num">Đội nhóm</p>
              <h3>Học hỏi từ đội khác</h3>
              <p>Quan sát cách trình bày, làm việc nhóm và trả lời câu hỏi của giám khảo.</p>
            </article>
          </div>
        </section>

        <Mosaic
          label="Không gian làm sản phẩm"
          shots={[
            { image: "ui-sketch", alt: "Phác thảo giao diện" },
            { image: "python-screen", alt: "Màn hình Python" },
            { image: "keyboard", alt: "Bàn phím" },
            { image: "laptops", alt: "Laptop trên bàn làm việc" },
          ]}
        />

        <PhotoMarquee images={["pitch", "ui-sketch", "python-screen", "keyboard", "laptops"]} />

        <CtaBanner kicker="Tuyển thành viên" title="Cùng CLB chuẩn bị các cuộc thi" action="Đăng ký tham gia">
          Mời các bạn đăng ký cùng CodeX học tập và tham gia các sân chơi công nghệ.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
