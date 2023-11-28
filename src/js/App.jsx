import React, { useEffect } from "react";
import Search from "./components/Search";
import MainArticle from "./components/MainArticle";

import { useState } from "react";
import ArticlesDisplay from "./components/Articles";

function App() {

  const [items, setItems] = useState([])
  const [latestItem, setLatestItem] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=16900b65925245b4a02047e1cf0027c5`)
    .then(res => res.json())
    .then(data => {

      setItems(data.articles)
      
      if (data.articles.length > 0) {
        setLatestItem(data.articles[0]);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  }, []);
      
  return (
    <>
     <Search />
     <MainArticle item={latestItem} />
     <ArticlesDisplay articles={items}/>
    </>
  );
}

export default App;
