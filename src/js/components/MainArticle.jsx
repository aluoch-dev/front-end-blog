import React from "react";
import { IntroText, TitleText, TopicText } from "./Texts";
import Button from "./Button";

const MainArticle = ({item}) => {
    
    return (
        <>
        <div className="main-article">
            <div className="main-image">
                <img 
                    src ={item.urlToImage}
                    alt={item.title}
                />
            </div>
            <div className="article-details">
                <TopicText >Topic</TopicText>
                <TitleText>{item.title}</TitleText>
                <IntroText>{item.description}</IntroText>
                <Button bg="black"></Button>
            </div>
        </div>
        </>
    )

}

export default MainArticle;