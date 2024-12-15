import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({
    params,
  }) {
    const username = (await params).username
    let userInfos = await fetch(`${process.env.DOMAIN}/api/users-search-by-username`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                username: username,
            })
    })
    let userInfoJSON = await userInfos.json()
    let userInfo = userInfoJSON.rows[0]

    let seriesInfos = await fetch(`${process.env.DOMAIN}/api/series-search-by-username`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
                username: username,
            })
    })
    let seriesInfoJSON = await seriesInfos.json()
    let seriesInfo = seriesInfoJSON.rows

    console.log(seriesInfo)
    return (
        <>
        <div style={{ backgroundImage: `url('${userInfo.bannerurl}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, opacity: '80%'}}>
        </div>
        <div className={styles.backdrop}>
        </div>
        <div className={styles.page}>
        <main className={styles.main}>
            <img src={userInfo.bannerurl} className={styles.banner}></img>
            <img src={userInfo.avatarurl} className={styles.avatar}></img>
            <div className={styles.content}>
                <center>
                    <h1>{userInfo.knownname}</h1>
                    <div>
                        <p className="username">@{userInfo.username}</p>
                        <p>{userInfo.bio}</p>
                    </div>
                </center>
            </div>
        </main>
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>시리즈 목록</h1>
                {
                    seriesInfo.map((series, i) => {
                        return (
                        <div style={{ backgroundImage: `url('${series.bannerurl}')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px', border: '2px solid var(--accent)'}}>
                            <a href={`/series/${series.url}`}>
                            <div style={{display: 'flex', background: 'var(--backgroundtransy)', padding: '10px', gap: '1rem', alignItems: 'center' }}>
                                <img src={series.coverurl} style={{ height: '200px', width: '150px', objectFit: 'cover', objectPosition: 'center', borderRadius: '5px' }}></img>
                                <div style={{ maxHeight: '200px', overflowY: 'hidden' }}>
                                    <h2>{series.title}</h2>
                                    <p>{series.content}</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        )
                    })
                }
            </div>
        </main>
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>연락처</h1>
                <div>
                    <ul>
                        <li>이메일: {userInfo.email}</li>
                        <li>연합우주: {userInfo.fedihandle}</li>
                    </ul>
                </div>
            </div>
        </main>
        </div>
        </>
    );
}
