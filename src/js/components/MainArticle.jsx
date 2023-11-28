import React from "react";
import { IntroText, TitleText, TopicText } from "./Texts";
import Button from "./Button";


const handleButtonClick = () => {
    //This should link to ArticleItem page. Not yet designed.
}

const MainArticle = ({item}) => {

    
    return (
        <>
        <div className="container">
            <div className="card main-article">
                <img 
                    className="card-img-top image-style"
                    src ={item.urlToImage}
                    alt={item.title}
                />
                <div 
                className="main-article-details">
                    <TopicText topic = "Topic" />
                    <TitleText title={item.title} />
                    <IntroText intro={item.description} />
                    <Button text="Read More" className="button-class primary" onClick={handleButtonClick} />
                </div>
            </div>
            <hr className="hr-divider"></hr>
        </div>
        </>
    )
}

export default MainArticle;