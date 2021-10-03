import "../src/styles/globals.scss";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUserMd, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fab, faUserMd, faSignOutAlt);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
