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

type NewsData = {
  news: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    date: Date;
    readMore?: string;
  }[];
};

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description?: string;
    year?: number;
  }[];
}

interface NoticiasProps {
  discos: {
    id: number;
    date?: number;
    evento: string;
    lugar: string;
    precio: number;
  }[];
}
export default function Index({
  images,
  news,
  discos,
  conciertos,
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
        message={`¡Aquí encontrarás nuestra discografía!  ¡Disfruta el mundo de Punkies y Cerebro!`}
        backgroundColor={"dark"}
      />
      <Procedimientos />
      <Title
        title={"Estudios"}
        message={`Aquí encontrarás los estudios realizados por el Dr. Jorge Puerta y su trayectoria profesional`}
        backgroundColor={"light"}
      />
      <Estudios />

      {/*
      <Discografia discos={discos} />
      <Title
        title={"Conciertos"}
        message={`¡Aquí encontrarás todos los toques!`}
        backgroundColor={""}
      />*/}
      <Conciertos />
      <Contact />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://drpuerta.herokuapp.com/sliders`);
  const images: Slider = await res.json();

  const resNews = await fetch(`https://punkies-strapi.herokuapp.com/noticias`);
  const news: NewsData = await resNews.json();

  const resDisco = await fetch(
    `https://punkies-strapi.herokuapp.com/discografias`
  );
  const discos: DiscoProps = await resDisco.json();

  const resConciertos = await fetch(
    `https://punkies-strapi.herokuapp.com/conciertos`
  );
  const conciertos: NoticiasProps = await resConciertos.json();

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
      news: news,
      discos: discos,
      conciertos: conciertos,
    },
    revalidate: 1,
  };
};
