/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { database, auth } from "../services/firebase";
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Card from "../src/components/Card";
import Head from "next/head";
import Link from "next/link";
import styles from "../src/styles/Patient.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Patient = () => {

  const router = useRouter();
  const [user] = useAuthState(auth);
  const [patients, setPatients] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }
  );

  useEffect(() => {
    function getData() {
      const refPatients = database.ref("patients")
      refPatients.on("value", (result) => {
        const resultPatients = Object.entries(result.val()).map(([key, value]) => {
          return {
            // value.temperature.map(res => res.value)
            "key": key,
            "name": value.name,
            "bpm": value.bpm,
            "spo2": value.spo2,
            "temperature": value.temperature,
          }
        })
        setPatients(resultPatients);
        setLoading(false);
      })
    }
    getData();
  }, [])

  const handleLogout = () => {
    auth.signOut();
    router.push('/login');
  }

  if (!user) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Co-Doutor - Início</title>
        </Head>
        <header className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.img}>
              <img
                src="/logo-small.svg"
                alt="Co-doutor Logo"
                className={styles.imgLogo}
              />
            </div>
            <div className={styles.links}>
              <Link className={styles.link} href="/patients">
                <a>
                  <FontAwesomeIcon
                    icon={["fas", "user-md"]}
                    className={styles.icon}
                  />
                  Pacientes
                </a>
              </Link>
              <button className={styles.link} onClick={() => handleLogout()}>
                <FontAwesomeIcon
                  icon={["fas", "sign-out-alt"]}
                  className={styles.icon}
                />
                Sair
              </button>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <h2>Meus Pacientes</h2>
          {isLoading ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress sx={{ marginTop: '120px' }} />
            </Box> :
            <div>
              {patients?.map((patient, i) => {
                return (
                  <Card
                    cardText={patient.name}
                    cardColor="#f1f5fd"
                    buttonLink="/patients"
                    buttonText="Mais Detalhes"
                    buttonBgColor="#3C64B1"
                    buttonFocus="#3C64B1"
                    buttonHover="#3a6dcc"
                    buttonTarget="_blank"
                    key={i}
                    bpmInfo={`${patient.bpm} BPM`}
                    oxiInfo={`${patient.spo2} SpO2%`}
                    tempInfo={`${patient.temperature.toFixed(1)} ºC`}
                  />
                )
              })}
            </div>
          }
        </main>
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
}

export default Patient;
