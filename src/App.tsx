import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Playlists } from "./components/Playlists";

function App() {
  return (
    <div className="contentWrapper">
      <Header />
      {/* <Hero />
      <About /> */}
      <Playlists />
    </div>
  );
}

export default App;
