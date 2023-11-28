import React, { useEffect } from "react";
import Search from "./components/Search";
import MainArticle from "./components/MainArticle";
import Articles from "./components/Articles";
import { useState } from "react";

function App() {

  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=16900b65925245b4a02047e1cf0027c5`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  })

  return (
    <>
     <Search />
     <MainArticle />
     <Articles articles={items}/>
    </>
  );
}

export default App;
