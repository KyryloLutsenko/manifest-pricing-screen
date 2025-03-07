import type { AppProps } from "next/app";
import RootLayout from "@/components/Layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
