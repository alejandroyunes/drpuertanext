import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Slider from "components/Slider/Slider";
import Title from "components/Title/Title";
import Estudios from "components/Estudios/Estudios";
import Procedimientos from "components/Procedimientos/Procedimientos";
import Contact from "components/Contact/Contact";
import Conciertos from "components/Conciertos/Footer";
import ThreeCardIcon from "components/ThreeCardIcon/ThreeCardIcon";
import Consctruction from "components/Construction/Construction";

type Slider = {
  id: number;
  image?: string;
  subtitle?: string;
  description?: string;
  color?: boolean;
};

type Logos = {
  id: number;
  image: string;
};

export default function Index({
  images,
  logos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Dr Jorge Puerta P&aacute;gina Oficial</title>
        <meta
          name="description"
          content="Dr Jorge Puerta P&aacute;gina Oficial"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Consctruction /> */}
      <Slider images={images} />
      <ThreeCardIcon />

      <Title
        small={true}
        title={"Procedimientos"}
        message={`Aquí encontrarás las especialidades del Dr. Puerta`}
        backgroundColor={"dark"}
      />
      <Procedimientos />
      <Title
        title={"Estudios"}
        message={`Estudios realizados por el Dr. Jorge Puerta y su trayectoria profesional`}
        backgroundColor={"light"}
      />
      <Estudios />
      <Conciertos />
      <Contact />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://drpuerta.herokuapp.com/sliders`);
  const images: Slider = await res.json();

  const resLogos = await fetch(`https://drpuerta.herokuapp.com/logos`);
  const logos: Logos = await resLogos.json();

  if (!images) {
    console.log("posts false");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      images: images,
      logos: logos,
    },
    revalidate: 1,
  };
};
