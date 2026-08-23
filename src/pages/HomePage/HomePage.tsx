import Divider from "../../components/Divider";
import Hero from "../../features/hero/Hero";
import Timeline from "../../features/timeline/Timeline";

function HomePage() {
  return (
    <div className="page">
      <Hero />
      <Divider />
      <Timeline />
    </div>
  );
}

export default HomePage;
