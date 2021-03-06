import Navigation from "../Navigation/Navigation";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import { theme } from "styles/theme";
import ContactTop from "components/ContactTop/ContactTop";
import Footer from "components/Footer/Footer";
import DerechosFooter from "components/DerechosFooter/DerechosFooter";
const Container = (props: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>Dr Jorge Puerta</title>
      <meta
        name="description"
        content="Dr Jorge Puerta P&aacute;gina Oficial"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&family=Poppins:wght@100;300&family=Roboto&family=Roboto+Slab&display=swap"
        rel="stylesheet"
      />
    </Head>
    <ContactTop />
    <Navigation />
    {props.children}
    <Footer />
    <DerechosFooter />
  </ThemeProvider>
);

export default Container;
