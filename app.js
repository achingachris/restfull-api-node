import express from 'express'

const app = express()
const PORT = 4000

app.get('/', (req, res) => res.send(`Application running on port ${PORT}`))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
