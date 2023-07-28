import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?(page: ReactNode): JSX.Element;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as CustomNextPage).getLayout || ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}
