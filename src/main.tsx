import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    newCard: Model,
  },
  seeds(server) {
    server.db.loadData({
      newCards: [
          {
            id: 1,
            text: "Sed varius non augue id gravida",
            svg: ""
          },
          {
            id: 150,
            text: "Lorem ipsum dolor sit amet ",
            svg: ""
          }
        ]
      })
  },
  routes() {
    this.namespace = 'api';
    
    this.get('/cardlist', () => {
      return this.schema.all('newCard')

    })

    this.post('/cardlist', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('newCard', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
