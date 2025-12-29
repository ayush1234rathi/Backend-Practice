require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Server is Ready</h1>')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
  {
    id: 1,
    title: 'Why did the developer go broke?',
    des: 'Because he used up all his cache.'
  },
  {
    id: 2,
    title: 'Bug or feature?',
    des: 'It’s not a bug, it’s an undocumented feature.'
  },
  {
    id: 3,
    title: 'Frontend life',
    des: 'I love JavaScript, but sometimes it doesn’t love me back.'
  },
  {
    id: 4,
    title: 'Backend joke',
    des: 'Why do programmers prefer dark mode? Because light attracts bugs.'
  },
  {
    id: 5,
    title: 'TypeScript',
    des: 'I thought I fixed the error, but TypeScript found five more.'
  },
  {
    id: 6,
    title: 'Full stack',
    des: 'Being a full-stack developer means Googling errors on both ends.'
  }
]

  res.json(jokes)
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
