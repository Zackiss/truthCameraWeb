import Navbar from "./Navbar";
import "../styles/globals.css";

function Team({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default Team;