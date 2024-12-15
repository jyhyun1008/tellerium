import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({
    params,
  }) {
    // const username = (await params).username
    // let userInfos = await fetch(`${process.env.DOMAIN}/api/users-search-by-username`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //             username: username,
    //         })
    // })
    // let userInfoJSON = await userInfos.json()
    // let userInfo = userInfoJSON.rows[0]

    const url = (await params).seriesurl
    let seriesInfos = await fetch(`${process.env.DOMAIN}/api/series-search-by-url`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                url: url,
            })
    })
    let seriesInfoJSON = await seriesInfos.json()
    let seriesInfo = seriesInfoJSON.rows[0]

    let worksInfos = await fetch(`${process.env.DOMAIN}/api/works-search-by-seriesurl`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                url: url,
            })
    })
    let worksInfoJSON = await worksInfos.json()
    console.log(worksInfoJSON)
    let worksInfo = worksInfoJSON.rows

    console.log(seriesInfo)
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
                        <p className="username">/series/{seriesInfo.url}</p>
                        <p>{seriesInfo.content}</p>
                    </div>
                </center>
            </div>
        </main>
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>회차</h1>
                {
                    worksInfo.map((works, i) => {
                        return (
                        <div style={{ borderRadius: '5px', border: '2px solid var(--accent)'}}>
                            <div style={{display: 'flex', background: 'var(--backgroundtransy)', padding: '10px', gap: '1rem', alignItems: 'center' }}>
                                <img src={works.thumburl} style={{ height: '100px', width: '150px', objectFit: 'cover', objectPosition: 'center', borderRadius: '5px' }}></img>
                                <div style={{ maxHeight: '100px', overflowY: 'hidden' }}>
                                    <h2>{works.title}</h2>
                                    <p>{works.content}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </main>
        </div>
        </>
    );
}
