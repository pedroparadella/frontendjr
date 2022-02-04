import { css } from "styled-components"
export const colors ={
  danger: () => css`
      color: #DB2525;
  `,
  warning: () => css`
      color: #E76316;
  `,
  btn_danger: () => css`
      border-radius: 8px;
      border: 1px solid #DB2525;
      color: #fff;
      background: #DB2525;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background: #B51F1F;
      }
  `,
  btn_danger_outline: () => css`
      border-radius: 8px;
      color: #DB2525;
      background: #fff;
      border: 1px solid #DB2525;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background:#B51F1F;
        color:#fff;
      }
  `,
  btn_warning: () => css`
      border-radius: 8px;
      color: #fff;
      background: #E76316;
      border: 1px solid #E76316;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background: #DB5E16;
      }
  `,
  btn_warning_outline: () => css`
      border-radius: 8px;
      color: #E76316;
      background: #fff;
      border: 1px solid #E76316;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background:#DB5E16;
        color:#fff;
      }
  `,
}
