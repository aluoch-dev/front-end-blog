import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Topic = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`;

const Intro = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Date = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`;


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