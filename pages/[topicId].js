import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useNewsSearch } from "../components/hooks/useNewsSearch";
import MainCard from "../components/MainCard";
import SideHeader from "../components/SideHeader";

export default function business({ topicParam, latestNews }) {
  console.log(latestNews);
  // let [news, setNews] = useState([]);
  const news = latestNews.results;
  let topics = [
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

  topics = topics.filter((topic) => topic != topicParam);
  // const [page, setPage] = useState(1);

  // const handleClick = () => {
  //   setPage(++page);
  // };

  // const firstRender = useRef(false);

  // useEffect(() => {
  //   const fetchInital = async () => {
  //     const resLatestNews = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en&category=${topicParam}`
  //     );
  //   };
  // }, []);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     let res = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en&category=${topicParam}&page=${page}`
  //     );
  //     res = await res.json();
  //     setNews((news) => [...news, ...res.results]);
  //   };
  //   firstRender.current ? fetchAPI() : (firstRender.current = true);
  // }, [page]);

  return (
    <div>
      <main className="flex max-w-6xl mx-auto">
        <section className="py-20 flex flex-col border-r pr-12 ">
          <Header category={topicParam} />
          {news?.map(
            (
              { title, description, creator, image_url, keywords, link },
              index
            ) => (
              <MainCard
                title={title}
                description={description}
                creator={creator}
                imgURL={image_url}
                keywords={keywords}
                link={link}
                key={index}
              />
            )
          )}
          {/* <button
            onClick={() => {
              handleClick();
            }}
          >
            test
          </button> */}
        </section>
        <section className="pt-20 pb-10 md:flex flex-col pl-12 w-2/5 max-h-1.5 sticky top-0 sm:hidden">
          <SideHeader topics={topics} />
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;

  const resLatestNews = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en&category=${params.topicId}`
  );
  const latestNews = await resLatestNews.json();
  return {
    props: {
      latestNews,
      topicParam: params.topicId,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { topicId: "business" },
      },
      {
        params: { topicId: "entertainment" },
      },
      {
        params: { topicId: "food" },
      },
      {
        params: { topicId: "health" },
      },
      {
        params: { topicId: "politics" },
      },
      {
        params: { topicId: "science" },
      },
      {
        params: { topicId: "sports" },
      },
      {
        params: { topicId: "technology" },
      },
      {
        params: { topicId: "top" },
      },
      {
        params: { topicId: "world" },
      },
      {
        params: { topicId: "environment" },
      },
    ],
    fallback: false,
  };
}
