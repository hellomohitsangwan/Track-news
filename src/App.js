import "./App.css";
import SearchArticle from "./Components/SearchArticle";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Components/Loader";
function App() {
  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;

  return (
    <div className="App">
      <SearchArticle />
      {loading && <Loader />}
    </div>
  );
}

export default App;
