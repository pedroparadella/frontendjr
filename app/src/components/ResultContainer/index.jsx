import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
    margin-top: 1.313rem;
    margin-left: 10px;
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 234px));
    grid-template-rows: repeat(auto-fill, max-content);
    grid-column-gap: 37px;
    grid-row-gap: 38px;
`;


export default function ResultContainer({list}) {

    return (
    <Container>
        {list.map((item, index) => (
            <Card key={index} item={item}/>
        ))}
    </Container>);
}