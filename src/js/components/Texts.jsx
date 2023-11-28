import React from "react";

/*It is easier to update components for the entire app 
through a single file. This also aids in reuse without worrying
about the specific classNames. 
*/

export const TitleText = ({title}) => {
    return (
        <h3 className="title-text">
            {title}
        </h3>
    );

}

export const TopicText = ({topic}) => {
    return (
        <h4 className="topic-text">
            {topic}
        </h4>
    );
}

export const IntroText = ({intro}) => {
    return (
        <p className="intro-text">
            {intro}
        </p>
    );

}

export const DateText = ({date}) => {
    return(
        <h4 className="date-text">
            {date}
        </h4>
    );

}