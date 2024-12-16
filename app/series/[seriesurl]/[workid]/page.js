import Image from "next/image";
import styles from "./page.module.css";
import { marked } from "marked";

export default async function Page({
    params,
  }) {

    const seriesUrl = (await params).seriesurl
    const workId = (await params).workid
    const url = `${seriesUrl}/${workId}`
    let seriesInfos = await fetch(`${process.env.DOMAIN}/api/series-search-by-url`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                url: seriesUrl,
            })
    })
    let seriesInfoJSON = await seriesInfos.json()
    let seriesInfo = seriesInfoJSON.rows[0]

    let worksInfos = await fetch(`${process.env.DOMAIN}/api/works-search-by-url`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                url: url,
            })
    })
    let worksInfoJSON = await worksInfos.json()
    let worksInfo = worksInfoJSON.rows[0]
    return (
        <>
        <div style={{ backgroundImage: `url('${seriesInfo.bannerurl}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, opacity: '80%'}}>
        </div>
        <div className={styles.backdrop}>
        </div>
        <div className={styles.page}>
        <main className={styles.main}>
            <img src={seriesInfo.bannerurl} className={styles.banner}></img>
            <img src={seriesInfo.coverurl} className={styles.avatar}></img>
            <div className={styles.content}>
                <center>
                    <h1>{seriesInfo.title}</h1>
                    <div>
                        <p className="username">/series/{seriesInfo.url} by <a href={`/p/${seriesInfo.owner.username}`}>@{seriesInfo.owner.username}</a></p>
                        <p>{seriesInfo.content}</p>
                    </div>
                </center>
            </div>
        </main>
        <a href={`/series/${seriesUrl}`}>
            <main className={styles.main} style={{ background: 'var(--accent)', color: 'white', textAlign: 'center',  border: '0'}}>
                목록보기
            </main>
        </a>
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>{worksInfo.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: marked(worksInfo.content)}}>
                </div>
            </div>
        </main>
        </div>
        </>
    );
}
