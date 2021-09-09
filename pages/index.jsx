import Head from "next/head";
import Headers from "../pages/components/Headers";
import NaviTitles from "../pages/components/NaviTitles";
import Results from "../pages/components/Results";
import Requests from "../utilities/Requests";

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Headers */}
      <Headers />
      {/* NavBar */}
      <NaviTitles />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const requests = await fetch(
    `https://api.themoviedb.org/3${
      Requests[genre]?.url || Requests.Trending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: requests.results,
    },
  };
}
