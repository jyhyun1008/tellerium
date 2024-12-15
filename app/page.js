import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg"><img src="/mainimage.jpeg"></img></div>
      <div id="bannermargin"></div>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>Tellerium</h1>
            <div>
              <p><b>&lt;Teller+Terrarium&gt;</b></p>
              <p>3인 3색 - 스토리텔러들의 작은 공간입니다.</p>
              <p>작품을 발행하고 보존합니다.</p>
              <p>작품과 연관된 굿즈와 잡지를 발매합니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/about" className={styles.primary}>더보기</a>
              </ctas>
          </div>
          <div className="littlewidth">
            <img src="/cafe.jpeg"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth">
            <img src="/books.jpeg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>작품 읽기</h1>
            <div>
              <p>온라인 업로드되는 작품 일부를 무료로 공개하고 있습니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/works" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>굿즈 구매</h1>
            <div>
              <p>각 텔러리움의 세계관이 담긴 굿즈들을 만나볼 수 있습니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/goods" className={styles.primary}>더보기</a>
              </ctas>
          </div>
          <div className="littlewidth">
            <img src="/goods.webp"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth">
            <img src="/zine.jpeg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>소책자 구독</h1>
            <div>
              <p>매월 세 명분의 텔러리움이 녹아 있는 작고 얇은 소책자를 배송해드려요.</p>
              <p>아주 가끔씩은, 일러스트 굿즈나 수공예 아이템을 받을 수도 있답니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/subscribe" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}
