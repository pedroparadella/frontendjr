import styled from "styled-components";
import bg from "../assets/bg.jpeg";

export const Background = styled.div`
  background-image: url(${bg});
  background-position: 100%;
  background-position-y: 12%;
  background-size: cover;
  filter: drop-shadow(0 0.25rem 0.3125rem rgba(0, 0, 0, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16.3125rem;
`;

export const Input = styled.input`
  width: 65.375rem;
  height: 4.6875rem;
  margin: 5.1875rem 0 2.4375rem 2rem;
  text-indent: 1.75rem;
  outline-style: none;
  border: 0;
  border-radius: 0.5rem;
  filter: drop-shadow(0 0.25rem 0.3125rem rgba(0, 0, 0, 0.25));
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
  flex-wrap: wrap;
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

  background: #e76316;
  color: #ffffff;
  cursor: pointer;
  font-family: muli, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 0.1875rem 0.375rem #92207242;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10.5rem;
  margin-right: 14.125rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.0625rem;
  justify-content: flex-start;

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  color: #263238;

  box-shadow: 0 0.0625rem 0.0625rem #e5e5e5;
  border-radius: 0.5rem;
  border: 0.0625rem #e4e4e4;

  width: 13.375rem;
  margin-bottom: 0.625rem;
`;

export const Image = styled.img`
  width: 5.9375rem;
  height: 5.9375rem;
  border-radius: 100%;
  border: 0.0625rem solid #e4e4e4;
`;

export const Hr = styled.hr`
  width: 10.5769rem;
  color: #f0eff0;
  border-top: 0.0625rem;
  margin-top: 1.3787rem;
`;

export const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  width: 11rem;
`;

export const P = styled.p`
  margin: 0;
  font-size: 0.875rem;
  width: 10.9375rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  padding-top: 1.75rem;
  width: 13.375rem;
  height: 13rem;

  border-radius: 0.5rem 0.5rem 0 0;
  border: 0.0437rem solid #e4e4e4;
  box-shadow: 0 0.1875rem 0.3125rem #f4efef;
`;

export const Options = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;

  border: 0.0625rem solid #e4e4e4;
  margin: 0;

  width: 13.375rem;
  height: 2.6875rem;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Trash = styled.img`
  padding-left: 1rem;
`

export const POptions = styled.h2`
  color: #263238;
  font-size: 1rem;
  opacity: 0.52;
  font-family: muli, sans-serif;
  margin: 0 0 0 0.625rem;
  line-height: 0;
  height: 0;

`;

export const OHr = styled.hr`
  height: 1.3919rem;
  border-left: 0.0625rem solid #f0eff0;
  border-top: 0;
  margin: 0 1.125rem;
`;

