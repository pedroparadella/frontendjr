import styled from "styled-components";

interface ContainerProps {
  isModalOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f6f4f6;

  
  width: 100%;

  height: ${(props) => (props.isModalOpen ? "100vh;" : "100%;")}
  
  overflow: ${(props) => (props.isModalOpen ? "hidden;" : "auto;")};
  
padding-bottom: 50px;


`;

export const Article = styled.article`
  margin: auto;
  width: 75%;
  height: 100%;
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 40px 0;

  h1 {
    font-size: 32px;
    color: #5f1478;
  }

  button {
    border: none;

    font-size: 18px;
    font-weight: 800;

    color: #ffff;
    background: #e76316;

    cursor: pointer;

    border-radius: 8px;

    padding: 12px 40px;

    box-shadow: 0px 3px 6px #92207242;

    transition: all 0.3s ease;
    :hover {
      opacity: 0.9;
    }
    :active {
      transform: scale(0.9);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;

  gap: 37px;

  flex-wrap: wrap;
`;
