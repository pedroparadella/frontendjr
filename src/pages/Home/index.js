import { Component } from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Main from '../../components/Main'

import './styles.css'

class Home extends Component {
  state = {
    posts: [],
    search: '',
    modal: false
  };

  componentDidMount = () => {
    this.loadData()
  }

  setSearch = (event) => {
    const { value } = event.target
    this.setState({search: value })
  }

  setModal = (param) => this.setState({ modal: param })

  loadData = async () => {
    const responsePostsAPI = fetch('https://jsonplaceholder.typicode.com/posts')
    const responsePhotoAPI = fetch('https://jsonplaceholder.typicode.com/photos')

    const [responsePost, responsePhoto] = await Promise.all([responsePostsAPI, responsePhotoAPI])
    const postsJson = await responsePost.json()
    const photoJson = await responsePhoto.json()
    const postWithPhoto = postsJson.map((post, index) => {
      return {
        ...post,
        img: photoJson[index].url
      }
    })
    this.setState({posts: postWithPhoto})
  }

  render () {
    const { posts, search, modal } = this.state
    console.log(posts)
    const filtered = !!search ? posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) : posts
    return(
      <div className="container">
        < Header />
        < Banner searchMethod={this.setSearch} searchValue={search} />
        < Main posts={filtered} modalMethod={this.setModal} modal={modal}/>
      </div>
    )
  }
}

export default Home