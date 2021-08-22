import "./App.css";
import ArticlesScreen from "./Screens/ArticlesScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        {/* <Container> */}
        <Route path="/search/:name" exact component={ArticlesScreen} />
        <Route path="/" exact component={HomeScreen} />
        {/* </Container> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
