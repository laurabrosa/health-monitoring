/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../src/styles/Login.module.scss";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthUserContext';

const Login = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



  const router = useRouter();

  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("Success. The user is created in firebase", authUser.email)
      router.push('/patients');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };


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
          <form onSubmit={onSubmit} className={styles.form}>
            {error}
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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

export default Login;
