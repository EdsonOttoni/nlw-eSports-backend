import express from "express" 

const app = express()

app.get('/', (req, res) => {
  return res.send('Acessou ads!')
})

app.listen(3333)