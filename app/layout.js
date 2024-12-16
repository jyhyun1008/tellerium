import "./globals.css";
import "./navbar.css";
import "./aboutbar.css";

export const metadata = {
  title: "Tellerium - 스토리텔러들의 작은 공간",
  description: "스토리텔러들의 작은 공간",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id="navbar">
          <div id="navbar-center-logo">
            <h1 id="logo"><a href="/">Tellerium</a></h1>
          </div>
          <div id="navbar-center">
              <div id="hover-user1">
                <div id="navbar-user1" className="navbar-user"><div><a href="/">아연</a></div></div>
              </div>
              <div id="hover-user2">
                <div id="navbar-user2" className="navbar-user"><div><a href="/p/hyun1008">재연</a></div></div>
              </div>
              <div id="hover-user3">
                <div id="navbar-user3" className="navbar-user"><div><a href="/">퍼냥이</a></div></div>
              </div>
            </div>
        </div>
        <div id="aboutbar">
          <div id="about-left">
            <div className="about-item"><a href="/about">텔러리움</a></div>
            <div className="about-item"><a href="/works">작품읽기</a></div>
          </div>
          <div id="about-right">
            <div className="about-item"><a href="/goods">굿즈</a></div>
            <div className="about-item"><a href="/subscribe">정기구독</a></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
