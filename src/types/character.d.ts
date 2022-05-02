import { KeyboardEvent } from 'react';

export interface Character {
  name: string;
  id: number;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface ButtonStyled {
  secondary?: boolean;
  width?: number;
  height?: number;
  color: string;
}

export interface CharProps {
  character: {
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };
}

export interface input {
  target: {
    value: string;
  };
}

export interface Content {
  children: JSX.Element;
}

export interface CharacterContextProps {
  children: ReactNode;
}

interface ModalContextProps {
  children: ReactNode;
}

export interface KeyDown {
  key: string;
}
