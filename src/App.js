import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-3 main-title">
        Khan Bahadur Shopping Mall
      </h1>
      <Shop />
    </div>
  );
}

export default App;
