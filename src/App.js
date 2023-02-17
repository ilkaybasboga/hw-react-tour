import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "./helper/data";
import "./App.scss"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="section">
        {data.map(({ id, title, desc, image }) => (
          <Card id={id} name={title} desc={desc} img={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
