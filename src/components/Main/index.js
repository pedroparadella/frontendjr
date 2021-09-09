import './styles.css'

import Post from '../Post'
import Modal from '../Modal'

const Main = ({ posts, modal, modalMethod }) => {
  return (
    <div className="main-container">
      <div className="sub">
        <h1>Resultado de busca</h1>
        <button type="button" onClick={ () => modalMethod(true)}>Novo Card</button>
        { !!modal ? < Modal onClose={() => modalMethod(false)} /> : null }
      </div>
      < Post posts={posts} modal={modal} modalMethod={modalMethod}/>
    </div>
  )
}

export default Main