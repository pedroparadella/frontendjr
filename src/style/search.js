import styled from "styled-components";
import bg from "../assets/bg.jpeg";

export const Background = styled.div`
  background-image: url(${bg});
  background-position: 100%;
  background-position-y: 12%;
  background-size: cover;
  filter: drop-shadow(0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16.3125rem;
`;

export const Input = styled.input`
  width: 65.375rem;
  height: 4.6875rem;
  margin: 5.1875rem 0 2.4375rem;
  text-indent: 1.75rem;
  outline-style: none;
  border: 0;
  border-radius: 0.5rem;
  filter: drop-shadow(0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.25));
  font-family: muli, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  text-justify: auto;

  color: #757575;
`;

export const Button = styled.button`
  background: none;
  margin: 5.1875rem 0 2.4375rem;
  border: 0;
  position: relative;
  right: 5rem;
  cursor: pointer;
`;

export const Magnifier = styled.img`
  width: 3.0769rem;
  height: 3.0769rem;
`;

export const PreCardsLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0 2.25rem;
`;

export const H1 = styled.h1`
  font-family: muli, sans-serif;
  color: #5f1478;
  font-size: 2rem;
  font-weight: 400;
`;

export const NewCardButton = styled.button`
  width: 10.8125rem;
  height: 3rem;

  border-radius: 0.5rem;
  border: 0;

  background: #E76316;
  color: #FFFFFF;

  font-family: muli, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0rem 0.1875rem 0.375rem #92207242;
`

export const Section = styled.section`
  margin-left: 10.5rem;
  margin-right: 14.125rem;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.3125rem;
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: #FFFFFF;
  color: #263238;

  border-radius: 0.5rem;
  border: 0.0625rem #E4E4E4;

  width: 14.625rem;
  height: 16.6875rem;
`

export const Image = styled.img`
  width: 5.9375rem;
  height: 5.9375rem;
  border-radius: 100%;
`

export const HR = styled.hr`
  width: 10.5769rem;
  color: #F0EFF0;
  border-top: 1px;
  margin-top: 22.06px;
`

export const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  width: 11rem;
`

export const P = styled.p`
  margin: 0;
  font-size: 0.875rem;
  width: 10.9375rem;
`

export const Options = styled.div`

`
