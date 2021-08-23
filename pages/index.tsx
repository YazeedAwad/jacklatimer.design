import Head from "next/head";
import Header from "../components/ui/Header";
import Main from "../components/ui/Main";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jack Latimer - Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Main />
    </main>
  );
}
