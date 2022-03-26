import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Question from "./components/Question/Question";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-3 main-title">
        Khan Bahadur Shopping Mall
      </h1>
      <Shop />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
