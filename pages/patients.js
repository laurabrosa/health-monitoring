import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/Patient.module.scss";
import Card from "../src/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Patient() {

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
            <Link className={styles.link} href="/login">
              <a>
                <FontAwesomeIcon
                  icon={["fas", "sign-out-alt"]}
                  className={styles.icon}
                />
                Sair
              </a>
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h2>Meus Pacientes</h2>
        <div>
          <Card
            cardText="Laura Rosa"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
          <Card
            cardText="Paciente 2"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
          <Card
            cardText="Paciente 3"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
        </div>
        <div>
          <Card
            cardText="Paciente 4"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
          <Card
            cardText="Paciente 5"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
          <Card
            cardText="Paciente 6"
            cardColor="#f1f5fd"
            buttonLink="/"
            buttonText="Mais Detalhes"
            buttonBgColor="#3C64B1"
            buttonFocus="#3C64B1"
            buttonHover="#3a6dcc"
            buttonTarget="_blank"
            bpmInfo="96 BPM"
            oxiInfo="99 SpO2%"
            tempiInfo="36ºC"
          />
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
