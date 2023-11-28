import React from "react";

export const TitleText = ({title}) => {
    return (
        <>
            <h3 className="title-text">
                {title}
            </h3>
        </>
    );

}

export const TopicText = ({topic}) => {
    return (
        <>
        <h4 className="topic-text">
            {topic}
        </h4>
    </>
    );
}

export const IntroText = ({intro}) => {
    return (
        <>
        <p className="intro-text">
            {intro}
        </p>
    </>
    );

}

export const DateText = ({date}) => {
    return(
        <>
        <h4 className="date-text">
            {date}
        </h4>
    </>
    );

}