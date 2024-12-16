import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  let worksInfos = await fetch(`${process.env.DOMAIN}/api/works`)
  let worksInfoJSON = await worksInfos.json()
  let worksInfo = worksInfoJSON.rows

  let seriesInfos = await fetch(`${process.env.DOMAIN}/api/series`)
  let seriesInfoJSON = await seriesInfos.json()
  let seriesInfo = seriesInfoJSON.rows
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>최신 작품 일람</h1>
          {
            worksInfo.map((works, i) => {
                return (
                <a href={`/series/${works.series.url}/${works.url}`}>
                  <div style={{ borderRadius: '5px', border: '2px solid var(--accent)', overflow: 'hidden'}}>
                      <div style={{display: 'flex', background: 'var(--backgroundtransy)', padding: '10px', gap: '1rem', alignItems: 'center' }}>
                          <img src={works.thumburl} style={{ height: '100px', width: '150px', objectFit: 'cover', objectPosition: 'center', borderRadius: '5px' }}></img>
                          <div style={{ maxHeight: '100px', overflowY: 'hidden' }}>
                              <h2>{works.title}</h2>
                              <p className="username">@{works.series.owner.username}</p>
                          </div>
                      </div>
                  </div>
                </a>
                )
            })
          }
      </main>
      <main className={styles.main}>
        <h1>시리즈 일람</h1>
        {
            seriesInfo.map((series, i) => {
                return (
                <div style={{ backgroundImage: `url('${series.bannerurl}')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px', border: '2px solid var(--accent)', overflow: 'hidden'}}>
                    <a href={`/series/${series.url}`}>
                    <div style={{display: 'flex', background: 'var(--backgroundtransy)', padding: '10px', gap: '1rem', alignItems: 'center' }}>
                        <img src={series.coverurl} style={{ height: '200px', width: '150px', objectFit: 'cover', objectPosition: 'center', borderRadius: '5px' }}></img>
                        <div style={{ maxHeight: '200px', overflowY: 'hidden' }}>
                            <h2>{series.title}</h2>
                            <p className="username">@{series.owner.username}</p>
                            <p>{series.content}</p>
                        </div>
                    </div>
                    </a>
                </div>
                )
            })
        }
      </main>
    </div>
  );
}
