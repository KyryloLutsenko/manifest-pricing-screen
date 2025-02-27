import Pricing from "@/components/Pricing";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing Screen</title>
        <meta name="description" content="Manifest pricing screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Pricing />
      </main>
    </>
  );
}
