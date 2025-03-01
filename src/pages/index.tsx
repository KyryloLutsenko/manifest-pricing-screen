import { useState, useEffect } from "react";
import Head from "next/head";
import Pricing from "@/components/Pricing/Pricing";

import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing Screen</title>
        <meta name="description" content="Choose the best pricing plan." />
      </Head>
      <main>
        <Pricing />
      </main>
    </>
  );
}
