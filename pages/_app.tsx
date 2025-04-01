import Header from "@/layouts/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}