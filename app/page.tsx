import PopularMovieContainer from "@/components/PopularMovie/PopularMovieContainer";
import TrendingMovieContainer from "@/components/TrendingMovie/TrendingMovieContainer";

export default async function Home() {
  return (
    <div className="container mx-auto px-10">
      <TrendingMovieContainer />
      <PopularMovieContainer />
    </div>
  );
}
