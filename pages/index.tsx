import type { NextPage } from "next";
import Seo from "components/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/Hero";
import HotAuctions from "components/HotAuctions";
import MarketplaceSection from "components/MarketplaceSection";
import DiscoverTrendingArtists from "components/DiscoverTrendingArtists";
import ArtSplitBasics from "components/ArtSplitBasics";
import MusicSplit from "components/MusicSplit";
import FeaturedEditorials from "components/FeaturedEditorials";
import FeaturedVideos from "components/FeaturedVideos";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Home">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Seo>

      <Header />

      <main>
        <Hero />
        <HotAuctions />
        <MarketplaceSection />
        <DiscoverTrendingArtists />
        <MusicSplit />
        <ArtSplitBasics />
        <FeaturedEditorials />
        <FeaturedVideos />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
