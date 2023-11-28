import React from "react";
import Button from "./Button";
import { TopicText, TitleText, DateText } from "./Texts";


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

    const articleRows = [];
    for (let i = 0; i < articles.length; i += 2) {
        const row = [articles[i], articles[i + 1]];
        articleRows.push(row)
    }

    return (
        <div className="article-items">
            {articleRows?.map((row, rowIndex) => (
                <div key = {rowIndex} className="article-row">
                    {row?.map((article, articleIndex) => (
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