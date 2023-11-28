import React from "react";
import { IntroText, TitleText, TopicText } from "./Texts";
import Button from "./Button";


const handleButtonClick = () => {
    //Do something
}

const MainArticle = ({item}) => {

    
    return (
        <>
        <div className="container main-article">
            <div className="card main-article">
                <img 
                    className="card-img-top"
                    src ={item.urlToImage}
                    alt={item.title}
                />
                <div 
                className="main-article-details">
                    <TopicText topic = "Topic" />
                    <TitleText title={item.title} />
                    <IntroText intro={item.description} />
                    <Button text="Read More" onClick={handleButtonClick} />
                </div>
            </div>
            <hr className="hr-divider"></hr>
        </div>
        </>
    )
}

export default MainArticle;