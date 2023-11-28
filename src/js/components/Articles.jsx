import React from "react";
import Button from "./Button";
import { Row, Col } from 'react-bootstrap';
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
                className="card-img-top image-style"
                src ={article.urlToImage}
                alt={article.title}
            />
        <div 
        className="article-details">
            <TopicText topic = "Topic" />
            <TitleText title={article.title} />
            <DateText>{date}</DateText>
            <Button text="Read More" className="button-class secondary" onClick={handleButtonClick} />
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
        <div className="container justify-content-center">
          {articlePairs.map((pair, columnIndex) => (
            <Row key={columnIndex} className="item-row">
              {pair.map((article, rowIndex) => (
                <Col key={rowIndex} xs-4>
                  <ArticleItem article={article} />
                </Col>
              ))}
            </Row>
          ))}
        </div>
      );
}

export default ArticlesDisplay;