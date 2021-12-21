import Head from "next/head";
import Navbar from "../components/Navbar";
import MainCard from "../components/MainCard";
import SideHeader from "../components/SideHeader";
import Header from "../components/Header";

export default function Home({ latestNews }) {
  const topics = [
    "business",
    "entertainment",
    "environment",
    "food",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
    "world",
  ];
  const news = latestNews.results;
  return (
    <div>
      <main className="flex max-w-6xl mx-auto">
        <section className="py-20 flex flex-col border-r pr-12 ">
          {news.map(
            ({ title, description, creator, image_url, keywords, link }) => (
              <MainCard
                title={title}
                description={description}
                creator={creator}
                imgURL={image_url}
                keywords={keywords}
                link={link}
              />
            )
          )}
        </section>

        <section className="pt-20 pb-10 flex flex-col pl-12 w-2/5 max-h-1.5 sticky top-0">
          <SideHeader topics={topics} />
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const resLatestNews = await fetch(
    "https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en"
  );
  const latestNews = await resLatestNews.json();
  return {
    props: {
      latestNews,
    },
  };
};
