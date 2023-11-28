import React from "react";
import Button from "./Button";
import { TopicText, TitleText, DateText } from "./Texts";


const handleButtonClick = () => {
    //do something
}


const ArticleItem = ({article}) => {

    const date = article.publishedAt

    return (
        <>
        <div className="card article-item">
            <img 
                className="card-img-top"
                src ={article.urlToImage}
                alt={article.title}
            />
        <div 
        className="article-details">
            <TopicText topic = "Topic" />
            <TitleText title={article.title} />
            <DateText>{date}</DateText>
            <Button text="Read More" onClick={handleButtonClick} />
        </div>
    </div>
    </>
    )
}

const ArticlesDisplay = ({articles}) => {

    const articlePairs = [];
    for (let i = 0; i < articles.length; i += 2) {
        const pair = articles.slice(i, i + 2);
        articlePairs.push(pair);
    }

    return (
        <div className="container article-rows">
            {articlePairs.map((pair, rowIndex) => (
                <div className="container article-row" key={rowIndex}>
                {pair.map((article, colIndex) => (
                    <ArticleItem key={colIndex} article={article} />
                ))}
                </div>
            ))}
        </div>
    )
}

export default ArticlesDisplay;