import { PropsChanges } from '../../interfaces/IChanges';
import style from './Change.module.scss';

export function Change({name, icon}: PropsChanges){
  return(
    <div className={style.icons}>
      <img src={icon} alt="" />
      <span>{name}</span>
    </div>
  )
}