import { IChangesProps } from '../../interfaces/IChangesProps';
import style from './Change.module.scss';

export function Change({color, name, icon, isModalOpen }: IChangesProps): JSX.Element {
  return(
    <div className={style.icons} onClick={isModalOpen}>
      <img src={icon} alt="" />
      <span className={style[color]} >{name}</span>
    </div>
  )
}