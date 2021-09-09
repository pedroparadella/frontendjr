import './styles.css'

const Banner = ({ searchMethod, searchValue }) => {
  return(
    <div className="banner-container">
      <input type="search" placeholder="Digite aqui sua busca..." onChange={searchMethod} value={searchValue}/>
    </div>
  )
}

export default Banner