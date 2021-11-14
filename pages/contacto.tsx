import Head from "next//head";
import ContactoComponent from "components/Contacto/contacto";

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contact Title</title>
      </Head>
      <ContactoComponent />
    </div>
  );
}
