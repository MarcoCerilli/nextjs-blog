import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css"; // Ho corretto il percorso se questo è index.js

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ciao, mi chiamo Marco e sono uno sviluppatore web.</p>
        <p>
          (Questo è un sito di esempio – costruirai un sito come questo nel{' '}
          <a href="https://nextjs.org/learn">nostro tutorial di Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}