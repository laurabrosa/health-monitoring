/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../src/styles/Login.module.scss";
import { useRouter } from 'next/router';
import { useRef } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebase } from '../services/firebase';
import { uiConfig } from '../services/firebaseAuthUI';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const Login = () => {
  
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const authConfig = uiConfig(firebase);

  if (loading) {
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{ marginTop: '120px' }} />
    </Box>
  }
  else if (error) {
    return <Alert severity="error">{error}</Alert>
  }
  else if (user) {
    router.push('/patients');
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Head>
          <title>Co-Doutor - Login</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.logo}>
            <img
              src="/logo-big.svg"
              alt="Co-doutor Logo"
              width={187}
              height={217}
            />
          </div>
          <section
            className={styles.form}>
            <StyledFirebaseAuth className={styles.language} uiConfig={authConfig} firebaseAuth={auth} />
          </section>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/laurabrosa/health-monitoring"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.githubLogo}>
            <img
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
