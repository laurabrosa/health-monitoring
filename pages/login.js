/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../src/styles/Login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Head>
          <title>Co-Doutor - Login</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.logo}>
            <Image
              src="/logo-big.svg"
              alt="Co-doutor Logo"
              width={187}
              height={217}
            />
          </div>
          <form className={styles.form} action="/login" method="post">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
            ></input>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
            ></input>
            <button type="submit">Entrar</button>
          </form>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/laurabrosa/health-monitoring"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.githubLogo}>
            <Image
              src="/github-img.svg"
              alt="Github Logo"
              width={18}
              height={18}
            />
          </div>
          Entenda o projeto
        </a>
      </footer>
    </div>
  );
}
