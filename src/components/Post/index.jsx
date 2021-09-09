import Button from '../Button'
import './styles.css'

const Post = ({ posts, modal, modalMethod}) => {
  return (
      <div className="post-area">
        {posts.map(post =>
          <div key={post.id} className="post">
            <img src={post.img} alt="photo"/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            < Button modal={modal} modalMethod={modalMethod} />
          </div>)}
      </div>
  )
}

export default Post