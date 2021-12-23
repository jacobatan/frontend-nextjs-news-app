import Header from "../../components/Header";
import MainCard from "../../components/MainCard";
import SideHeader from "../../components/SideHeader";

export default function business({ latestNews, topicParam }) {
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

  return (
    <div>
      <main className="flex max-w-6xl mx-auto">
        <section className="py-20 flex flex-col border-r pr-12 ">
          <Header category={topicParam} />
          {news.map(
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
        </section>

        <section className="pt-20 pb-10 flex flex-col pl-12 w-2/5 max-h-1.5 sticky top-0">
          <SideHeader topics={topics} />
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;

  const resLatestNews = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en&category=${params.ID}`
  );
  const latestNews = await resLatestNews.json();
  return {
    props: {
      latestNews,
      topicParam: params.ID,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { ID: "business" },
      },
      {
        params: { ID: "entertainment" },
      },
      {
        params: { ID: "food" },
      },
      {
        params: { ID: "health" },
      },
      {
        params: { ID: "politics" },
      },
      {
        params: { ID: "science" },
      },
      {
        params: { ID: "sports" },
      },
      {
        params: { ID: "technology" },
      },
      {
        params: { ID: "top" },
      },
      {
        params: { ID: "world" },
      },
    ],
    fallback: false,
  };
}
