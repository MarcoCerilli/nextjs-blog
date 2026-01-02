// pages/posts/first-post.js Il componente puo avere qualsiasi nome, ma è necessario esportarlo come default

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Primo Post</title>
      </Head>
      <h1>Primo Post</h1>
      <h2>
        <Link href="/">Vai alla Pagina Principale</Link>
      </h2>
    </Layout>
  );
}
