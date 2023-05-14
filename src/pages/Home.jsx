import React from "react";
import Hero from "../components/Hero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Row from "../components/Row";
import { requests } from "../requests";

const Home = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <Hero />
        <Row rowId={1} title="UpComing" fetchUrl={requests.requestUpcoming} />
        <Row rowId={2} title="TopRated" fetchUrl={requests.requestTopRated} />
        <Row rowId={3}  title="Trending" fetchUrl={requests.requestTrending} />
        <Row rowId={4} title="Popular" fetchUrl={requests.requestPopular} />
        <Row rowId={5} title="Horror" fetchUrl={requests.requestHorror}/>
      </QueryClientProvider>
    </>
  );
};

export default Home;
