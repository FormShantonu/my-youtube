import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head />
      <Body />
      {/**
       * Head
       * Body
       *  sidebar
       *    MenuItem
       *  mainContainer
       *    ButtonsList
       *    video container
       *      VideoCard
       *       VideoCard
       *       VideoCard
       */}
    </div>
  );
}

export default App;
