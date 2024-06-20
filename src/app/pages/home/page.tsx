import Head from "next/head";
import Card from "./card";
import TextHome from "./textHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Graha Biru Company"
        />
      </Head>
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto">
        <div className="relative z-10 hidden xl:block xl:w-1/4" />
        <div className="relative z-10 w-full px-4 md:w-1/2 lg:w-1/3 mb-5 md:mb-0 md:mr-8">
          <Card />
        </div>
        <div className="text-center z-10 mx-4 md:text-left mt-8 md:mt-0 md:w-1/2 lg:pr-10 xl:pr-60 xl:w-3/5 ">
          <TextHome />
        </div>
      </div>
    </>
  );
}