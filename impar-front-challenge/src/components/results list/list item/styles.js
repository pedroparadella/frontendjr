import styled from "styled-components";

export const ListElement = styled.li`
  background-image: url(${(props) => props.image});
  background-size:cover;
  background-position: center;
  text-align: center;

  img {
    width: 70px;
    height: 70px;
    
  }

  p {
    font-size: 0.8rem;
    margin: 0.3rem 0;
    text-transform: capitalize;
    color: white;
    font-weight: 800;
  }
`;

export const ListElementActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.2rem;
  background-color: rgb(242, 242, 242);
  height: 3rem;
  border-radius: 0 0 5px 5px;
  
  
  span {
    padding: 0 5px;
    pointer-events: none;
  }
`;
