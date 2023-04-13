import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "animate.css";

import * as React from 'react';
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../store";
import { Provider } from "react-redux";
import theme from '../theme';
import JoinTheWaitlist from "components/JoinTheWaitlist";
import WaitlistSuccessModal from "components/WaitlistSuccessModal";
import GoogleTag from "components/GoogleTag";
import LiveChat from "components/LiveChat";
import { useRouter } from "next/router";
import { MixpanelTracking } from "services/Mixpanel";
import HotJar from "components/HotJar";
const Tap = require('@tapfiliate/tapfiliate-js').default;

function MyApp({ Component, pageProps }: AppProps) {
  const Router = useRouter()
  React.useEffect(() => {
    Tap.init(process.env.TAPFILIATE_ACCOUNT_ID)
  }, [])
  
  React.useEffect(() => {
    if (Router.isReady) {
      const cleanPath = Router.asPath.replace(/\?.*$/g, '')
      MixpanelTracking.getInstance().track(cleanPath, Router.query)
    }
  }, [Router.asPath, Router.query])

  return (
    <>
      <GoogleTag />
      <LiveChat />
      <HotJar />
      
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <JoinTheWaitlist />
          <WaitlistSuccessModal />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
