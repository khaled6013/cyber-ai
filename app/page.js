import Banner from "./home/Banner";
import Dive from "./home/Dive";
import Nav from "./home/Nav";
import Universe from "./home/Universe";
import Unveil from "./home/Unveil";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Nav></Nav>
        <Banner></Banner>
        <Unveil></Unveil>
        <Universe></Universe>
        <Dive></Dive>
        <div className="absolute top-0 left-38 h-full w-0.5 bg-linear-to-b from-[#E03609] to-[#F0B71F]"></div>
        <div className="absolute top-0 right-38 h-full w-0.5 bg-linear-to-b from-[#F0B71F] to-[#E03609]"></div>
      </div>
    </>
  );
}
