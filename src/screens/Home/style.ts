import styled from 'styled-components'

export const Header = styled.div`
  padding: 10px;
  background-color: #dd88dd;

  background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0%
    0% padding-box;
  box-shadow: 0px 3px 6px #00000029;
`

export const InputSearch = styled.div`
  background-image: url('assets/background.png');
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10vh 33px ;

  img {
    position: fixed;
    z-index: -1;
    box-shadow: 0px 3px 6px #00000029;
  }

  input:hover::placeholder {
    color: #000;
  }

  input {
    width: 80%;
    height: 30px;
    padding: 28px;
    outline: 0;
    border: none;
    border-radius: 8px;
    background: #ffffff 0% 0% no-repeat padding-box;
    color: #757575;

    font: normal normal 300 24px/30px Muli;

    background-image: url('/assets/icon-lupa.svg');
    background-repeat: no-repeat;
    background-position: 96% center;

    @media (max-width: 750px) {
      input {
        height: 30vh;
      }
    }
  }
`

export const ContainerCards = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  p {
    font: normal normal normal 32px/40px Muli;
    color: #5f1478;
    align-items: center;
  }

`
