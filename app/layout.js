import "./globals.css";
import "./navbar.css";
import "./aboutbar.css";

export const metadata = {
  title: "Tellerium - 스토리텔러들만의 작은 공간",
  description: "스토리텔러들만의 작은 공간",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="navbar">
          <div id="navbar-center-logo">
            <h1 id="logo">Tellerium</h1>
          </div>
          <div id="navbar-center">
              <div id="hover-user1">
                <div id="navbar-user1" className="navbar-user"><div>아연</div></div>
              </div>
              <div id="hover-user2">
                <div id="navbar-user2" className="navbar-user"><div>재연</div></div>
              </div>
              <div id="hover-user3">
                <div id="navbar-user3" className="navbar-user"><div>퍼냥이</div></div>
              </div>
            </div>
        </div>
        <div id="aboutbar">
          <div id="about-left">
            <div className="about-item">텔러리움</div>
            <div className="about-item">작품읽기</div>
          </div>
          <div id="about-right">
            <div className="about-item">구독하기</div>
            <div className="about-item">신청하기</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
