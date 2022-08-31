import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                      src="https://github.com/cosclerison.png"
                      alt="Avatar" 
                    />
                    <div className={styles.authorinfo}> 
                        <strong>Clerison Oliveira</strong>
                        <span>Developer Jr</span>
                    </div>
                </div>
                
                <time title="11 de maio as 80:13h" dataTime="2022-05-11 08:30:00">Publicado há 1Hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat </a></p>
            </div>

        </article>
    )
}