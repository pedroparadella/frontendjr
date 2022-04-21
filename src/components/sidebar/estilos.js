import styled from "styled-components";

export const FullSidebar = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: #f6f4f6cc;
  animation: slideY 0.3s;

  @keyframes slideY {
    from {
      transform: translatex(100%);
    }

    to {
      transform: (0);
    }
  }
`;

export const SidebarContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  width: 40%;
  height: 100vh;
  background-color: #fff;
  @media (max-width: 1500px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  } ;
`;

export const Sidebar = styled.div`
  max-width: 95%;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  p {
    font: normal bold 32px/40px Muli;
    color: #5f1478;
    padding-left: 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0 60px 0;
  gap: 4rem;
  div {
    position: relative;
  }
  input {
    width: 100%;
    height: 60px;
    font-size: 23px;
    border: 1px solid #b9b9b9;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
  }
  input::-webkit-file-upload-button {
    display: none;
    user-select: none;
  }
  .fake-file input {
    color: #757575;
  }
  p {
    font: normal normal bold 14px/18px Muli;
    padding-bottom: 15px;
    @media (max-width: 550px) {
      font-size: 12px;
      text-align: center;
    }
  }
  button {
    position: absolute;
    padding: 12px 60px;
    bottom: 5px;
    right: 10px;
    border: 1px solid #e76316;
    background-color: #ffffff;
    border-radius: 8px;
    color: #e76316;
    z-index: -1;
    font: normal normal bold 18px/23px Muli;
    box-shadow: 0px 3px 6px #e763162e;
    @media (max-width: 1600px) {
      padding: 8px 20px;
      bottom: 10px;
      right: 8px;
    }
    @media (max-width: 1000px) {
      padding: 8px 20px;
      bottom: 10px;
    }
    @media (max-width: 720px) {
      padding: 4px 5px;
      bottom: 15px;
    }
    @media (max-width: 660px) {
      display: none;
    }
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: end;
  border-top: 1px solid #d4d4d4;
  padding: 30px 4px 15px 0;
  button {
    padding: 20px 40px;
    font: normal normal bold 18px/23px Muli;
    border-radius: 8px;
    border: 0;
    background-color: #e76316;
    color: #fff;
  }
`;

export const ExitSidebar = styled.div`
  width: 100%;
  height: 100%;
`;
