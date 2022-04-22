import './Styles/style-searchField.scss'

export const SearchField = ({type, value, onChangeFunction}) => { 
  // passando props no componente de input para colocar a funçao de busca em outro componente
  return (
    <div className='field-search'>
      <form>
        <input className='input-search'
        type={type}
        value={value}
        placeholder="Digite aqui sua busca..."
        onChange={onChangeFunction} />
      </form>
    </div>
  )
}
