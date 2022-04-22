import trash from '../../Assets/Icon/Icon-trash.svg'
import edit from '../../Assets/Icon/Icon-edit.svg'
import './Styles/style-card.scss'
import './Styles/position-card.scss'

export const Card = ({pokemonName, pokemonImage}) => {
  function handleClick(){
    alert('Funcionalidade não implementada')
  }
  return(

    <div className='card'>    
      <div className="content">
        <div className='description'>
          <img src={pokemonImage} alt='Um pokemon'/>
          <p className='pokemon-name'>{pokemonName}</p>    
        </div>

        <div className='actions'>
          <button id='delete'     className='button-card'   type='button' onClick={handleClick}>
          <img src={trash} alt='Lixeira'/>
          Excluir
          </button>
          
          <button id='edit' className='button-card' type='button' onClick={handleClick}>
          <img src={edit} alt='Lapis'/>
          Editar
          </button>
        </div>
      </div>
    </div>
  )
}