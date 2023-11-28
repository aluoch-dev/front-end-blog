import React from "react";
import Button from "./Button";
import { TopicText, TitleText, DateText } from "./Texts";


const Articlearticle = ({article}) => {

    const date = article.publishedAt 
    const formatedDate = date.replace('T', ',')

    return (
        <div className="article-wrapper">
            <div className="article-image">
                <img src={article.urlToImage} alt={`Image for ${article.title}`} />
            </div>
            <div className="article-texts">
                <TopicText>Topic</TopicText>
                <TitleText>{article.title}</TitleText>
                <DateText>{formatedDate}</DateText>
                <Button />
            </div>
        </div>
    )
}

const ArticlesDisplay = ({articles}) => {

    return (
        <div className="article-ietms">
            {articles?.map((article, i) => (
                <ArticleItem 
                key={i}
                article={article} />
            ))}
        </div>
    )
}

export default ArticlesDisplay;