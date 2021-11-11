import "../styles/globals.css";
import Layout from "../component/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider, useDispatch } from "react-redux";
import { store } from "../app/store";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
