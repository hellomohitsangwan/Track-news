import "./App.css";
import SearchArticle from "./Components/SearchArticle";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Components/Loader";
import ArticleCard from "./Components/ArticleCard";
import ArticlesScreen from "./Screens/ArticlesScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import { grey } from "@material-ui/core/colors";
import Footer from "./Components/Footer";

function App() {
  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;

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

