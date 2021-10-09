import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/Patient.module.scss";
import Card from "../src/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { database } from "../services/firebase";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthUserContext';

export default function Patient() {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router]);

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    return () => {
      const refPatients = database.ref("patients")
      refPatients.on("value", result => {
        const resultPatients = Object.entries(result.val()).map(([key, value]) => {
          return {
            "key": key,
            "name": value.name,
            "bpm": value.bpm.map(res => res.value),
            "spo2": value.spo2.map(res => res.value),
            "temperature": value.temperature.map(res => res.value),
          }
        })
        setPatients(resultPatients);
      })
    };
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Co-Doutor - Início</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.img}>
            <Image
              src="/logo-small.svg"
              alt="Co-doutor Logo"
              width={195}
              height={46}
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

            <a className={styles.link} onClick={signOut}>
              <a>
                <FontAwesomeIcon
                  icon={["fas", "sign-out-alt"]}
                  className={styles.icon}
                />
                Sair
              </a>
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h2>Meus Pacientes</h2>
        <div>
          {patients?.map(patient => {
            return (
              <Card
                cardText={patient.name}
                cardColor="#f1f5fd"
                buttonLink="/"
                buttonText="Mais Detalhes"
                buttonBgColor="#3C64B1"
                buttonFocus="#3C64B1"
                buttonHover="#3a6dcc"
                buttonTarget="_blank"
                key={patient.key}
                bpmInfo={`${patient.bpm[0]} BPM`}
                oxiInfo={`${patient.spo2[0]} SpO2%`}
                tempInfo={`${patient.temperature[0]}ºC`}
              />
            )
          })}
        </div>
      </main>
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
