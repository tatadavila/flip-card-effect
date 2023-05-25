// @components
import { CardFlip, Footer } from "./components";
// @styles
import "./App.css";
import { ProductTitle } from "./components/title/ProductTitle";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
      <ProductTitle />
      <div className="spacer" />
      <CardFlip />
      <Footer />
    </div>
  );
}

export default App;
