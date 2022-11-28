import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
import me from '../public/images/me.jpeg';
import {useEffect, useRef, useState} from 'react';

interface Repo {
    name: string,
    description: string | null,
    owner: string,
    projectUrl: string,
    siteUrl: string | null,
}

export default function Home() {
    const arrowIconRef = useRef<HTMLElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', hideArrow);

        return () => window.removeEventListener('scroll', hideArrow)
    }, [])

    useEffect(() => {
        getRepos();
    }, [])

    function hideArrow(){
        if(arrowIconRef.current){
            arrowIconRef.current.style.opacity = "0";
            setTimeout(() => {
                if(!arrowRef.current) return;
                arrowRef.current.remove();
            }, 500);
        }
    }

    function scrollDown(){
        let pageHeight = window.innerHeight;
        window.scrollTo({
            top: pageHeight,
            behavior: 'smooth'
        });
        hideArrow();
    }

    async function getRepos(){
        const response = await fetch('/api/github');
        const repos = await response.json();
        console.log(repos);
        setRepos(repos.data);
    }

    return (
            <div className={styles.container}>
                <div className={styles['container-inner']}>
                    <Image className={styles.avatar} src={me} alt={'A picture of me'} />
                    <h1 className={styles.name}>Tom Dempster</h1>
                    <h2 className={styles.job}>Frontend Developer</h2>
                    <p className={styles.about}>A skilled frontend developer specialising in Javascript. Delivering highly interactive and intuitive JS applications with a good footing in server side programming with Node. You can <a href="mailto:tom_dempster@hotmail.co.uk">contact me</a> or find me here:</p>
                    <div className={styles['social-icons']}>
                        <a href="https://github.com/bigblobby" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/thomas-dempster-00843bb7" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className={styles.skills}>
                        <h4>Skills</h4>
                        <div>
                            <span className={styles.badge}>Javascript</span>
                            <span className={styles.badge}>HTML</span>
                            <span className={styles.badge}>CSS</span>
                            <span className={styles.badge}>Twig</span>
                            <span className={styles.badge}>SCSS</span>
                            <span className={styles.badge}>SQL</span>
                        </div>
                    </div>
                    <div className={styles.tools}>
                        <h4>Tools</h4>
                        <div>
                            <span className={styles.badge}>Node</span>
                            <span className={styles.badge}>React</span>
                            <span className={styles.badge}>Redux</span>
                            <span className={styles.badge}>Webpack</span>
                            <span className={styles.badge}>Git</span>
                            <span className={styles.badge}>Docker</span>
                        </div>
                    </div>

                    <div ref={arrowRef} className={styles.arrow} onClick={scrollDown}>
                        <i ref={arrowIconRef} className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <section className={styles['projects-container']}>
                    <h2 style={{textAlign: 'center', fontSize: '2rem', padding: '3rem 1rem'}}>Github Projects</h2>

                    <div className={styles.projects}>
                        {
                            repos.length > 0 && repos.map((repo: Repo) => {
                                return (
                                    <article className={styles.project}>
                                        <h3>{repo.name}</h3>
                                        {repo.description && <p>{repo.description}</p>}
                                        <div>
                                            <a href={repo.projectUrl} target="_blank">Go to project <i className="fa-solid fa-arrow-right-long"></i></a>
                                            {repo.siteUrl && <a href={repo.siteUrl} target="_blank" className={styles['repo-site-link']}>Go to site <i className="fa-solid fa-arrow-right-long"></i></a>}
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
    )
}
