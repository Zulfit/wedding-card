import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Tentative from "./components/Tentative";
import Details from "./components/Details";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <>
      <ReactPlayer
        src="https://youtu.be/kH7wlLOQMNM?si=-hTop1Ghs793-TPV"
        playing={true}
        style={{ display: "none" }}
      />
      <Hero
        bride="Halima"
        groom="Yunus"
        date={{
          month: "DECEMBER",
          dayName: "SUNDAY",
          dayNumber: "30",
          year: "2026",
          time: "AT 5 PM"
        }}
        location={["43 MEAM STREET", "BLACKBURN", "BB19TQ"]} />
      <Details />
      <Countdown targetDate={new Date("2026-12-30T17:00:00")} />
      <Tentative />
    </>  
  );
}
