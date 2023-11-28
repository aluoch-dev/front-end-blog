import React from "react";
import { TitleText, TopicText } from "./Texts";
import Button from "./Button";

const ArticleItem = ({image, topic, title, date}) => {
    return (
        <div className="article-wrapper">
            <div className="article-image">
                <img src={image} alt={`Image for ${title}`} />
            </div>
            <div className="article-texts">
                <TopicText>{topic}</TopicText>
                <TitleText>{title}</TitleText>
                <DateText>{date}</DateText>
                <Button />
            </div>

        </div>
    )
}

const Articles = ({articles}) => {
    return (
        <div className="article-items">
            {articles.map((row, rowIndex) => (
                <div key = {rowIndex} className="article-row">
                    {row.map((article, articleIndex) => (
                        <ArticleItem
                            key = {articleIndex}
                            image = {article.image}
                            topic = {article.topic}
                            title = {article.title}
                            date = {article.date}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Articles;