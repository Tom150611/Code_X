import CtaBanner from "@/components/CtaBanner";
import HeroStage from "@/components/HeroStage";
import Mosaic from "@/components/Mosaic";
import PageShell from "@/components/PageShell";
import PhotoMarquee from "@/components/PhotoMarquee";
import { photo } from "@/lib/assets";

export const metadata = {
  title: "Về CLB",
  description: "Mục tiêu của CLB CodeX: học lập trình, hoàn thiện sản phẩm và tham gia các cuộc thi công nghệ.",
};

export default function AboutPage() {
  return (
    <PageShell page="about">
      <HeroStage image="team">
        <div className="hero-copy">
          <p className="eyebrow">Về CLB</p>
          <h1 className="page-hero-title">CodeX — câu lạc bộ lập trình</h1>
          <p className="lead">Nơi các thành viên cùng học, trao đổi và xây dựng sản phẩm công nghệ.</p>
        </div>
      </HeroStage>

      <main>
        <section className="split-block panel reveal">
          <div>
            <p className="kicker">Giới thiệu</p>
            <h2>Quy mô nhỏ, định hướng rõ ràng.</h2>
            <p className="lead">
              CodeX là câu lạc bộ lập trình dành cho học sinh khối 10, 11. Thành viên cùng học
              web và Python, hoàn thiện sản phẩm, đồng thời chuẩn bị cho các cuộc thi công nghệ.
            </p>
            <div className="chip-row">
              <span className="chip">Học sinh</span>
              <span className="chip">Web · Python</span>
              <span className="chip">Sản phẩm công nghệ</span>
            </div>
          </div>
          <figure className="split-photo">
            <img src={photo("ui-sketch")} alt="Phác thảo trên bàn học" />
          </figure>
        </section>

        <section className="stat-row reveal">
          <article className="stat">
            <strong className="shine-text">CLB</strong>{" "}
            <span>Tiếp nhận học sinh khối 10, 11.</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Web · Python</strong>{" "}
            <span>Định hướng học tập</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Sản phẩm</strong>{" "}
            <span>Mục tiêu mỗi thành viên hướng tới</span>
          </article>
          <article className="stat">
            <strong className="shine-text">Cuộc thi</strong>{" "}
            <span>Sân chơi công nghệ học đường</span>
          </article>
        </section>

        <section className="panel reveal">
          <p className="kicker">Mục tiêu</p>
          <h2>Những gì CLB hướng tới</h2>
          <div className="goal-grid page-grid">
            <article className="goal-card media-in">
              <img src={photo("keyboard")} alt="" />
              <h3>Nắm vững kiến thức ứng dụng</h3>
              <p>Xây dựng trang web, viết chương trình Python và sử dụng Git để quản lý mã nguồn.</p>
            </article>
            <article className="goal-card media-in">
              <img src={photo("books")} alt="" />
              <h3>Hoàn thiện sản phẩm</h3>
              <p>Mỗi thành viên hướng tới một sản phẩm: chatbot, trang web hoặc công cụ học tập.</p>
            </article>
            <article className="goal-card media-in">
              <img src={photo("pitch")} alt="" />
              <h3>Tham gia cuộc thi</h3>
              <p>Chuẩn bị hồ sơ, trình bày ý tưởng và mang sản phẩm đến các sân chơi công nghệ.</p>
            </article>
            <article className="goal-card media-in">
              <img src={photo("terminal")} alt="" />
              <h3>Được hỗ trợ khi cần</h3>
              <p>Mentor và thành viên trong CLB hỗ trợ khi mã nguồn lỗi, hoặc khi cần định hướng bước tiếp theo.</p>
            </article>
          </div>
        </section>

        <section className="panel reveal">
          <p className="kicker">Sinh hoạt</p>
          <h2>Cách CLB tổ chức hoạt động</h2>
          <ol className="steps">
            <li>
              <span className="step-num">01 · Gặp mặt</span>
              <h3>Làm quen và định hướng</h3>
              <p>Trao đổi về nền tảng hiện tại, sở thích web hoặc Python, từ đó sắp xếp nội dung phù hợp.</p>
            </li>
            <li>
              <span className="step-num">02 · Học tập</span>
              <h3>Hướng dẫn đi cùng thực hành</h3>
              <p>Mỗi buổi kết hợp lý thuyết với bài tập, nhằm hoàn thiện một phần sản phẩm có thể chạy được.</p>
            </li>
            <li>
              <span className="step-num">03 · Dự án</span>
              <h3>Ghép thành sản phẩm hoàn chỉnh</h3>
              <p>Khi đã có nền tảng, thành viên xây dựng một dự án để giới thiệu và chuẩn bị cho các cuộc thi.</p>
            </li>
          </ol>
        </section>

        <Mosaic
          label="Không khí CLB"
          shots={[
            { image: "books", alt: "Sách và bàn học" },
            { image: "terminal", alt: "Dòng lệnh" },
            { image: "python-screen", alt: "Màn hình Python" },
            { image: "laptops", alt: "Laptop trên bàn làm việc" },
          ]}
        />

        <PhotoMarquee
          label="Ảnh công nghệ"
          images={["keyboard", "ui-sketch", "python-screen", "server", "books", "night-code"]}
        />

        <CtaBanner kicker="Tuyển thành viên" title="Mời mọi người tham gia" action="Gửi đăng ký">
          Cùng CodeX học lập trình, hoàn thiện sản phẩm và chuẩn bị cho các cuộc thi công nghệ.
        </CtaBanner>
      </main>
    </PageShell>
  );
}
