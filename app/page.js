import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>최신 작품</h1>
        <div>
          <p>일단 아무렇게나 짜 봤어요...</p>
          <p>선생님~ 모바일은요?</p>
          <p>신경쓰지 않기로 했어요</p>
        </div>
      </main>
      <main className={styles.main}>
        <h1>예시 문단</h1>
        <div>
          <p>그냥 어떤 느낌인지 보라고 정적배포해보았고 실제로는 정적 배포 안 할 것 같아요(당연함.. 작품 올리고 편집하려면 동적으로 만들어야 함...)</p>
        </div>
      </main>
    </div>
  );
}
