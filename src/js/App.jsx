import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search";
import MainArticle from "./components/MainArticle";
import ArticlesDisplay from "./components/Articles";

function App() {

  const [items, setItems] = useState([])
  const [latestItem, setLatestItem] = useState([])

   /*
  Replace YOUR_API_KEY with yout your API KEY for newsAPI in the fetch endpoint
  */

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-28&sortBy=publishedAt&apiKey=YOUR_API_KEY`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Api call unsuccessful');
      }
      return res.json();
    })
    .then(data => {

      if (data.articles && data.articles.length > 0) {
        
        setItems(data.articles)
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
