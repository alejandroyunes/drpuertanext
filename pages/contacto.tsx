import Head from "next//head";
import ContactoComponent from "components/ContactoComp/ContactoComponent";

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
