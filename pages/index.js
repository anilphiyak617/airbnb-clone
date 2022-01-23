import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner />

      <main className="max-w-6xl mx-auto px-7 ">
        <section className="pt-6 mt-2">
          <h2 className="text-3xl md:text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>
          {
            // pull some data from the server
          }
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={item.img}
              />
            ))}
          </div>
        </section>
        <section className="pt-6 mt-2">
          <h2 className=" pb-5 text-[1.7rem] md:text-4xl font-semibold">
            Inspiration for your next trip
          </h2>
          <div className="overflow-scroll scrollbar-hide flex space-x-3">
            {cardData.map(({ title, img }) => (
              <MediumCard key={img} title={title} img={img} />
            ))}
          </div>
        </section>
      </main>
      <LargeCard
        className="pt-6 mt-2"
        img="https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=1200"
        title="Questions
          about 
          hosting?"
        buttonText="Ask a Super Host"
      />
      <Footer />
      {}
    </div>
  );
}

// In the Next JS server
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
