import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Head>
          <title>Sugar Spoon Bakery</title>
          <meta name="description" content="Delicious homemade bakery goods" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://js.stripe.com/v3/" strategy="afterInteractive" />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
