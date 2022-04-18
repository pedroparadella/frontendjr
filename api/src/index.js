const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const cards = []

app.use(express.json())
app.use(cors())

/*
 *- string
 * message - string
 * id - uuid
 */

app.post('/cards', (req, res) => {
  const { message } = req.body
  cards.push({
    message,
    id: uuidv4()
  })
  return res.status(201).send()
})

app.get('/cards', (req, res) => {
  return res.json(cards)
})

app.get('/cards/:id', (req, res) => {
  const { id } = req.params
  const card = cards.find(card => card.id === id)
  return res.json(card)
})

app.put('/cards/:id', (req, res) => {
  const { id } = req.params
  const { message } = req.body

  const cardIndex = cards.findIndex(card => card.id === id)

  cards[cardIndex] = {
    ...cards[cardIndex],
    message
  }
  return res.json(cards)
})

app.delete('/cards/:id', (req, res) => {
  const { id } = req.params
  const cardIndex = cards.findIndex((card => card.id === id))
  
  cards.splice(cardIndex, 1)

  return res.status(200).json(cards)
})

app.listen(3333)
