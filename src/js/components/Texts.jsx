import React from "react";

const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  color: black;
`;

const Topic = styled.h2`
  font-size: 12px;
  text-align: center;
  color: gray;
`;

const Intro = styled.p`
  font-size: 8px;
  text-align: center;
  color: black;
`;

const Date = styled.h4`
  font-size: 10px;
  text-align: center;
  color: gray;
`;


export const TitleText = ({title}) => {
    return <Title>{title}</Title>

}

export const TopicText = ({topic}) => {
    return <Topic>{topic}</Topic>
}

export const IntroText = ({intro}) => {
    return <Intro>{intro}</Intro>

}

export const DateText = ({date}) => {
    return <Date>{date}</Date>
}