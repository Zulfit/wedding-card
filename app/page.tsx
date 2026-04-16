import Hero from "./components/Hero";

export default function Home() {
  return (
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
      location={["43 MEAM STREET", "BLACKBURN", "BB19TQ"]} 
    />
  );
}
