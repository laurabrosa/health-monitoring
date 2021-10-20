import "../src/styles/globals.scss";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUserMd, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

config.autoAddCss = false;

library.add(fab, faUserMd, faSignOutAlt);

const App = ({ Component, pageProps }) => {

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
export default App;
