import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Slider from "components/Slider/Slider";

import Galeria from "components/Galeria/Galeria";

type Slider = {
  id: number;
  image?: string;
  subtitle?: string;
  description?: string;
  color?: boolean;
};

export default function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
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
      <Galeria />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://drpuerta.herokuapp.com/sliders`);
  const images: Slider = await res.json();

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
    },
    revalidate: 1,
  };
};
