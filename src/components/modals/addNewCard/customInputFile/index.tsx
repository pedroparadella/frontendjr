import React, { useRef } from 'react';
import * as B from '../../../Button';
import * as S from './styles';

const CustomFileInput = () => {
  const inputRef = useRef(null);

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  return (
    <S.Container>
      <span>INCLUA UMA IMAGEM PARA APARECER NO CARD</span>

      <S.FileInput>
        <span>Nenhum arquivo selecionado</span>
        <B.Button
          onClick={handleOpenFileInput}
          secondary
          color="#e76316"
          width={224}
        >
          Escolher arquivo
        </B.Button>
        <input id="input-file" type="file" ref={inputRef} />
      </S.FileInput>
    </S.Container>
  );
};

export default CustomFileInput;
