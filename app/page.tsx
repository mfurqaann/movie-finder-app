import Navbar from "@/components/Navbar";
import PopularMovieContainer from "@/components/PopularMovie/PopularMovieContainer";
import TrendingMovieContainer from "@/components/TrendingMovie/TrendingMovieContainer";

export default async function Home() {
  const apiKey = 'c888f8286ed76434eb3e9e865e1d467e';
  return (
    <div className="container mx-auto px-10">
      <Navbar />
      <TrendingMovieContainer />
      <PopularMovieContainer />
    </div>
  );
}
