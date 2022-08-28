import Head from "next/head";
import client from "../apollo/client";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { Movie } from "../typing";
import {
  DailyBoxOffice,
  ForeignBoxOffice,
  KoreanBoxOffice,
  WeeklyBoxOffice,
} from "../utils/gqls";

interface Props {
  dailyBoxOffice: Movie[];
  weeklyBoxOffice: Movie[];
  koreanBoxOffice: Movie[];
  foreignBoxOffice: Movie[];
}

const Home = ({
  dailyBoxOffice,
  weeklyBoxOffice,
  koreanBoxOffice,
  foreignBoxOffice,
}: Props) => {
  return (
    <div className="relative bg-gradient-to-b h-screen lg:h-[140vh]">
      <Head>
        <title>BoxOffice Rank</title>
      </Head>
      <main className="relative pl-4 pb-24 lg:pl-16">
        <Banner
          dailyBoxOffice={dailyBoxOffice}
          weeklyBoxOffice={weeklyBoxOffice}
          koreanBoxOffice={koreanBoxOffice}
          foreignBoxOffice={foreignBoxOffice}
        />
        <section className="md:space-y-24">
          <Row title="Daily BoxOffice" movies={dailyBoxOffice} />
          <Row title="Weekly BoxOffice" movies={weeklyBoxOffice} />
          <Row title="Weekly Korean BoxOffice" movies={koreanBoxOffice} />
          <Row title="Weekly Foreign BoxOffice" movies={foreignBoxOffice} />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [dailyBoxOffice, weeklyBoxOffice, foreignBoxOffice, koreanBoxOffice] =
    await Promise.all([
      client
        .query({ query: DailyBoxOffice })
        .then((res) => res.data.dailyBoxOffice),
      client
        .query({ query: WeeklyBoxOffice })
        .then((res) => res.data.weeklyBoxOffice),
      client
        .query({ query: ForeignBoxOffice, variables: { repNationCd: "F" } })
        .then((res) => res.data.foreignBoxOffice),
      client
        .query({ query: KoreanBoxOffice, variables: { repNationCd: "K" } })
        .then((res) => res.data.koreanBoxOffice),
    ]);
  return {
    props: {
      dailyBoxOffice,
      weeklyBoxOffice,
      foreignBoxOffice,
      koreanBoxOffice,
    },
  };
};
