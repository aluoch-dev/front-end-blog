import React from "react";

export const TitleText = ({title}) => {
    return (
        <>
            <h1 className="title-text">
                {title}
            </h1>
        </>
    );

}

export const TopicText = ({topic}) => {
    return (
        <>
        <p className="topic-text">
            {topic}
        </p>
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