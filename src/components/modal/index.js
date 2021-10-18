import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/x.json";
import * as S from '../../style/modal'

export default function Modal() {
  const [conditional, setConditional] = useState(true)
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  function closeModal() {
    setConditional(false)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
    {conditional ?

      <S.Modal>
            <S.Card>
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={setAnimationState.isStopped}
                isPaused={setAnimationState.isPaused}
              />
              <h3>Ops!</h3>
              <p>Essa funcionalidade ainda não foi implementada.</p>

              <button onClick={closeModal}>Fechar</button>
            </S.Card>
      </S.Modal>

      : null
    }
    </>
  );
}
