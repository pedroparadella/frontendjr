import styled from 'styled-components'

export const Header = styled.div`
  width: 80%;
  height: 65px ;
  background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;
  position: fixed;
  top:0;
  padding-left: 10px;

  img{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
  }
`