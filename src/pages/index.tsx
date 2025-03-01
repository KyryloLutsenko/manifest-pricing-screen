import Head from "next/head";
import { useFeature, useFeatureValue } from "@growthbook/growthbook-react";
import Pricing from "@/components/Pricing/Pricing";

import "@/styles/globals.css";

export default function Home() {
  const showTimer = useFeature("pricing-timer");

  console.log(showTimer);

  return (
    <>
      <Head>
        <title>Pricing Screen</title>
        <meta name="description" content="Choose the best pricing plan." />
      </Head>
      <main>{showTimer ? <Pricing /> : <div>aaaa</div>}</main>
    </>
  );
}
