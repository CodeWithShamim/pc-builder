import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress color="#00bfff" height={4} />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
