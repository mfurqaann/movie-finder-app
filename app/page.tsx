import Navbar from "@/components/Navbar";
import TrendingMovieContainer from "@/components/TrendingMovie/TrendingMovieContainer";

export default async function Home() {
  const apiKey = 'c888f8286ed76434eb3e9e865e1d467e';
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
  );

  console.log(await res.json())
  return (
    <div className="container mx-auto px-10">
      <Navbar />
      <TrendingMovieContainer />
    </div>
  );
}
